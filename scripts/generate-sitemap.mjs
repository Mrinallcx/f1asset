import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse articles.ts file
const articlesPath = join(__dirname, "../src/content/articles.ts");
const authorsPath = join(__dirname, "../src/content/authors.ts");

const articlesContent = readFileSync(articlesPath, "utf-8");
const authorsContent = readFileSync(authorsPath, "utf-8");

// Extract articles - find all slug values
const articles = [];
const articleSlugRegex = /slug:\s*"([^"]+)"/g;
let match;
while ((match = articleSlugRegex.exec(articlesContent)) !== null) {
  articles.push(match[1]);
}

// Extract authors - find all slug values
const authors = [];
const authorSlugRegex = /slug:\s*"([^"]+)"/g;
while ((match = authorSlugRegex.exec(authorsContent)) !== null) {
  authors.push(match[1]);
}

// Extract categories from additionalCategories array
const categories = [];
const additionalCategoriesMatch = articlesContent.match(/const additionalCategories = \[([\s\S]*?)\];/);
if (additionalCategoriesMatch) {
  const categoriesStr = additionalCategoriesMatch[1];
  const categoryRegex = /"([^"]+)"/g;
  while ((match = categoryRegex.exec(categoriesStr)) !== null) {
    categories.push(match[1]);
  }
}

// Also extract categories from articles
const articleCategoryRegex = /category:\s*"([^"]+)"/g;
const articleCategories = new Set();
while ((match = articleCategoryRegex.exec(articlesContent)) !== null) {
  articleCategories.add(match[1]);
}

// Combine all categories
articleCategories.forEach((cat) => {
  if (!categories.includes(cat)) {
    categories.push(cat);
  }
});

// Sort categories
categories.sort();

// Base URL - can be set via environment variable
const baseUrl = process.env.SITE_URL || "https://yourdomain.com";

// Define static pages
const staticPages = [
  { url: "", priority: "1.0", changefreq: "daily" }, // Homepage
  { url: "blog", priority: "0.9", changefreq: "daily" },
  { url: "categories", priority: "0.8", changefreq: "weekly" },
  { url: "about", priority: "0.7", changefreq: "monthly" },
  { url: "authors", priority: "0.7", changefreq: "weekly" },
  { url: "privacy-policy", priority: "0.3", changefreq: "yearly" },
  { url: "terms", priority: "0.3", changefreq: "yearly" },
  { url: "user-policy", priority: "0.3", changefreq: "yearly" },
  { url: "cookie-policy", priority: "0.3", changefreq: "yearly" },
];

// Generate sitemap XML
const generateSitemap = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  staticPages.forEach((page) => {
    const url = page.url ? `${baseUrl}/${page.url}` : baseUrl;
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add article pages
  articles.forEach((slug) => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Add category pages
  categories.forEach((category) => {
    const categorySlug = encodeURIComponent(category.toLowerCase());
    sitemap += `  <url>
    <loc>${baseUrl}/categories/${categorySlug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Add author pages
  authors.forEach((slug) => {
    sitemap += `  <url>
    <loc>${baseUrl}/authors/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
};

// Write sitemap to public folder
const sitemap = generateSitemap();
const outputPath = join(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");

const totalUrls = staticPages.length + articles.length + categories.length + authors.length;

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`   - ${staticPages.length} static pages`);
console.log(`   - ${articles.length} article pages`);
console.log(`   - ${categories.length} category pages`);
console.log(`   - ${authors.length} author pages`);
console.log(`   Total: ${totalUrls} URLs`);
console.log(`\n📝 Remember to set SITE_URL environment variable to your actual domain!`);
