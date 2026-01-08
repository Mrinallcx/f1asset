import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

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

        <section className="rounded-lg border bg-card p-6">
          <h2 className="text-base font-semibold tracking-tight text-foreground">Research Desk</h2>
          <p className="mt-1 text-xs text-muted-foreground">Collective byline</p>
          <Paragraph className="mt-3 text-sm">
            The Research Desk is a collective pseudonym for the writers, analysts, and editors contributing to this
            journal. Articles published under this byline reflect a synthesis of perspectives from market structure,
            protocol design, and long-horizon investing.
          </Paragraph>
        </section>
      </article>
    </PageShell>
  );
};

export default AuthorsPage;
