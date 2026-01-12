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
  authorId: string;
  thumbnailImage?: string;
  thumbnailImageAlt?: string;
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
    authorId: "research-desk",
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
    authorId: "research-desk",
  },
  {
    slug: "behind-the-scenes-custody-vaulting-and-audits-for-tokenized-silver",
    title: "Behind the Scenes: Custody, Vaulting, and Audits for Tokenized Silver",
    subtitle:
      "How custody, vaulting, and audits keep tokenized silver actually backed by real metal.",
    date: "2025-01-05",
    readingTimeMinutes: 9,
    category: "Infrastructure",
    tags: ["Tokenization", "Commodities", "RWA"],
    featured: false,
    summary:
      "A walkthrough of how custody, professional vaulting, insurance, and independent audits work together so every silver token is matched by real vaulted metal.",
    authorId: "research-desk",
  },
];
 
export const allCategories = Array.from(new Set(articles.map((a) => a.category))).sort();
