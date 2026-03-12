import type { NewsDigest } from "@/types/news";

const API_URL = process.env["NEXT_PUBLIC_API_URL"] ?? "";

export async function getLatestDigest(): Promise<NewsDigest> {
  const res = await fetch(`${API_URL}/news/latest`, {
    next: { revalidate: 3600 }, // revalida cada hora — Next.js cache
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest digest");
  }

  const json = await res.json() as { data: NewsDigest };
  return json.data;
}

export async function getDigestByDate(date: string): Promise<NewsDigest> {
  const res = await fetch(`${API_URL}/news/${encodeURIComponent(date)}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch digest for ${date}`);
  }

  const json = await res.json() as { data: NewsDigest };
  return json.data;
}