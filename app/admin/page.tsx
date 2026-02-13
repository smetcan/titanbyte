import { getStats, getPosts } from "@/lib/db";
import { FileText, FolderOpen, MessageSquare, Heart, TrendingUp, Clock } from "lucide-react";

// Dinamik rendering
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const stats = await getStats();
  const recentPosts = await getPosts({ limit: 5 });

  const statCards = [
    { label: "Toplam İçerik", value: stats.totalPosts, icon: FileText, color: "primary" },
    { label: "Kategoriler", value: stats.totalCategories, icon: FolderOpen, color: "secondary" },
    { label: "Yorumlar", value: stats.totalComments, icon: MessageSquare, color: "accent" },
    { label: "Beğeniler", value: stats.totalLikes, icon: Heart, color: "primary" },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted">Hoş geldiniz! İşte genel bakış.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}/10`}>
                  <Icon className={`h-6 w-6 text-${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pending comments alert */}
      {stats.pendingComments > 0 && (
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-accent/20">
            <MessageSquare className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">Onay bekleyen yorum var</p>
            <p className="text-sm text-muted">
              {stats.pendingComments} yorum onay bekliyor
            </p>
          </div>
          <a
            href="/admin/comments"
            className="px-4 py-2 rounded-lg bg-accent text-background font-medium hover:bg-accent/90 transition-colors"
          >
            İncele
          </a>
        </div>
      )}

      {/* Recent posts */}
      <div className="bg-surface rounded-xl border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted" />
            <h2 className="text-lg font-semibold text-foreground">Son İçerikler</h2>
          </div>
        </div>
        <div className="divide-y divide-border">
          {recentPosts.length === 0 ? (
            <div className="p-6 text-center text-muted">
              Henüz içerik yok
            </div>
          ) : (
            recentPosts.map((post) => (
              <div key={post.id} className="p-4 flex items-center justify-between hover:bg-surface-hover transition-colors">
                <div className="flex items-center gap-4">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium text-foreground">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <span>{post.category?.name || "Kategorisiz"}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString("tr-TR")}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {post.published ? (
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-medium">
                      Yayında
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-500 text-xs font-medium">
                      Taslak
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="/admin/posts/new"
          className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 transition-all flex items-center gap-4"
        >
          <div className="p-3 rounded-lg gradient-bg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Yeni İçerik Ekle</h3>
            <p className="text-sm text-muted">Hemen yeni bir içerik oluşturun</p>
          </div>
        </a>
        <a
          href="/admin/categories"
          className="bg-surface rounded-xl p-6 border border-border hover:border-primary/30 transition-all flex items-center gap-4"
        >
          <div className="p-3 rounded-lg bg-secondary/10">
            <FolderOpen className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Kategori Yönetimi</h3>
            <p className="text-sm text-muted">Kategorileri düzenleyin</p>
          </div>
        </a>
      </div>
    </div>
  );
}
