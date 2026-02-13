import { getComments } from "@/lib/db";
import { Check, X, MessageSquare, Clock } from "lucide-react";
import { approveComment, deleteComment } from "../actions";

// Dinamik rendering
export const dynamic = "force-dynamic";

export default async function AdminCommentsPage() {
  const comments = await getComments();
  const pendingComments = comments.filter((c) => !c.approved);
  const approvedComments = comments.filter((c) => c.approved);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Yorumlar</h1>
        <p className="text-muted">Yorumları yönetin ve onaylayın</p>
      </div>

      {/* Pending comments */}
      {pendingComments.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">
              Onay Bekleyen Yorumlar ({pendingComments.length})
            </h2>
          </div>
          <div className="bg-surface rounded-xl border border-accent/20 overflow-hidden">
            <div className="divide-y divide-border">
              {pendingComments.map((comment) => (
                <div key={comment.id} className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground">{comment.author}</span>
                        <span className="text-xs text-muted">•</span>
                        <span className="text-xs text-muted">
                          {new Date(comment.createdAt).toLocaleDateString("tr-TR")}
                        </span>
                      </div>
                      <p className="text-muted mb-2">{comment.content}</p>
                      <p className="text-xs text-muted">
                        İçerik: {comment.post?.title || "Silinmiş"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <form action={approveComment}>
                        <input type="hidden" name="id" value={comment.id} />
                        <button
                          type="submit"
                          className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-all"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                      </form>
                      <form action={deleteComment}>
                        <input type="hidden" name="id" value={comment.id} />
                        <button
                          type="submit"
                          className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Approved comments */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-muted" />
          <h2 className="text-lg font-semibold text-foreground">
            Onaylanmış Yorumlar ({approvedComments.length})
          </h2>
        </div>
        <div className="bg-surface rounded-xl border border-border overflow-hidden">
          {approvedComments.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-muted mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Henüz onaylanmış yorum yok</h3>
              <p className="text-muted">Onay bekleyen yorumları onaylayın</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {approvedComments.map((comment) => (
                <div key={comment.id} className="p-4 hover:bg-surface-hover transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground">{comment.author}</span>
                        <span className="text-xs text-muted">•</span>
                        <span className="text-xs text-muted">
                          {new Date(comment.createdAt).toLocaleDateString("tr-TR")}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-xs">
                          Onaylandı
                        </span>
                      </div>
                      <p className="text-muted mb-2">{comment.content}</p>
                      <p className="text-xs text-muted">
                        İçerik: {comment.post?.title || "Silinmiş"}
                      </p>
                    </div>
                    <form action={deleteComment}>
                      <input type="hidden" name="id" value={comment.id} />
                      <button
                        type="submit"
                        className="p-2 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-all"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
