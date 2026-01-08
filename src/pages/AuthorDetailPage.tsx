import { useParams, Navigate } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { authors } from "@/content/authors";
import { articles } from "@/content/articles";
import { Link } from "react-router-dom";

const AuthorDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = authors.find((a) => a.slug === slug);

  if (!author) return <Navigate to="/404" replace />;

  const authoredArticles = articles.filter((article) => article.authorId === author.id);

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl space-y-6">
        <header className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
            {author.avatarInitials}
          </div>
          <div className="space-y-1">
            <Heading level={1}>{author.name}</Heading>
            <p className="text-xs text-muted-foreground">{author.role}</p>
          </div>
        </header>

        <Paragraph className="text-sm">{author.bio}</Paragraph>

        {authoredArticles.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-sm font-semibold tracking-tight text-foreground">Articles by {author.name}</h2>
            <div className="space-y-3 text-sm">
              {authoredArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="block rounded-lg border bg-card p-4 transition-colors hover:bg-secondary"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {article.category}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{article.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Date(article.date).toLocaleDateString()} • {article.readingTimeMinutes} min read
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </PageShell>
  );
};

export default AuthorDetailPage;
