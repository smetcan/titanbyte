export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    posts: number;
  };
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  coverImage?: string | null;
  categoryId: string;
  category: Category;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  likes?: Like[];
  comments?: Comment[];
  _count?: {
    likes: number;
    comments: number;
  };
}

export interface Like {
  id: string;
  postId: string;
  ipAddress: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  approved: boolean;
  ipAddress: string;
  createdAt: Date;
}

export interface AdminUser {
  id: string;
  email: string;
  name?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostWithRelations extends Post {
  category: Category;
  _count: {
    likes: number;
    comments: number;
  };
}

export interface CreatePostInput {
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  categoryId: string;
  published: boolean;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {
  id: string;
}

export interface CreateCategoryInput {
  name: string;
}

export interface CreateCommentInput {
  postId: string;
  author: string;
  content: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
