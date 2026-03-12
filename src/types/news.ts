export interface NewsSource {
  name: string;
  url: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  sources: NewsSource[];
  sectionType: "argentina" | "international";
}

export interface NewsSection {
  type: "argentina" | "international";
  news: NewsItem[];
}

export interface NewsDigest {
  date: string;
  sections: NewsSection[];
}