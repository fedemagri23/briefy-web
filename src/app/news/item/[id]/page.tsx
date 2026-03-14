import { getNewsById } from "@/services/newsService";
import ArticleContent from "@/components/ArticleContent";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = await getNewsById(id);

  return {
    title: `${item.title} — Briefy`,
    description: item.content.split("\n\n")[0],
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const item = await getNewsById(id);

  return (
    <>
      <nav className="mb-10">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Volver
        </Link>
      </nav>

      <div className="flex gap-12 items-start">
        {/* Artículo principal */}
        <article className="flex-1 min-w-0">
          <h1 className="text-4xl font-black tracking-tight leading-tight mb-8">
            {item.title}
          </h1>

          <ArticleContent content={item.content} glossary={item.glossary} />

          {item.sources.length > 0 && (
            <footer className="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-900">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-neutral-400">
                Fuentes
              </p>
              <ul className="space-y-2">
                {item.sources.map((source, i) => (
                  <li key={i}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 hover:text-black dark:hover:text-white underline underline-offset-4 transition-colors"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          )}
        </article>

        {/* Sidebar de contenido relacionado */}
        {item.videoId && (
          <aside className="w-64 flex-shrink-0 sticky top-24">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Relacionado
            </p>
            <YoutubeEmbed videoId={item.videoId} compact />
          </aside>
        )}
      </div>
    </>
  );
}