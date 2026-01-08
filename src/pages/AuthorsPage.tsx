import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { authors } from "@/content/authors";
import { Link } from "react-router-dom";

const AuthorsPage = () => {
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <Heading level={1}>Authors</Heading>
          <Paragraph>
            Meet the research voices behind the Minimal Crypto Journal.
          </Paragraph>
        </header>

        <section className="space-y-3">
          {authors.map((author) => (
            <Link
              key={author.id}
              to={`/authors/${author.slug}`}
              className="flex items-center gap-3 rounded-lg border bg-card p-4 text-sm transition-colors hover:bg-secondary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                {author.avatarInitials}
              </div>
              <div>
                <p className="font-semibold text-foreground">{author.name}</p>
                <p className="text-[11px] text-muted-foreground">{author.role}</p>
              </div>
            </Link>
          ))}
        </section>
      </article>
    </PageShell>
  );
};

export default AuthorsPage;
