import { NextRequest, NextResponse } from "next/server";
import { createLike, hasUserLiked } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { headers } from "next/headers";

// POST - Beğeni ekle
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
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

    // Daha önce beğenmiş mi kontrol et
    const alreadyLiked = await hasUserLiked(post.id, ip);
    if (alreadyLiked) {
      return NextResponse.json({ error: "Zaten beğendiniz" }, { status: 400 });
    }

    // Beğeni ekle
    await createLike(post.id, ip);

    // Toplam beğeni sayısını getir
    const { count } = await supabase
      .from('Like')
      .select('*', { count: 'exact', head: true })
      .eq('postId', post.id);

    return NextResponse.json({ likes: count || 0 });
  } catch (error) {
    return NextResponse.json({ error: "Beğeni eklenemedi" }, { status: 500 });
  }
}
