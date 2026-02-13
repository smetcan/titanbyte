import { getCategories } from "@/lib/db";
import { Plus, Edit, Trash2, FolderOpen } from "lucide-react";
import Link from "next/link";
import { deleteCategory } from "../actions";

// Dinamik rendering
export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Kategoriler</h1>
          <p className="text-muted">İçerik kategorilerini yönetin</p>
        </div>
        <Link
          href="/admin/categories/new"
          className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all"
        >
          <Plus className="h-5 w-5" />
          Yeni Kategori
        </Link>
      </div>

      {/* Categories list */}
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        {categories.length === 0 ? (
          <div className="p-12 text-center">
            <FolderOpen className="h-12 w-12 text-muted mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Henüz kategori yok</h3>
            <p className="text-muted mb-4">İlk kategorinizi oluşturun</p>
            <Link
              href="/admin/categories/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all"
            >
              <Plus className="h-5 w-5" />
              Yeni Kategori
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {categories.map((category) => (
              <div
                key={category.id}
                className="p-4 flex items-center justify-between hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <FolderOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted">/{category.slug}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted">
                    {category._count.posts} içerik
                  </span>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/categories/${category.id}`}
                      className="p-2 rounded-lg hover:bg-surface-hover text-muted hover:text-primary transition-all"
                    >
                      <Edit className="h-5 w-5" />
                    </Link>
                    <form action={deleteCategory}>
                      <input type="hidden" name="id" value={category.id} />
                      <button
                        type="submit"
                        className="p-2 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-all"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
