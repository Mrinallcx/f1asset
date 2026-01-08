import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const CookiePolicyPage = () => {
  return (
    <PageShell>
      <section className="max-w-2xl space-y-4">
        <Heading level={1}>Cookie policy</Heading>
        <Paragraph>
          This is placeholder copy for the cookie policy. Replace this with details on how cookies and similar
          technologies are used on this site.
        </Paragraph>
        <Paragraph>
          Explain what types of cookies you use, what they do, how long they persist, and how users can manage their
          preferences.
        </Paragraph>
      </section>
    </PageShell>
  );
};

export default CookiePolicyPage;
