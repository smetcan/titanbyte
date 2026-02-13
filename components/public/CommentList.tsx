import { format } from "date-fns";
import { tr } from "date-fns/locale";
import { MessageSquare } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
}

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="bg-surface rounded-xl p-8 border border-border text-center">
        <MessageSquare className="h-12 w-12 text-muted mx-auto mb-4" />
        <p className="text-muted">Henüz yorum yapılmamış.</p>
        <p className="text-sm text-muted mt-1">İlk yorumu siz yapın!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-surface rounded-xl p-6 border border-border"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {comment.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-medium text-foreground">{comment.author}</p>
              <p className="text-xs text-muted">
                {format(new Date(comment.createdAt), "d MMMM yyyy, HH:mm", {
                  locale: tr,
                })}
              </p>
            </div>
          </div>
          <p className="text-foreground whitespace-pre-wrap">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
