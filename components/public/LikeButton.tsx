"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    if (loading || liked) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
      });

      if (res.ok) {
        const data = await res.json();
        setLikes(data.likes);
        setLiked(true);
      } else {
        const data = await res.json();
        if (data.error === "Zaten beğendiniz") {
          setLiked(true);
        }
      }
    } catch (error) {
      console.error("Error liking post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={loading || liked}
      className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
        liked
          ? "bg-red-500/10 text-red-500"
          : "bg-surface border border-border hover:border-red-500 hover:text-red-500"
      }`}
    >
      <Heart className={`h-6 w-6 ${liked ? "fill-current" : ""}`} />
      <span className="text-lg font-medium">{likes} Beğeni</span>
      {liked && <span className="text-sm">(Beğendiniz)</span>}
    </button>
  );
}
