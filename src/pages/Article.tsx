import { useParams, Navigate } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { Blockquote } from "@/components/typography/Blockquote";
import { Divider } from "@/components/typography/Divider";
import { articles } from "@/content/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/404" replace />;

  return (
    <PageShell>
      <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between text-xs text-muted-foreground">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="font-medium uppercase tracking-wide text-primary underline-offset-4 hover:underline"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => (window.location.href = "/")}
          className="font-medium uppercase tracking-wide text-primary underline-offset-4 hover:underline"
        >
          Home
        </button>
      </div>
      <article className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{article.category}</p>
          <Heading level={1}>{article.title}</Heading>
          {article.subtitle && (
            <Paragraph className="mt-2 max-w-2xl">{article.subtitle}</Paragraph>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString()} • {article.readingTimeMinutes} min read
          </p>
        </header>

        <section className="space-y-6">
          <Paragraph>
            This is placeholder body copy for the article. In the real implementation, this content would be rendered
            from MDX or another rich-text source, using the same typography components.
          </Paragraph>
          <Paragraph>
            The goal of this layout is to keep reading width constrained, typography calm, and navigation predictable so
            that readers can focus on the underlying ideas instead of the UI.
          </Paragraph>
          <Blockquote>
            Crypto doesn&apos;t need louder interfaces; it needs quieter places to think.
          </Blockquote>
          <Paragraph>
            Use this page as a reference for spacing, headings, and how different components (quotes, dividers, meta)
            sit together on the page.
          </Paragraph>
        </section>

        <Divider />

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            Tags: {article.tags.join(", ")}
          </p>
          <p>Author block placeholder</p>
        </footer>
      </article>
    </PageShell>
  );
};

export default ArticlePage;
