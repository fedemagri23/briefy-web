import { getLatestDigest } from "@/services/newsService";
import DigestHeader from "@/components/DigestHeader";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";

export default async function HomePage() {
  let digest;

  try {
    digest = await getLatestDigest();
  } catch {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center">
        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
          Sin noticias
        </p>
        <h2 className="text-4xl font-bold tracking-tight">
          El digest de hoy aún no está disponible
        </h2>
        <p className="text-sm text-neutral-500 mt-4">
          Volvé más tarde, las noticias se publican a las 12:00.
        </p>
      </div>
    );
  }

  return (
    <>
      <DigestHeader date={digest.date} />
      {digest.sections.map((section) => (
        <section key={section.type} className="mb-10">
          <SectionHeader type={section.type} />
          {section.news.map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}
        </section>
      ))}
    </>
  );
}