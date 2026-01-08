import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const AboutPage = () => {
  return (
    <PageShell>
      <section className="space-y-4 max-w-2xl">
        <Heading level={1}>About this journal</Heading>
        <Paragraph>
          This is a minimal crypto research journal. The focus is long-form analysis, structural shifts, and durable
          frameworks—not headlines or hype.
        </Paragraph>
        <Paragraph>
          All content is experimental and should be treated as research notes, not investment advice. Do your own
          research and never risk capital you cannot afford to lose.
        </Paragraph>
      </section>
    </PageShell>
  );
};

export default AboutPage;
