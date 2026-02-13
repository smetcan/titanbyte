import { NextRequest, NextResponse } from "next/server";
import { approveComment } from "@/lib/db";

// POST - Yorumu onayla
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const comment = await approveComment(id);
    return NextResponse.json(comment);
  } catch (error) {
    return NextResponse.json(
      { error: "Yorum onaylanamadı" },
      { status: 500 }
    );
  }
}
