"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Editor } from "@tinymce/tinymce-react";

interface Category {
  id: string;
  name: string;
}

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    coverImage: "",
    categoryId: "",
    published: false,
  });

  useEffect(() => {
    fetchCategories();
    fetchPost();
  }, [postId]);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Kategoriler yüklenemedi:", error);
    }
  };

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/admin/posts/${postId}`);
      const data = await res.json();
      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          content: data.content,
          excerpt: data.excerpt || "",
          coverImage: data.coverImage || "",
          categoryId: data.categoryId,
          published: data.published,
        });
      }
    } catch (error) {
      console.error("İçerik yüklenemedi:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/posts");
      } else {
        const data = await res.json();
        alert(data.error || "İçerik güncellenemedi");
      }
    } catch (error) {
      alert("Bir hata oluştu");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/posts"
          className="p-2 rounded-lg hover:bg-surface transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">İçerik Düzenle</h1>
          <p className="text-muted">İçerik bilgilerini güncelleyin</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Başlık *
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setFormData({
                    ...formData,
                    title,
                    slug: generateSlug(title),
                  });
                }}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="İçerik başlığı..."
              />
            </div>

            {/* Content Editor */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <label className="block text-sm font-medium mb-2">
                İçerik *
              </label>
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                value={formData.content}
                onEditorChange={(content) => setFormData({ ...formData, content })}
                init={{
                  height: 400,
                  menubar: true,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "link image | removeformat | help",
                  content_style:
                    "body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px }",
                }}
              />
            </div>

            {/* Excerpt */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                Özet
              </label>
              <textarea
                id="excerpt"
                rows={3}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="İçerik özeti (liste sayfalarında gösterilir)..."
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h3 className="font-medium mb-4">Durum</h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span>Yayınla</span>
              </label>
              <p className="text-sm text-muted mt-2">
                {formData.published ? "Herkese görünür" : "Taslak olarak kaydedildi"}
              </p>
            </div>

            {/* Category */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Kategori *
              </label>
              <select
                id="category"
                required
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Kategori seçin...</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Slug */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <label htmlFor="slug" className="block text-sm font-medium mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                id="slug"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-sm text-muted mt-1">
                /post/{formData.slug}
              </p>
            </div>

            {/* Cover Image */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <label htmlFor="coverImage" className="block text-sm font-medium mb-2">
                Kapak Görseli URL
              </label>
              <input
                type="url"
                id="coverImage"
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://..."
              />
              {formData.coverImage && (
                <img
                  src={formData.coverImage}
                  alt="Kapak"
                  className="mt-2 rounded-lg w-full h-32 object-cover"
                />
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {saving ? "Kaydediliyor..." : "Kaydet"}
              </button>
              <Link
                href="/admin/posts"
                className="px-6 py-2 bg-surface border border-border rounded-lg hover:bg-background transition-colors"
              >
                İptal
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
