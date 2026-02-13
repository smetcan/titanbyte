import { NextRequest, NextResponse } from "next/server";
import { getPosts, createPost } from "@/lib/db";
import { supabase } from "@/lib/supabase";

// GET - Tüm içerikleri getir
export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "İçerikler yüklenemedi" },
      { status: 500 }
    );
  }
}

// POST - Yeni içerik oluştur
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, content, excerpt, coverImage, categoryId, published } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Başlık, slug ve içerik alanları zorunludur" },
        { status: 400 }
      );
    }

    // Slug'ın benzersiz olduğunu kontrol et
    const { data: existingPost } = await supabase
      .from('Post')
      .select('*')
      .eq('slug', slug)
      .single();

    if (existingPost) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor" },
        { status: 400 }
      );
    }

    const post = await createPost({
      title,
      content,
      excerpt,
      coverImage,
      categoryId,
      published: published || false
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "İçerik oluşturulamadı" },
      { status: 500 }
    );
  }
}
