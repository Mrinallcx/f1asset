import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { SEO } from "@/components/SEO";
import { articles, allCategories } from "@/content/articles";
import type { ArticleMeta } from "@/content/articles";
import { Link } from "react-router-dom";

const Index = () => {
  const featured: ArticleMeta = articles.find((a) => a.featured) ?? articles[0];
  const latest: ArticleMeta[] = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  const SITE_URL = import.meta.env.VITE_SITE_URL || "https://yourdomain.com";

  // Structured data for website
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Minimal Crypto Journal",
    url: SITE_URL,
    description:
      "Minimal crypto research journal focused on long-form analysis, tokenization, and real-world assets (RWA).",
    publisher: {
      "@type": "Organization",
      name: "Minimal Crypto Journal",
    },
  };

  return (
    <>
      <SEO
        title="Crypto research, without the noise"
        description="Long-form analysis for builders, investors, and operators who care more about signal than headlines."
        url="/"
        structuredData={structuredData}
      />
      <PageShell>
      <section className="mb-12 space-y-4">
        <Heading level={1}>Research on tokenized assets</Heading>
        <Paragraph>
          Long-form analysis for builders, investors, and operators who care more about signal than headlines. Minimal
          layout, maximal clarity.
        </Paragraph>
      </section>

      <section className="mb-12 space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Featured</p>
        <Link to={`/blog/${featured.slug}`} className="block rounded-lg border bg-card p-6 transition-colors hover:bg-secondary">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{featured.category}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">{featured.title}</h2>
          {featured.subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{featured.subtitle}</p>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            {new Date(featured.date).toLocaleDateString()} • {featured.readingTimeMinutes} min read
          </p>
        </Link>
      </section>

      <section className="mb-12 space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Latest</p>
          <Link to="/blog" className="text-xs text-primary underline-offset-4 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {latest.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-lg border bg-card transition-colors hover:bg-secondary"
            >
              <Link to={`/blog/${article.slug}`} className="flex h-full flex-col">
                <div className="overflow-hidden">
                  <img
                    src={article.thumbnailImage ?? "/placeholder.svg"}
                    alt={article.thumbnailImageAlt ?? article.title}
                    loading="lazy"
                    className="h-40 w-full border-b object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {article.category}
                  </p>
                  <h3 className="mt-1 text-sm sm:text-base font-semibold tracking-tight text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">{article.summary}</p>
                  <p className="mt-3 text-[11px] text-muted-foreground">
                    {new Date(article.date).toLocaleDateString()} • Research Desk
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Categories</p>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <Link
              key={cat}
              to={`/categories/${encodeURIComponent(cat.toLowerCase())}`}
              className="rounded-full border bg-secondary px-3 py-1 text-xs text-muted-foreground hover:bg-secondary/80"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
    </>
  );
};

export default Index;
