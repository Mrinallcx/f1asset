export interface ArticleMeta {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  readingTimeMinutes: number;
  category: string;
  tags: string[];
  featured?: boolean;
  summary: string;
}

export const articles: ArticleMeta[] = [
  {
    slug: "designing-a-crypto-research-journal",
    title: "Designing a Crypto Research Journal, Not a Media Site",
    subtitle: "Why minimalism and typography beat headlines and hot takes.",
    date: "2025-01-01",
    readingTimeMinutes: 8,
    category: "Meta",
    tags: ["Design", "Product"],
    featured: true,
    summary:
      "A look at how crypto-native readers actually consume long-form research, and what that means for layout, typography, and navigation.",
  },
  {
    slug: "signal-over-noise-in-crypto-markets",
    title: "Signal Over Noise in Crypto Markets",
    date: "2025-01-03",
    readingTimeMinutes: 10,
    category: "Markets",
    tags: ["Macro", "Market Structure"],
    summary:
      "Frameworks for separating structural shifts from narrative-driven volatility in crypto markets.",
  },
];

export const allCategories = Array.from(new Set(articles.map((a) => a.category))).sort();
