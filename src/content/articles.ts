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
      "Examines tokenized silver's role as an inflation hedge in 2026, including performance data, key risks, and use-cases for different investor types.",
    authorId: "research-desk",
  },
  {
    slug: "tokenized-commodities-and-gold-backed-tokens-are-they-better-than-etfs",
    title: "Tokenized Commodities and Gold-Backed Tokens: Are They Better Than ETFs?",
    subtitle: "Compare tokenized commodities to traditional instruments in terms of liquidity, custody, and DeFi integration.",
    date: "2025-01-25",
    readingTimeMinutes: 8,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA", "ETFs", "DeFi"],
    featured: false,
    summary:
      "An in-depth comparison of tokenized commodities and gold-backed tokens versus traditional ETFs, examining liquidity depth, custody models, and DeFi integration capabilities.",
    authorId: "research-desk",
  },
  {
    slug: "tokenization-without-public-blockchains-is-it-still-tokenization",
    title: "Tokenization Without Public Blockchains: Is It Still Tokenization?",
    subtitle: "Exploring whether tokenization on private and permissioned ledgers qualifies as real tokenization, and why institutions are choosing controlled systems over public chains.",
    date: "2025-01-30",
    readingTimeMinutes: 10,
    category: "Tokenization",
    tags: ["Tokenization", "Blockchain", "Institutional", "RWA"],
    featured: false,
    summary:
      "A deep dive into why banks and enterprises are adopting tokenization on private ledgers, and whether this represents real tokenization or a fundamentally different approach.",
    authorId: "research-desk",
  },
  {
    slug: "what-is-tokenized-oil-how-digital-oil-tokens-differ-from-traditional-futures-and-etfs",
    title: "What Is Tokenized Oil? How Digital Oil Tokens Differ from Traditional Futures and ETFs",
    subtitle: "A comprehensive guide to tokenized oil, explaining how digital oil tokens work and how they differ from traditional oil futures and ETFs.",
    date: "2025-02-05",
    readingTimeMinutes: 8,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA", "Oil", "ETFs"],
    featured: false,
    summary:
      "An in-depth exploration of tokenized oil, covering what it is, how it works, and how it differs from traditional oil futures and ETFs in structure, settlement, and ownership.",
    authorId: "research-desk",
  },
  {
    slug: "fractional-ownership-explained-why-it-matters-for-small-investors-in-commodity-markets",
    title: "Fractional Ownership Explained: Why It Matters for Small Investors in Commodity Markets",
    subtitle: "Understanding how fractional ownership breaks down barriers in commodity markets, enabling small investors to access assets previously reserved for institutions.",
    date: "2025-02-10",
    readingTimeMinutes: 7,
    category: "Tokenization",
    tags: ["Tokenization", "Commodities", "RWA", "Investing"],
    featured: false,
    summary:
      "A comprehensive guide to fractional ownership in commodity markets, explaining how it works, why it matters for small investors, and how it differs from traditional commodity trading and ETFs.",
    authorId: "research-desk",
  },
  {
    slug: "the-hidden-frictions-in-asset-markets-why-settlement-delays-opaque-pricing-and-limited-liquidity-still-exist",
    title: "The Hidden Frictions in Asset Markets: Why Settlement Delays, Opaque Pricing, and Limited Liquidity Still Exist",
    subtitle: "Exploring the infrastructure problems that create settlement delays, opaque pricing, and limited liquidity, and why these frictions disproportionately affect small asset holders.",
    date: "2025-02-15",
    readingTimeMinutes: 9,
    category: "Tokenization",
    tags: ["Tokenization", "Markets", "Infrastructure", "RWA"],
    featured: false,
    summary:
      "An analysis of the hidden frictions in asset markets, examining why settlement delays, opaque pricing, and limited liquidity persist, and how these issues disproportionately impact small asset holders.",
    authorId: "research-desk",
  },
  {
    slug: "tokenized-assets-as-collateral-how-tokens-unlock-new-credit-lines-for-producers-and-traders",
    title: "Tokenized Assets as Collateral: How Tokens Unlock New Credit Lines for Producers and Traders",
    subtitle: "Exploring how tokenized assets can be used as collateral to unlock credit, enabling producers and traders to access capital more efficiently.",
    date: "2025-02-20",
    readingTimeMinutes: 8,
    category: "Tokenization",
    tags: ["Tokenization", "Collateral", "DeFi", "RWA", "Credit"],
    featured: false,
    summary:
      "An in-depth look at how tokenized assets function as collateral, enabling producers and traders to unlock new credit lines through faster, more efficient lending mechanisms in both DeFi and traditional finance.",
    authorId: "research-desk",
  },
];
 
// All available categories (including those without articles yet)
const additionalCategories = [
  "Tokenize Gold",
  "Tokenize Silver",
  "Tokenize Platinum",
  "Tokenize Oil",
  "Tokenize Copper",
  "Stable Coin",
  "ETF",
  "Ethereum",
  "Solana",
  "Total Tokenization",
];

// Combine categories from articles with additional categories
export const allCategories = Array.from(
  new Set([...articles.map((a) => a.category), ...additionalCategories])
).sort();
