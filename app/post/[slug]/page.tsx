import { getPostBySlug } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { ArrowLeft, Heart, MessageCircle, Calendar, User } from "lucide-react";
import LikeButton from "@/components/public/LikeButton";
import CommentForm from "@/components/public/CommentForm";
import CommentList from "@/components/public/CommentList";

// Dinamik rendering
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

  return (
    <article className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Category */}
          <Link
            href={`/category/${post.category.slug}`}
            className="inline-block px-3 py-1 rounded-full text-sm font-medium gradient-bg text-white mb-4"
          >
            {post.category.name}
          </Link>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-muted">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {format(new Date(post.createdAt), "d MMMM yyyy", { locale: tr })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>{post._count.likes} beğeni</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>{post._count.comments} yorum</span>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Like Button */}
        <div className="flex items-center justify-center py-8 border-t border-b border-border mb-12">
          <LikeButton postId={post.id} initialLikes={post._count.likes} />
        </div>

        {/* Comments Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">
            Yorumlar ({post.comments?.length || 0})
          </h2>

          {/* Comment Form */}
          <CommentForm postId={post.id} />

          {/* Comments List */}
          <CommentList comments={post.comments || []} />
        </section>
      </div>
    </article>
  );
}
