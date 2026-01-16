import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { SEO } from "@/components/SEO";
import { articles, allCategories } from "@/content/articles";
import { Link, useSearchParams } from "react-router-dom";

const BlogListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? articles.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase())
    : articles;

  const handleCategoryClick = (category: string | null) => {
    if (!category) {
      setSearchParams({});
    } else {
      setSearchParams({ category: category.toLowerCase() });
    }
  };

  const categoryTitle = activeCategory
    ? `${activeCategory} Articles | Minimal Crypto Journal`
    : "All Research | Minimal Crypto Journal";
  const categoryDescription = activeCategory
    ? `Browse all ${activeCategory} articles and research on tokenization, RWA, and crypto markets.`
    : "Browse recent notes, frameworks, and long-form pieces on tokenization, RWA, and crypto markets.";

  return (
    <>
      <SEO
        title={activeCategory ? `${activeCategory} Articles` : "All Research"}
        description={categoryDescription}
        url={activeCategory ? `/blog?category=${encodeURIComponent(activeCategory.toLowerCase())}` : "/blog"}
        canonicalUrl="/blog"
      />
      <PageShell>
      <section className="mb-8 space-y-3">
        <Heading level={1}>All research</Heading>
        <Paragraph>Browse recent notes, frameworks, and long-form pieces.</Paragraph>
      </section>

      <section className="mb-8 flex flex-wrap items-center gap-2 text-xs">
        <button
          type="button"
          onClick={() => handleCategoryClick(null)}
          className={`rounded-full border px-3 py-1 ${!activeCategory ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
        >
          All
        </button>
        {allCategories.map((cat) => {
          const isActive = activeCategory?.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full border px-3 py-1 ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
            >
              {cat}
            </button>
          );
        })}
      </section>

      <section className="space-y-6">
        {filtered.map((article) => (
          <article key={article.slug} className="border-b pb-4 last:border-b-0 last:pb-0">
            <Link to={`/blog/${article.slug}`} className="block">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{article.category}</p>
              <h2 className="mt-1 text-base sm:text-lg font-semibold tracking-tight text-foreground">{article.title}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{article.summary}</p>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {new Date(article.date).toLocaleDateString()} • {article.readingTimeMinutes} min read
              </p>
            </Link>
          </article>
        ))}
      </section>
    </PageShell>
    </>
  );
};

export default BlogListing;
