import Link from "next/link";
import type { NewsItem } from "@/types/news";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const preview = item.content.split("\n\n")[0] ?? item.content;

  return (
    <article className="mb-10 pb-10 border-b border-neutral-100 dark:border-neutral-900 last:border-0">
      <Link href={`/news/item/${item.id}`}>
        <h3 className="text-2xl font-bold tracking-tight leading-tight mb-3 hover:opacity-60 transition-opacity">
          {item.title}
        </h3>
      </Link>

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base mb-4">
        {preview}
      </p>

      <Link
        href={`/news/item/${item.id}`}
        className="text-xs font-bold uppercase tracking-widest border-b border-black dark:border-white pb-px hover:opacity-50 transition-opacity"
      >
        Leer nota completa →
      </Link>
    </article>
  );
}