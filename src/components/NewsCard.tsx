import Link from "next/link";
import type { NewsItem } from "@/types/news";
import YoutubeEmbed from "./YoutubeEmbed";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const preview = item.content.split("\n\n")[0] ?? item.content;

  return (
    <div className={`flex gap-4 mb-8 pb-8 border-b border-neutral-100 dark:border-neutral-900 last:border-0 ${item.videoId ? "items-start" : ""}`}>
      {/* Tarjeta principal */}
      <article className={`${item.videoId ? "flex-1" : "w-full"} bg-neutral-50 dark:bg-neutral-950 rounded-2xl p-5`}>
        <Link href={`/news/item/${item.id}`}>
          <h3 className="text-xl font-bold tracking-tight leading-tight mb-3 hover:opacity-60 transition-opacity">
            {item.title}
          </h3>
        </Link>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm mb-4 line-clamp-3">
          {preview}
        </p>
        <Link
          href={`/news/item/${item.id}`}
          className="text-xs font-bold uppercase tracking-widest border-b border-black dark:border-white pb-px hover:opacity-50 transition-opacity"
        >
          Leer nota completa →
        </Link>
      </article>

      {/* Tarjeta de video */}
      {item.videoId && (
        <div className="w-48 flex-shrink-0 flex flex-col gap-2">
          <YoutubeEmbed videoId={item.videoId} compact />
        </div>
      )}
    </div>
  );
}