import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/lib/db";
import { supabase } from "@/lib/supabase";

// GET - Tek içerik getir
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const post = await getPostById(id);

    if (!post) {
      return NextResponse.json(
        { error: "İçerik bulunamadı" },
        { status: 404 }
      );
    }

    // Get likes and comments count
    const [{ count: likesCount }, { count: commentsCount }] = await Promise.all([
      supabase.from('Like').select('*', { count: 'exact', head: true }).eq('postId', id),
      supabase.from('Comment').select('*', { count: 'exact', head: true }).eq('postId', id)
    ]);

    return NextResponse.json({
      ...post,
      _count: {
        likes: likesCount || 0,
        comments: commentsCount || 0
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "İçerik yüklenemedi" },
      { status: 500 }
    );
  }
}

// PUT - İçerik güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, slug, content, excerpt, coverImage, categoryId, published } = body;

    if (!title || !slug || !content || !categoryId) {
      return NextResponse.json(
        { error: "Başlık, slug, içerik ve kategori zorunludur" },
        { status: 400 }
      );
    }

    // Slug benzersizlik kontrolü
    const { data: existingPost } = await supabase
      .from('Post')
      .select('*')
      .eq('slug', slug)
      .neq('id', id)
      .single();

    if (existingPost) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor" },
        { status: 400 }
      );
    }

    const post = await updatePost(id, {
      title,
      content,
      excerpt,
      coverImage,
      categoryId,
      published
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "İçerik güncellenemedi" },
      { status: 500 }
    );
  }
}

// DELETE - İçerik sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deletePost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "İçerik silinemedi" },
      { status: 500 }
    );
  }
}
