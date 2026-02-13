import { getPosts } from "@/lib/db";
import { Plus, Edit, Trash2, FileText, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { deletePost } from "../actions";

// Dinamik rendering
export const dynamic = "force-dynamic";

export default async function AdminPostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">İçerikler</h1>
          <p className="text-muted">Blog içeriklerini yönetin</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all"
        >
          <Plus className="h-5 w-5" />
          Yeni İçerik
        </Link>
      </div>

      {/* Posts list */}
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Henüz içerik yok</h3>
            <p className="text-muted mb-4">İlk içeriğinizi oluşturun</p>
            <Link
              href="/admin/posts/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all"
            >
              <Plus className="h-5 w-5" />
              Yeni İçerik
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 flex items-center justify-between hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center gap-4">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-16 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-16 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-foreground">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <span>{post.category?.name || "Kategorisiz"}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString("tr-TR")}</span>
                      <span>•</span>
                      <span>{post._count.likes} beğeni</span>
                      <span>•</span>
                      <span>{post._count.comments} yorum</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {post.published ? (
                    <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-medium">
                      <Eye className="h-3 w-3" />
                      Yayında
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-500 text-xs font-medium">
                      <EyeOff className="h-3 w-3" />
                      Taslak
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="p-2 rounded-lg hover:bg-surface-hover text-muted hover:text-primary transition-all"
                    >
                      <Edit className="h-5 w-5" />
                    </Link>
                    <form action={deletePost}>
                      <input type="hidden" name="id" value={post.id} />
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
