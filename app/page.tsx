import { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { getPosts, getCategories } from "@/lib/db";
import { 
  ArrowRight,
  Clock,
  Heart,
  TrendingUp,
  Search,
  Bell,
  ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "TitanByte - Bilim ve Teknoloji Haberleri",
  description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. TitanByte ile geleceği keşfedin.",
};

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
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full border-b border-border bg-blueprint">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Category Badge */}
            {featuredPost && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {featuredPost.category.name.toUpperCase()}
              </div>
            )}
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tighter">
              {featuredPost ? (
                <>
                  {featuredPost.title.split(' ').slice(0, 3).join(' ')}{' '}
                  <span className="text-primary">
                    {featuredPost.title.split(' ').slice(3).join(' ')}
                  </span>
                </>
              ) : (
                <>
                  Bilim ve Teknoloji{' '}
                  <span className="text-primary">Haberleri</span>
                </>
              )}
            </h1>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              {featuredPost?.excerpt || "Geleceği şekillendiren en son bilimsel keşifler, teknoloji gelişmeleri ve mühendislik yenilikleri."}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {featuredPost ? (
                <Link 
                  href={`/post/${featuredPost.slug}`}
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2.5 rounded-md font-medium transition-colors"
                >
                  Makaleyi Oku
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              ) : (
                <Link 
                  href="/about"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2.5 rounded-md font-medium transition-colors"
                >
                  Keşfet
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              )}
              <Link
                href="/categories"
                className="inline-flex items-center border border-border hover:border-primary/50 text-foreground hover:text-primary px-6 py-2.5 rounded-md font-medium transition-colors"
              >
                Kategoriler
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-8 bg-primary" />
                <h2 className="text-xl font-semibold text-foreground tracking-tight">
                  Son Gelişmeler
                </h2>
              </div>
            </div>
            
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Featured Post */}
              {featuredPost && (
                <article className="card-minimal rounded-md p-0 md:col-span-2 group">
                  <Link href={`/post/${featuredPost.slug}`} className="block">
                    <div className="relative h-56 overflow-hidden">
                      {featuredPost.coverImage ? (
                        <img 
                          alt={featuredPost.title} 
                          src={featuredPost.coverImage}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-6xl font-bold text-muted-foreground/30">
                            {featuredPost.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-mono rounded-sm border bg-primary/10 text-primary border-primary/30">
                          {featuredPost.category.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {format(new Date(featuredPost.createdAt), "dd MMM yyyy", { locale: tr })}
                        </span>
                        <span className="flex items-center gap-1 text-primary">
                          <Heart className="w-3 h-3" />
                          {featuredPost._count.likes}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              )}
              
              {/* Latest Posts */}
              {latestPosts.map((post) => (
                <article key={post.id} className="card-minimal rounded-md p-0 group">
                  <Link href={`/post/${post.slug}`} className="block">
                    <div className="relative h-40 overflow-hidden">
                      {post.coverImage ? (
                        <img 
                          alt={post.title} 
                          src={post.coverImage}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-4xl font-bold text-muted-foreground/30">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-mono rounded-sm border bg-primary/10 text-primary border-primary/30">
                          {post.category.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {format(new Date(post.createdAt), "dd MMM", { locale: tr })}
                        </span>
                        <span className="flex items-center gap-1 text-primary">
                          <Heart className="w-3 h-3" />
                          {post._count.likes}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            
            {/* Empty State */}
            {posts.length === 0 && (
              <div className="text-center py-16 border border-border rounded-md">
                <h3 className="text-lg font-medium text-foreground mb-2">Henüz içerik yok</h3>
                <p className="text-muted-foreground">Yakında yeni içerikler eklenecektir.</p>
              </div>
            )}
            
            {/* Load More */}
            {posts.length > 0 && (
              <div className="mt-8 text-center">
                <button className="px-6 py-2.5 rounded-md border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors text-sm font-medium">
                  Daha Fazla
                </button>
              </div>
            )}
          </div>
          
          {/* Right Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="border border-border rounded-md p-5">
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  KATEGORİLER
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="px-3 py-1.5 text-xs font-mono bg-muted/50 border border-border text-muted-foreground hover:border-primary/50 hover:text-primary rounded-sm transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Trending Topics */}
            <div className="border border-border rounded-md p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                POPÜLER KONULAR
              </h3>
              <ul className="space-y-3">
                {['#YapayZeka', '#UzayTeknolojisi', '#KuantumBilgisayar', '#Biyoteknoloji', '#SiberGuvenlik'].map((topic) => (
                  <li key={topic}>
                    <Link href={`/search?q=${topic}`} className="flex items-center justify-between group">
                      <span className="text-muted-foreground group-hover:text-primary text-sm transition-colors">{topic}</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="border border-border rounded-md p-5">
              <h3 className="text-sm font-semibold text-foreground mb-4">HIZLI LİNKLER</h3>
              <div className="space-y-2">
                {[
                  { name: 'Hakkımızda', href: '/about' },
                  { name: 'İletişim', href: '/contact' },
                  { name: 'Gizlilik Politikası', href: '/privacy' },
                  { name: 'Kullanım Şartları', href: '/terms' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 text-foreground hover:text-primary text-sm transition-colors font-medium"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="border border-border rounded-md p-5">
              <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-center mb-4">
                <span className="text-primary font-bold">TB</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">TitanByte Bülten</h3>
              <p className="text-muted-foreground text-sm mb-4">Haftalık teknoloji haberlerini alın.</p>
              <form className="space-y-3">
                <input 
                  className="w-full bg-background border border-border text-foreground text-sm rounded-md px-3 py-2 focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground" 
                  placeholder="E-posta" 
                  type="email"
                />
                <button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-medium py-2 rounded-md text-sm transition-colors" type="button">
                  Abone Ol
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-primary-foreground font-bold text-xs">TB</span>
              </div>
              <span className="text-sm font-semibold text-foreground">TITANBYTE</span>
            </div>
            <p className="text-muted-foreground text-xs font-mono">
              © 2024 TitanByte. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
