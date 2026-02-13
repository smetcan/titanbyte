import { NextRequest, NextResponse } from "next/server";
import { createComment } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { headers } from "next/headers";

// POST - Yorum ekle
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { author, content } = body;

    if (!author || !content) {
      return NextResponse.json(
        { error: "İsim ve yorum zorunludur" },
        { status: 400 }
      );
    }

    // IP adresini al
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

    // Post'u bul (slug veya id olabilir)
    const { data: post, error } = await supabase
      .from('Post')
      .select('*')
      .or(`slug.eq.${slug},id.eq.${slug}`)
      .single();

    if (error || !post) {
      return NextResponse.json({ error: "İçerik bulunamadı" }, { status: 404 });
    }

    // Yorum ekle (onay bekliyor)
    await createComment({
      postId: post.id,
      author: author.trim().substring(0, 50),
      content: content.trim().substring(0, 1000),
      ipAddress: ip
    });

    return NextResponse.json({ 
      success: true, 
      message: "Yorumunuz moderatör onayından sonra yayınlanacaktır." 
    });
  } catch (error) {
    return NextResponse.json({ error: "Yorum eklenemedi" }, { status: 500 });
  }
}

// GET - Onaylanmış yorumları getir
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // Post'u bul
    const { data: post, error } = await supabase
      .from('Post')
      .select('*')
      .or(`slug.eq.${slug},id.eq.${slug}`)
      .single();

    if (error || !post) {
      return NextResponse.json({ error: "İçerik bulunamadı" }, { status: 404 });
    }

    // Onaylanmış yorumları getir
    const { data: comments } = await supabase
      .from('Comment')
      .select('*')
      .eq('postId', post.id)
      .eq('approved', true)
      .order('createdAt', { ascending: false });

    return NextResponse.json(comments || []);
  } catch (error) {
    return NextResponse.json({ error: "Yorumlar yüklenemedi" }, { status: 500 });
  }
}
