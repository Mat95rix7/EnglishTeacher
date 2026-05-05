import { useState } from "react";
import { Star } from 'lucide-react';

/* ─────────────────────────────────────────────
   StarRating
───────────────────────────────────────────── */
export function StarRating({
  rating,
  interactive = false,
  onChange,
  size = 14,
}: {
  rating: number;
  interactive?: boolean;
  onChange?: (v: number) => void;
  size?: number;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          onClick={() => interactive && onChange?.(i)}
          onMouseEnter={() => interactive && setHovered(i)}
          onMouseLeave={() => interactive && setHovered(0)}
          className={`transition-colors ${
            i <= (interactive ? hovered || rating : rating)
              ? 'fill-amber-400 text-amber-400'
              : 'text-gray-300'
          } ${interactive ? 'cursor-pointer' : ''}`}
        />
      ))}
    </div>
  );
}