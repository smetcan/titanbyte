import { supabase } from "./supabase";
import type { Category, Post, Like, Comment, AdminUser } from "./types";

// Helper to generate unique IDs
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Helper to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ============ CATEGORIES ============

export async function getCategories() {
  const { data, error } = await supabase
    .from('Category')
    .select('*')
    .order('name', { ascending: true });
  
  if (error) throw error;
  
  // Get post counts for each category
  const categoriesWithCounts = await Promise.all(
    (data || []).map(async (category) => {
      const { count } = await supabase
        .from('Post')
        .select('*', { count: 'exact', head: true })
        .eq('categoryId', category.id);
      
      return {
        ...category,
        _count: { posts: count || 0 }
      };
    })
  );
  
  return categoriesWithCounts as (Category & { _count: { posts: number } })[];
}

export async function getCategoryBySlug(slug: string) {
  const { data, error } = await supabase
    .from('Category')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) throw error;
  return data as Category;
}

export async function createCategory(name: string) {
  const slug = generateSlug(name);
  const id = generateId();
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('Category')
    .insert({ id, name, slug, createdAt: now, updatedAt: now })
    .select()
    .single();
  
  if (error) throw error;
  return data as Category;
}

export async function updateCategory(id: string, name: string) {
  const slug = generateSlug(name);
  
  const { data, error } = await supabase
    .from('Category')
    .update({ name, slug, updatedAt: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data as Category;
}

export async function deleteCategory(id: string) {
  const { error } = await supabase
    .from('Category')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

// ============ POSTS ============

export async function getPosts(options?: { published?: boolean; limit?: number }) {
  let query = supabase
    .from('Post')
    .select('*')
    .order('createdAt', { ascending: false });
  
  if (options?.published !== undefined) {
    query = query.eq('published', options.published);
  }
  
  if (options?.limit) {
    query = query.limit(options.limit);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  
  // Get related data for each post
  const postsWithRelations = await Promise.all(
    (data || []).map(async (post) => {
      const [category, { count: likesCount }, { count: commentsCount }] = await Promise.all([
        supabase.from('Category').select('*').eq('id', post.categoryId).single(),
        supabase.from('Like').select('*', { count: 'exact', head: true }).eq('postId', post.id),
        supabase.from('Comment').select('*', { count: 'exact', head: true }).eq('postId', post.id),
      ]);
      
      return {
        ...post,
        category: category.data,
        _count: {
          likes: likesCount || 0,
          comments: commentsCount || 0
        }
      };
    })
  );
  
  return postsWithRelations as (Post & { category: Category; _count: { likes: number; comments: number } })[];
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('Post')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) throw error;
  
  // Get category
  const { data: category } = await supabase
    .from('Category')
    .select('*')
    .eq('id', data.categoryId)
    .single();
  
  // Get likes count
  const { count: likesCount } = await supabase
    .from('Like')
    .select('*', { count: 'exact', head: true })
    .eq('postId', data.id);
  
  // Get approved comments
  const { data: comments } = await supabase
    .from('Comment')
    .select('*')
    .eq('postId', data.id)
    .eq('approved', true)
    .order('createdAt', { ascending: false });
  
  return {
    ...data,
    category,
    _count: {
      likes: likesCount || 0,
      comments: comments?.length || 0
    },
    comments: comments || []
  } as Post & { category: Category; _count: { likes: number; comments: number }; comments: Comment[] };
}

export async function getPostById(id: string) {
  const { data, error } = await supabase
    .from('Post')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  
  // Get category
  const { data: category } = await supabase
    .from('Category')
    .select('*')
    .eq('id', data.categoryId)
    .single();
  
  return {
    ...data,
    category
  } as Post & { category: Category };
}

export async function createPost(input: {
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  categoryId: string;
  published: boolean;
}) {
  const id = generateId();
  const slug = generateSlug(input.title);
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('Post')
    .insert({
      id,
      title: input.title,
      slug,
      content: input.content,
      excerpt: input.excerpt || null,
      coverImage: input.coverImage || null,
      categoryId: input.categoryId,
      published: input.published,
      createdAt: now,
      updatedAt: now
    })
    .select()
    .single();
  
  if (error) throw error;
  return data as Post;
}

export async function updatePost(id: string, input: {
  title?: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  categoryId?: string;
  published?: boolean;
}) {
  const updateData: Record<string, unknown> = {
    ...input,
    updatedAt: new Date().toISOString()
  };
  
  if (input.title) {
    updateData.slug = generateSlug(input.title);
  }
  
  const { data, error } = await supabase
    .from('Post')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data as Post;
}

export async function deletePost(id: string) {
  // First delete related likes and comments
  await Promise.all([
    supabase.from('Like').delete().eq('postId', id),
    supabase.from('Comment').delete().eq('postId', id)
  ]);
  
  // Then delete the post
  const { error } = await supabase
    .from('Post')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

// ============ LIKES ============

export async function getLikesByPost(postId: string) {
  const { data, error } = await supabase
    .from('Like')
    .select('*')
    .eq('postId', postId);
  
  if (error) throw error;
  return data as Like[];
}

export async function hasUserLiked(postId: string, ipAddress: string) {
  const { count, error } = await supabase
    .from('Like')
    .select('*', { count: 'exact', head: true })
    .eq('postId', postId)
    .eq('ipAddress', ipAddress);
  
  if (error) throw error;
  return (count || 0) > 0;
}

export async function createLike(postId: string, ipAddress: string) {
  // Check if already liked
  const alreadyLiked = await hasUserLiked(postId, ipAddress);
  if (alreadyLiked) {
    throw new Error('Bu içeriği zaten beğendiniz');
  }
  
  const id = generateId();
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('Like')
    .insert({ id, postId, ipAddress, createdAt: now })
    .select()
    .single();
  
  if (error) throw error;
  return data as Like;
}

// ============ COMMENTS ============

export async function getComments(options?: { approved?: boolean }) {
  let query = supabase
    .from('Comment')
    .select('*')
    .order('createdAt', { ascending: false });
  
  if (options?.approved !== undefined) {
    query = query.eq('approved', options.approved);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  
  // Get post titles for each comment
  const commentsWithPosts = await Promise.all(
    (data || []).map(async (comment) => {
      const { data: post } = await supabase
        .from('Post')
        .select('title, slug')
        .eq('id', comment.postId)
        .single();
      
      return {
        ...comment,
        post: post || null
      };
    })
  );
  
  return commentsWithPosts as (Comment & { post: { title: string; slug: string } | null })[];
}

export async function createComment(input: {
  postId: string;
  author: string;
  content: string;
  ipAddress: string;
}) {
  const id = generateId();
  const now = new Date().toISOString();
  
  const { data, error } = await supabase
    .from('Comment')
    .insert({
      id,
      postId: input.postId,
      author: input.author,
      content: input.content,
      ipAddress: input.ipAddress,
      approved: false,
      createdAt: now,
      updatedAt: now
    })
    .select()
    .single();
  
  if (error) throw error;
  return data as Comment;
}

export async function approveComment(id: string) {
  const { data, error } = await supabase
    .from('Comment')
    .update({ approved: true })
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data as Comment;
}

export async function deleteComment(id: string) {
  const { error } = await supabase
    .from('Comment')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

// ============ ADMIN USERS ============

export async function getAdminUserByEmail(email: string) {
  const { data, error } = await supabase
    .from('AdminUser')
    .select('*')
    .eq('email', email)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw error;
  }
  return data as AdminUser;
}

export async function getAdminUserById(id: string) {
  const { data, error } = await supabase
    .from('AdminUser')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw error;
  }
  return data as AdminUser;
}

// ============ STATS ============

export async function getStats() {
  const [
    { count: postsCount },
    { count: publishedCount },
    { count: categoriesCount },
    { count: commentsCount },
    { count: pendingCommentsCount },
    { count: likesCount }
  ] = await Promise.all([
    supabase.from('Post').select('*', { count: 'exact', head: true }),
    supabase.from('Post').select('*', { count: 'exact', head: true }).eq('published', true),
    supabase.from('Category').select('*', { count: 'exact', head: true }),
    supabase.from('Comment').select('*', { count: 'exact', head: true }),
    supabase.from('Comment').select('*', { count: 'exact', head: true }).eq('approved', false),
    supabase.from('Like').select('*', { count: 'exact', head: true })
  ]);
  
  return {
    totalPosts: postsCount || 0,
    publishedPosts: publishedCount || 0,
    totalCategories: categoriesCount || 0,
    totalComments: commentsCount || 0,
    pendingComments: pendingCommentsCount || 0,
    totalLikes: likesCount || 0
  };
}
