"use client";

import { useState } from "react";
import Link from "next/link";
import type { NewsItem } from "@/types/news";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  const [expanded, setExpanded] = useState(false);

  const preview = item.content.split("\n\n")[0] ?? item.content;

  return (
    <article className="mb-10 pb-10 border-b border-neutral-100 dark:border-neutral-900 last:border-0">
      <Link href={`/news/item/${item.id}`}>
        <h3 className="text-2xl font-bold tracking-tight leading-tight mb-4 hover:opacity-60 transition-opacity">
          {item.title}
        </h3>
      </Link>

      <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
        {expanded ? (
          <div className="space-y-4">
            {item.content.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p>{preview}</p>
        )}
      </div>

      <div className="flex items-center gap-6 mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-bold uppercase tracking-widest border-b border-black dark:border-white pb-px hover:opacity-50 transition-opacity"
        >
          {expanded ? "Leer menos" : "Leer más"}
        </button>

        <Link
          href={`/news/item/${item.id}`}
          className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Ver nota completa →
        </Link>
      </div>

      {expanded && item.sources.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-neutral-400">
            Fuentes
          </p>
          <ul className="flex flex-wrap gap-3">
            {item.sources.map((source, i) => (
              <li key={i}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-neutral-500 hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors"
                >
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}