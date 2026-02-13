"use server";

import { revalidatePath } from "next/cache";
import { deleteCategory, deletePost, approveComment as approveCommentDb, deleteComment as deleteCommentDb } from "@/lib/db";
import { supabase } from "@/lib/supabase";

export async function deleteCategoryAction(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  
  if (!id) {
    throw new Error("Kategori ID gerekli");
  }

  // Kategoride içerik var mı kontrol et
  const { count } = await supabase
    .from('Post')
    .select('*', { count: 'exact', head: true })
    .eq('categoryId', id);

  if (count && count > 0) {
    throw new Error("Bu kategoride içerikler var. Önce içerikleri silin veya taşıyın.");
  }

  await deleteCategory(id);
  revalidatePath("/admin/categories");
}

export async function deletePostAction(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  
  if (!id) {
    throw new Error("İçerik ID gerekli");
  }

  await deletePost(id);
  revalidatePath("/admin/posts");
}

export async function approveComment(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  
  if (!id) {
    throw new Error("Yorum ID gerekli");
  }

  await approveCommentDb(id);
  revalidatePath("/admin/comments");
}

export async function deleteComment(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  
  if (!id) {
    throw new Error("Yorum ID gerekli");
  }

  await deleteCommentDb(id);
  revalidatePath("/admin/comments");
}

// Export with original names for compatibility
export { deleteCategoryAction as deleteCategory, deletePostAction as deletePost };
