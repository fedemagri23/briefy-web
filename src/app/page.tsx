import { getLatestDigest } from "@/services/newsService";
import DigestHeader from "@/components/DigestHeader";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";

export default async function HomePage() {
  const digest = await getLatestDigest();

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