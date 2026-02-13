import { getCategoryBySlug, getPosts } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { ArrowLeft, Heart, MessageCircle, Calendar, FolderOpen } from "lucide-react";
import { supabase } from "@/lib/supabase";

// Dinamik rendering
export const dynamic = "force-dynamic";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

async function getCategoryPosts(categoryId: string) {
  const { data, error } = await supabase
    .from('Post')
    .select('*')
    .eq('categoryId', categoryId)
    .eq('published', true)
    .order('createdAt', { ascending: false });

  if (error) return [];

  // Get related data for each post
  const postsWithRelations = await Promise.all(
    (data || []).map(async (post) => {
      const [{ count: likesCount }, { count: commentsCount }] = await Promise.all([
        supabase.from('Like').select('*', { count: 'exact', head: true }).eq('postId', post.id),
        supabase.from('Comment').select('*', { count: 'exact', head: true }).eq('postId', post.id),
      ]);
      
      return {
        ...post,
        _count: {
          likes: likesCount || 0,
          comments: commentsCount || 0
        }
      };
    })
  );

  return postsWithRelations;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  try {
    const category = await getCategoryBySlug(slug);

    if (!category) {
      return {
        title: "Kategori Bulunamadı - TitanByte",
      };
    }

    return {
      title: `${category.name} - TitanByte`,
      description: `${category.name} kategorisindeki içerikler`,
    };
  } catch {
    return {
      title: "Kategori Bulunamadı - TitanByte",
    };
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  
  let category;
  try {
    category = await getCategoryBySlug(slug);
  } catch {
    notFound();
  }

  if (!category) {
    notFound();
  }

  const posts = await getCategoryPosts(category.id);

  // Get post count
  const { count } = await supabase
    .from('Post')
    .select('*', { count: 'exact', head: true })
    .eq('categoryId', category.id)
    .eq('published', true);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
              <FolderOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                {category.name}
              </h1>
              <p className="text-muted">
                {count || 0} içerik
              </p>
            </div>
          </div>
        </header>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="bg-surface rounded-xl p-12 border border-border text-center">
            <FolderOpen className="h-12 w-12 text-muted mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Bu kategoride henüz içerik yok
            </h3>
            <p className="text-muted">
              Yakında yeni içerikler eklenecektir.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/post/${post.slug}`}
                className="group bg-surface rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                {/* Cover Image */}
                {post.coverImage ? (
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video relative gradient-bg flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/30">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  {/* Category */}
                  <span className="inline-block px-2 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary mb-3">
                    {category.name}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-muted text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {format(new Date(post.createdAt), "d MMM yyyy", {
                          locale: tr,
                        })}
                      </span>
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
        )}
      </div>
    </div>
  );
}
