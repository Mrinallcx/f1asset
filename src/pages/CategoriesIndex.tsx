import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { articles } from "@/content/articles";
import { Link } from "react-router-dom";

const CategoriesIndex = () => {
  const categories = Array.from(new Set(articles.map((a) => a.category))).sort();

  return (
    <PageShell>
      <section className="mb-6 space-y-3">
        <Heading level={1}>Categories</Heading>
        <Paragraph>Browse articles by theme and focus area.</Paragraph>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => {
          const count = articles.filter((a) => a.category === category).length;
          const slug = encodeURIComponent(category.toLowerCase());

          return (
            <Link
              key={category}
              to={`/categories/${slug}`}
              className="block rounded-lg border bg-card p-4 text-sm transition-colors hover:bg-secondary"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm text-foreground">{category}</span>
                <span className="text-xs text-muted-foreground">{count} article{count !== 1 ? "s" : ""}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </PageShell>
  );
};

export default CategoriesIndex;
