import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base URL - can be set via environment variable
const baseUrl = process.env.SITE_URL || "https://yourdomain.com";

// Read and parse articles.ts file
const articlesPath = join(__dirname, "../src/content/articles.ts");
const authorsPath = join(__dirname, "../src/content/authors.ts");

const articlesContent = readFileSync(articlesPath, "utf-8");
const authorsContent = readFileSync(authorsPath, "utf-8");

// Extract articles with their metadata
const articles = [];
const articleRegex = /{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?date:\s*"([^"]+)",[\s\S]*?category:\s*"([^"]+)",[\s\S]*?summary:\s*"([^"]+)"/g;
let match;
while ((match = articleRegex.exec(articlesContent)) !== null) {
  articles.push({
    slug: match[1],
    title: match[2],
    date: match[3],
    category: match[4],
    summary: match[5],
  });
}

// Extract authors
const authors = [];
const authorSlugRegex = /slug:\s*"([^"]+)"/g;
while ((match = authorSlugRegex.exec(authorsContent)) !== null) {
  authors.push(match[1]);
}

// Extract categories
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

articleCategories.forEach((cat) => {
  if (!categories.includes(cat)) {
    categories.push(cat);
  }
});

categories.sort();

// Generate llms.txt
const generateLLMsTxt = () => {
  let content = `# llms.txt - Information for AI/LLM Crawlers
# This file helps AI systems understand the structure and content of this site.

# Site Information
Site: ${baseUrl}
Description: Minimal crypto research journal focused on long-form analysis, tokenization, and real-world assets (RWA).
Content Type: Blog/Research Journal
Language: English

# Main Pages
${baseUrl}/
${baseUrl}/blog
${baseUrl}/categories
${baseUrl}/about
${baseUrl}/authors

# Policy Pages
${baseUrl}/privacy-policy
${baseUrl}/terms
${baseUrl}/user-policy
${baseUrl}/cookie-policy

# Categories
`;

  // Add category pages
  categories.forEach((category) => {
    const categorySlug = encodeURIComponent(category.toLowerCase());
    content += `${baseUrl}/categories/${categorySlug}\n`;
  });

  content += `\n# Articles (${articles.length} total)\n\n`;

  // Add articles grouped by category
  const articlesByCategory = {};
  articles.forEach((article) => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  Object.keys(articlesByCategory)
    .sort()
    .forEach((category) => {
      content += `## ${category} (${articlesByCategory[category].length} articles)\n\n`;
      articlesByCategory[category].forEach((article) => {
        content += `### ${article.title}\n`;
        content += `URL: ${baseUrl}/blog/${article.slug}\n`;
        content += `Date: ${article.date}\n`;
        content += `Summary: ${article.summary}\n\n`;
      });
    });

  content += `# Authors\n\n`;
  authors.forEach((slug) => {
    content += `${baseUrl}/authors/${slug}\n`;
  });

  content += `\n# Sitemap\n`;
  content += `${baseUrl}/sitemap.xml\n`;

  content += `\n# Notes for AI Crawlers\n`;
  content += `- All articles are research-focused content about tokenization, RWA, and crypto markets\n`;
  content += `- Articles are written by the Research Desk team\n`;
  content += `- Content is updated regularly with new articles\n`;
  content += `- Categories help organize content by topic\n`;
  content += `- Use the sitemap.xml for a complete list of all URLs\n`;

  return content;
};

// Write llms.txt to public folder
const llmsTxt = generateLLMsTxt();
const outputPath = join(__dirname, "../public/llms.txt");
writeFileSync(outputPath, llmsTxt, "utf-8");

console.log(`✅ llms.txt generated successfully at ${outputPath}`);
console.log(`   - ${articles.length} articles`);
console.log(`   - ${categories.length} categories`);
console.log(`   - ${authors.length} authors`);
console.log(`\n📝 Remember to set SITE_URL environment variable to your actual domain!`);
