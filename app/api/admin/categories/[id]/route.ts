import { NextRequest, NextResponse } from "next/server";
import { updateCategory, deleteCategory } from "@/lib/db";
import { supabase } from "@/lib/supabase";

// GET - Tek kategori getir
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const { data: category, error } = await supabase
      .from('Category')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !category) {
      return NextResponse.json(
        { error: "Kategori bulunamadı" },
        { status: 404 }
      );
    }

    // Get post count
    const { count } = await supabase
      .from('Post')
      .select('*', { count: 'exact', head: true })
      .eq('categoryId', id);

    return NextResponse.json({
      ...category,
      _count: { posts: count || 0 }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Kategori yüklenemedi" },
      { status: 500 }
    );
  }
}

// PUT - Kategori güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, slug } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Ad ve slug zorunludur" },
        { status: 400 }
      );
    }

    // Slug benzersizlik kontrolü
    const { data: existingCategory } = await supabase
      .from('Category')
      .select('*')
      .eq('slug', slug)
      .neq('id', id)
      .single();

    if (existingCategory) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor" },
        { status: 400 }
      );
    }

    const category = await updateCategory(id, name);
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json(
      { error: "Kategori güncellenemedi" },
      { status: 500 }
    );
  }
}

// DELETE - Kategori sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Kategoride içerik var mı kontrol et
    const { count } = await supabase
      .from('Post')
      .select('*', { count: 'exact', head: true })
      .eq('categoryId', id);

    if (count && count > 0) {
      return NextResponse.json(
        { error: "Bu kategoride içerikler var. Önce içerikleri silin veya taşıyın." },
        { status: 400 }
      );
    }

    await deleteCategory(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Kategori silinemedi" },
      { status: 500 }
    );
  }
}
