import { NextRequest, NextResponse } from "next/server";
import { deleteComment } from "@/lib/db";

// DELETE - Yorumu sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await deleteComment(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Yorum silinemedi" },
      { status: 500 }
    );
  }
}
