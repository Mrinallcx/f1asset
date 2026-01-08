import { useParams } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { articles } from "@/content/articles";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const normalized = (slug ?? "").toLowerCase();
  const categoryArticles = articles.filter((a) => a.category.toLowerCase() === normalized);

  const displayName = categoryArticles[0]?.category ?? slug;

  return (
    <PageShell>
      <section className="mb-6 space-y-3">
        <Heading level={1}>{displayName}</Heading>
        <Paragraph>Articles filed under this category.</Paragraph>
      </section>

      {categoryArticles.length === 0 ? (
        <Paragraph>No articles found in this category yet.</Paragraph>
      ) : (
        <section className="space-y-6">
          {categoryArticles.map((article) => (
            <article key={article.slug} className="border-b pb-4 last:border-b-0 last:pb-0">
              <Link to={`/blog/${article.slug}`} className="block">
                <h2 className="text-sm sm:text-base font-semibold tracking-tight text-foreground">{article.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{article.summary}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  {new Date(article.date).toLocaleDateString()} • {article.readingTimeMinutes} min read
                </p>
              </Link>
            </article>
          ))}
        </section>
      )}
    </PageShell>
  );
};

export default CategoryPage;
