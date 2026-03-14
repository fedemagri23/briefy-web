export interface NewsSource {
  name: string;
  url: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  sources: NewsSource[];
  glossary: GlossaryTerm[];
  videoId?: string;
}

export interface NewsSection {
  type: "argentina" | "international";
  news: NewsItem[];
}

export type DigestEdition = "morning" | "evening";

export interface NewsDigest {
  date: string;
  edition: DigestEdition;
  sections: NewsSection[];
}