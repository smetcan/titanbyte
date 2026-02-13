"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !author.trim() || !content.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, content }),
      });

      if (res.ok) {
        setAuthor("");
        setContent("");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        const data = await res.json();
        setError(data.error || "Yorum gönderilemedi");
      }
    } catch (error) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
        <p className="text-green-500 font-medium">
          Yorumunuz başarıyla gönderildi!
        </p>
        <p className="text-muted text-sm mt-1">
          Yorumunuz moderatör onayından sonra yayınlanacaktır.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface rounded-xl p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Yorum Yap
      </h3>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-foreground mb-1">
            İsim *
          </label>
          <input
            type="text"
            id="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Adınız"
            maxLength={50}
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-foreground mb-1">
            Yorum *
          </label>
          <textarea
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Yorumunuzu yazın..."
            rows={4}
            maxLength={1000}
          />
          <p className="text-xs text-muted mt-1">{content.length}/1000 karakter</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !author.trim() || !content.trim()}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Yorum Gönder
            </>
          )}
        </button>

        <p className="text-xs text-muted text-center">
          Yorumlar moderatör onayından sonra yayınlanır.
        </p>
      </div>
    </form>
  );
}
