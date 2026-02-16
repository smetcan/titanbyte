import { getPostBySlug, getPosts } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { ArrowLeft, Heart, MessageCircle, Calendar, Clock, Eye, Share2, Bookmark, MessageSquare } from "lucide-react";
import LikeButton from "@/components/public/LikeButton";
import CommentForm from "@/components/public/CommentForm";
import CommentList from "@/components/public/CommentList";

export const dynamic = "force-dynamic";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostBySlug(slug);

    if (!post || !post.published) {
      return {
        title: "İçerik Bulunamadı - TitanByte",
      };
    }

    return {
      title: `${post.title} - TitanByte`,
      description: post.excerpt || post.content.substring(0, 160),
    };
  } catch {
    return {
      title: "İçerik Bulunamadı - TitanByte",
    };
  }
}

async function getRelatedPosts(categoryId: string, currentSlug: string) {
  const posts = await getPosts({ published: true, limit: 4 });
  return posts.filter(p => p.slug !== currentSlug).slice(0, 3);
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post || !post.published) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.categoryId, post.slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 nav-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                <span className="text-primary-foreground font-bold text-sm">TB</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">TITANBYTE</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="w-full lg:w-2/3">
            {/* Article Header */}
            <header className="mb-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  href={`/category/${post.category.slug}`}
                  className="bg-primary/20 text-primary px-3 py-1 rounded-sm border border-primary/30 font-medium text-sm"
                >
                  {post.category.name}
                </Link>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 tracking-tight">
                {post.title}
              </h1>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold">TB</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">TitanByte</p>
                    <p className="text-muted-foreground text-xs font-mono">
                      {format(new Date(post.createdAt), "d MMM yyyy", { locale: tr })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 5 dk okuma
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {Math.floor(Math.random() * 5000)} görüntülenme
                  </span>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            {post.coverImage && (
              <div className="relative w-full aspect-video rounded-md overflow-hidden mb-10 border border-border">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-foreground/80">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Engagement Section */}
            <div className="mt-12 py-6 border-y border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <LikeButton postId={post.id} initialLikes={post._count.likes} />
                
                <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-mono">{post._count.comments}</span>
                </button>
                
                <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-xs font-mono">Paylaş</span>
                </button>
              </div>
              
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Comments Section */}
            <section className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Yorumlar ({post._count.comments})
              </h3>
              
              {/* Comment Form */}
              <CommentForm postId={post.id} />
              
              {/* Comments List */}
              <div className="mt-8">
                <CommentList comments={post.comments || []} />
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              <div className="border border-border rounded-md p-5">
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  İLGİLİ YAZILAR
                </h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/post/${relatedPost.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-muted">
                          {relatedPost.coverImage ? (
                            <img
                              src={relatedPost.coverImage}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-bold">
                              {relatedPost.title.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="text-sm text-foreground font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1 font-mono">
                            {format(new Date(relatedPost.createdAt), "dd MMM", { locale: tr })}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">İlgili yazı bulunamadı.</p>
                  )}
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
                    type="email" 
                    placeholder="E-posta"
                    className="w-full bg-background border border-border text-foreground text-sm rounded-md px-3 py-2 focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Abone Ol
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
