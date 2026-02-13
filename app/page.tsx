import { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { getPosts, getCategories } from "@/lib/db";
import { Sparkles, Zap, TrendingUp, Heart, MessageCircle, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "TitanByte - Bilim ve Teknoloji Haberleri",
  description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. TitanByte ile geleceği keşfedin.",
};

// Dinamik rendering
export const dynamic = "force-dynamic";

async function getPostsData() {
  return await getPosts({ published: true, limit: 10 });
}

async function getCategoriesData() {
  return await getCategories();
}

export default async function HomePage() {
  const posts = await getPostsData();
  const categories = await getCategoriesData();
  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 animate-fade-in relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6 animate-slide-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted">Bilim ve Teknoloji Dünyası</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            TitanByte
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-4">
            Bilim ve Teknoloji Haberleri
          </p>
          
          <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. Geleceği keşfedin.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Hızlı Güncellemeler</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">Derinlemesine Analizler</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="px-4 py-2 rounded-full bg-surface border border-border hover:border-primary hover:text-primary transition-all text-sm font-medium"
              >
                {category.name} ({category._count.posts})
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 rounded-full gradient-bg" />
            <h2 className="text-2xl font-bold text-foreground">
              Öne Çıkanlar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/post/${post.slug}`}
                className="group bg-surface rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
              >
                {post.coverImage ? (
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {post.category.name}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 relative gradient-bg flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/30">
                      {post.title.charAt(0)}
                    </span>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {post.category.name}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{format(new Date(post.createdAt), "d MMM yyyy", { locale: tr })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{post._count.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{post._count.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Latest Posts Section */}
      {latestPosts.length > 0 && (
        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full gradient-bg" />
              <h2 className="text-2xl font-bold text-foreground">
                Son Eklenenler
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`/post/${post.slug}`}
                className="group block bg-surface rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                        {post.category.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-4 text-xs text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{format(new Date(post.createdAt), "d MMM yyyy", { locale: tr })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{post._count.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post._count.comments}</span>
                      </div>
                    </div>
                  </div>
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-24 h-24 rounded-lg object-cover hidden sm:block"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="py-20 text-center">
          <div className="bg-surface rounded-xl p-12 border border-border max-w-md mx-auto">
            <Sparkles className="h-12 w-12 text-muted mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Henüz içerik yok
            </h3>
            <p className="text-muted">
              Yakında yeni içerikler eklenecektir.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
