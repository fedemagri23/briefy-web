"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YoutubeEmbedProps {
  videoId: string;
  compact?: boolean;
}

export default function YoutubeEmbed({
  videoId,
  compact = false,
}: YoutubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className={`${compact ? "" : "w-full"} aspect-video rounded-lg overflow-hidden`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`${compact ? "w-full" : "w-full"} aspect-video rounded-lg overflow-hidden relative group cursor-pointer`}
    >
      <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play size={20} className="text-black fill-black ml-1" />
        </div>
      </div>
    </button>
  );
}