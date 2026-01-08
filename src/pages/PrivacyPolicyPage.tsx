import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const PrivacyPolicyPage = () => {
  return (
    <PageShell>
      <section className="max-w-2xl space-y-4">
        <Heading level={1}>Privacy policy</Heading>
        <Paragraph>
          This is placeholder copy for the privacy policy. Replace this with your actual data collection, usage, and
          retention practices.
        </Paragraph>
        <Paragraph>
          Describe what information you collect, how it is used, how long it is stored, and how users can request access
          to or deletion of their data.
        </Paragraph>
      </section>
    </PageShell>
  );
};

export default PrivacyPolicyPage;
