import { NextRequest, NextResponse } from "next/server";
import { getCategories, createCategory } from "@/lib/db";
import { supabase } from "@/lib/supabase";

// GET - Tüm kategorileri getir
export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Kategoriler yüklenemedi" },
      { status: 500 }
    );
  }
}

// POST - Yeni kategori oluştur
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Ad alanı zorunludur" },
        { status: 400 }
      );
    }

    const category = await createCategory(name);
    return NextResponse.json(category);
  } catch (error) {
    console.error("Kategori oluşturma hatası:", error);
    return NextResponse.json(
      { error: "Kategori oluşturulamadı" },
      { status: 500 }
    );
  }
}
