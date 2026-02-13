"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewCategoryPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = (name: string) => {
    return name
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

  const handleNameChange = (value: string) => {
    setName(value);
    setSlug(generateSlug(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Kategori oluşturulamadı");
      }

      router.push("/admin/categories");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/categories"
          className="p-2 rounded-lg hover:bg-surface-hover text-muted hover:text-foreground transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Yeni Kategori</h1>
          <p className="text-muted">Yeni bir kategori oluşturun</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-surface rounded-xl border border-border p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Kategori Adı
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Örn: Yapay Zeka"
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-foreground mb-2">
              Slug (URL)
            </label>
            <input
              type="text"
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="yapay-zeka"
            />
            <p className="text-xs text-muted mt-2">
              URL'de görünecek değer. Otomatik oluşturulur.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Kaydediliyor...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  Kaydet
                </>
              )}
            </button>
            <Link
              href="/admin/categories"
              className="px-6 py-3 rounded-lg bg-surface-hover text-muted hover:text-foreground font-medium transition-all"
            >
              İptal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
