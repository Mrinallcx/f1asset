import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const TermsPage = () => {
  return (
    <PageShell>
      <section className="max-w-2xl space-y-4">
        <Heading level={1}>Terms & conditions</Heading>
        <Paragraph>
          This is placeholder copy for the terms and conditions. Replace this with the legal terms that govern use of
          this site.
        </Paragraph>
        <Paragraph>
          Include information on acceptable use, limitations of liability, disclaimers, governing law, and how these
          terms may be updated over time.
        </Paragraph>
      </section>
    </PageShell>
  );
};

export default TermsPage;
