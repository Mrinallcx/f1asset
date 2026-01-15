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
    slug: "behind-the-scenes-custody-vaulting-and-audits-for-tokenized-silver",
    title: "Behind the Scenes: Custody, Vaulting, and Audits for Tokenized Silver",
    subtitle:
      "How custody, vaulting, and audits keep tokenized silver actually backed by real metal.",
    date: "2025-01-05",
    readingTimeMinutes: 9,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA"],
    featured: false,
    summary:
      "A walkthrough of how custody, professional vaulting, insurance, and independent audits work together so every silver token is matched by real vaulted metal.",
    authorId: "research-desk",
    thumbnailImage:
      "https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/silver.avif?alt=media&token=265b2ee3-78c8-4489-8aa9-080a4e23269c",
    thumbnailImageAlt: "High-security vault storing physical silver bars backing tokenized silver",
  },
  {
    slug: "tokenized-silver-vs-etfs-and-bullion",
    title: "How Tokenized Silver Works vs Traditional Silver ETFs and Physical Bullion",
    subtitle: "A side-by-side look at custody, liquidity, costs, and usability across three ways to hold silver.",
    date: "2025-01-10",
    readingTimeMinutes: 9,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA", "ETFs"],
    featured: false,
    summary:
      "Compares tokenized silver, silver ETFs, and physical bullion on how they handle custody, liquidity, costs, and real-world usability.",
    authorId: "research-desk",
  },
  {
    slug: "why-tokenized-silver-volumes-are-exploding-amid-record-silver-prices",
    title: "Why Tokenized Silver Volumes Are Exploding Amid Record Silver Prices",
    subtitle: "How record silver prices and market structure are driving a shift toward on-chain silver.",
    date: "2025-01-15",
    readingTimeMinutes: 7,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA", "Markets"],
    featured: false,
    summary:
      "Explores why tokenized silver volumes have surged alongside record silver prices, highlighting macro drivers, hard on-chain data, and structural market shifts.",
    authorId: "research-desk",
  },
  {
    slug: "tokenized-silver-as-an-inflation-hedge-in-2026",
    title: "Tokenized Silver as an Inflation Hedge in 2026: Data, Risks, and Opportunities",
    subtitle:
      "How on-chain silver combines classic inflation-hedge traits with 24/7 access, while introducing new risks and opportunities.",
    date: "2025-01-20",
    readingTimeMinutes: 8,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA", "Macro"],
    featured: false,
    summary:
      "Examines tokenized silver’s role as an inflation hedge in 2026, including performance data, key risks, and use-cases for different investor types.",
    authorId: "research-desk",
  },
];
 
export const allCategories = Array.from(new Set(articles.map((a) => a.category))).sort();
