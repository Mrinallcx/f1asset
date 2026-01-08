import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const UserPolicyPage = () => {
  return (
    <PageShell>
      <section className="max-w-2xl space-y-4">
        <Heading level={1}>User policy</Heading>
        <Paragraph>
          This is placeholder copy for the user policy. Replace this with guidelines for how visitors and registered
          users should behave on the site.
        </Paragraph>
        <Paragraph>
          Outline expectations around appropriate conduct, prohibited activities, account security, and consequences for
          policy violations.
        </Paragraph>
      </section>
    </PageShell>
  );
};

export default UserPolicyPage;
