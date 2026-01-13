import { useParams, Navigate, Link } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { Blockquote } from "@/components/typography/Blockquote";
import { Divider } from "@/components/typography/Divider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { articles } from "@/content/articles";
import { authors } from "@/content/authors";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = articles.find((a) => a.slug === slug);
  if (!article) return <Navigate to="/404" replace />;

  const author = authors.find((a) => a.id === article.authorId);
  const isSilverCustodyArticle =
    article.slug === "behind-the-scenes-custody-vaulting-and-audits-for-tokenized-silver";
  const isTokenizedVsEtfsArticle = article.slug === "tokenized-silver-vs-etfs-and-bullion";

  return (
    <PageShell>
      <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between text-xs text-muted-foreground">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="font-medium uppercase tracking-wide text-primary underline-offset-4 hover:underline"
        >
          Back
        </button>
      </div>

      <article className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {article.category}
          </p>
          <Heading level={1}>{article.title}</Heading>
          {article.subtitle && <Paragraph className="mt-2 max-w-2xl">{article.subtitle}</Paragraph>}
          <p className="mt-3 text-xs text-muted-foreground">
            {new Date(article.date).toLocaleDateString()} • {article.readingTimeMinutes} min read
            {author && (
              <>
                {" "}•{" "}
                <Link
                  to={`/authors/${author.slug}`}
                  className="font-medium uppercase tracking-wide text-primary underline-offset-4 hover:underline"
                >
                  {author.name}
                </Link>
              </>
            )}
          </p>

          {/* Optional hero / header image driven by article metadata */}
          {article.thumbnailImage && !isSilverCustodyArticle && (
            <div className="mt-6 overflow-hidden rounded-lg border bg-card">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={article.thumbnailImage}
                  alt={article.thumbnailImageAlt ?? article.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
          )}
        </header>

        <div className="flex flex-col gap-10">
          <section className="space-y-10">
            {isSilverCustodyArticle ? (
              <>
                <section id="intro">
                  <Heading level={2}>Why custody, vaulting, and audits matter</Heading>
                  <Paragraph>
                    Tokenized silver only works if the physical metal is genuinely there, securely stored, and
                    independently verified at all times. Custody, vaulting, and audits are the backbone of any credible
                    silver token project.
                  </Paragraph>

                  {/* Inline illustrative image inside the article body */}
                  <figure className="mt-6 space-y-3">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/totofinance-video.firebasestorage.app/o/silver.avif?alt=media&token=265b2ee3-78c8-4489-8aa9-080a4e23269c"
                        alt="High-security vault storing physical silver bars backing tokenized silver"
                        loading="lazy"
                        className="h-full w-full rounded-md border object-cover"
                      />
                    </AspectRatio>
                    <figcaption className="text-xs text-muted-foreground">
                      Professionally vaulted silver bars form the real-world backing behind tokenized silver.
                    </figcaption>
                  </figure>
                </section>

                <section id="physical-layer">
                  <Heading level={2}>Physical layer: vaulting the silver</Heading>
                  <Paragraph>
                    Reputable issuers store silver in high-security, insured vaults managed by specialist third-party
                    custodians in jurisdictions with strong property rights. Bars are typically LBMA-standard and uniquely
                    identified so that they can be tracked through time.
                  </Paragraph>
                  <Heading level={3}>Key vaulting practices</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      Segregated or allocated storage so each bar is clearly owned on behalf of token holders, not pooled
                      into an omnibus account.
                    </li>
                    <li>
                      Comprehensive insurance covering theft, damage, and key operational risks at the vault level, with
                      policy details available to investors.
                    </li>
                  </ul>
                </section>

                <section id="legal-custody">
                  <Heading level={2}>Legal custody structure</Heading>
                  <Paragraph>
                    Many projects adopt a dual-layer model: a legal issuer in a regulated jurisdiction and independent
                    vaulting entities that physically hold the silver. Robust structures give token holders a legally
                    recognized claim on the underlying metal rather than a vague promise.
                  </Paragraph>
                  <Heading level={3}>Separation of roles</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      The entity that mints and burns tokens is separated from the vault operator to reduce conflicts of
                      interest and clarify accountability.
                    </li>
                    <li>
                      Custody agreements spell out storage conditions, insurance, reporting, redemption mechanics, and
                      what happens in a default or insolvency scenario.
                    </li>
                  </ul>
                </section>

                <section id="digital-layer">
                  <Heading level={2}>Digital layer: on-chain custody and controls</Heading>
                  <Paragraph>
                    Every token issuance, transfer, and burn is recorded on a blockchain, creating an immutable ledger of
                    ownership and circulating supply. Smart contracts are typically audited to prevent unauthorized
                    minting, arbitrary supply changes, or hidden admin backdoors.
                  </Paragraph>
                  <Heading level={3}>Technical safeguards</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      Multi-signature wallets and hardware security modules (HSMs) control mint and burn keys, reducing
                      the impact of a single compromised operator.
                    </li>
                    <li>
                      Integrations between vault reporting systems and tokenization platforms ensure tokens are only
                      minted after vault receipt and verification, supporting automated reconciliation.
                    </li>
                  </ul>
                </section>

                <section id="audits">
                  <Heading level={2}>Proof of reserves and audit mechanisms</Heading>
                  <Paragraph>
                    Independent third-party auditors or assayers verify that the total silver in vaults matches or
                    exceeds the total token supply, publishing regular proof-of-reserves style reports.
                  </Paragraph>
                  <Heading level={3}>Audit techniques and standards</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      Periodic physical inspections, sampling bars, and reviewing purity certificates from recognized
                      refiners.
                    </li>
                    <li>
                      Near real-time reconciliation where bar movements in the vault trigger token mints or burns so the
                      1:1 backing is preserved.
                    </li>
                  </ul>
                </section>

                <section id="transparency">
                  <Heading level={2}>Transparency and investor-facing disclosures</Heading>
                  <Paragraph>
                    Strong projects treat transparency as a feature. They publish where metal is stored, who the
                    custodians are, and how to access audit reports and insurance confirmations.
                  </Paragraph>
                  <Heading level={3}>Red flags to watch</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      No independent audits or only vague descriptions of storage partners and legal claims to the
                      silver.
                    </li>
                    <li>
                      Centralized mint keys with weak controls or no audit trail, enabling silent over-issuance of
                      unbacked tokens.
                    </li>
                  </ul>
                </section>

                <section id="regulation">
                  <Heading level={2}>Regulatory and compliance considerations</Heading>
                  <Paragraph>
                    Jurisdictions like Switzerland, Liechtenstein, Luxembourg, and Singapore are popular homes for
                    precious-metal token projects because they provide clearer rules around tokenized commodities and
                    custodial duties.
                  </Paragraph>
                  <Paragraph>
                    In practice, serious platforms align with KYC/AML standards and, where necessary, securities or
                    e-money rules. The more robust the regulatory fit, the easier it is for institutional capital to
                    treat tokenized silver as a real market, not just a niche experiment.
                  </Paragraph>
                </section>
              </>
            ) : isTokenizedVsEtfsArticle ? (
              <>
                <section id="intro">
                  <Heading level={2}>How tokenized silver, ETFs, and bullion differ</Heading>
                  <Paragraph>
                    Tokenized silver, silver ETFs, and physical bullion all provide exposure to the same metal, but they
                    differ sharply in how you own it, how you trade it, and what risks you carry. Thinking in terms of
                    access, control, and use-cases makes the comparison clearer.
                  </Paragraph>
                </section>

                <section id="tokenized-silver">
                  <Heading level={2}>How tokenized silver works</Heading>
                  <Paragraph>
                    Tokenized silver represents vaulted bars on a blockchain. Each token is linked to a fixed weight of
                    metal held by a professional custodian, with on-chain supply designed to match off-chain inventory.
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Tokens typically live on public chains, so they can sit in standard crypto wallets.</li>
                    <li>Trading is usually 24/7 on digital asset venues, not limited to stock-market hours.</li>
                    <li>Some projects allow redemption into physical bars or coins, keeping prices close to spot.</li>
                  </ul>
                </section>

                <section id="silver-etfs">
                  <Heading level={2}>How silver ETFs work</Heading>
                  <Paragraph>
                    A silver ETF issues fund units that track a benchmark price, usually by holding silver bullion with a
                    custodian. Retail investors buy and sell units via brokers during exchange hours.
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Only large authorized participants typically create or redeem ETF units directly.</li>
                    <li>Most investors never touch physical metal; they hold a claim on the fund, not bars.</li>
                    <li>Expense ratios, brokerage fees, and any tracking error drive long-run performance.</li>
                  </ul>
                </section>

                <section id="physical-bullion">
                  <Heading level={2}>How physical silver bullion works</Heading>
                  <Paragraph>
                    Physical bullion means direct ownership of coins, bars, or rounds bought from dealers or mints and
                    stored personally or in vaults. It removes digital infrastructure risk but adds logistics.
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Costs include dealer spreads, shipping, insurance, and sometimes taxes.</li>
                    <li>Storage needs to handle theft, loss, and disaster scenarios.</li>
                    <li>Liquidity depends on local markets and dealer networks.</li>
                  </ul>
                </section>

                <section id="side-by-side">
                  <Heading level={2}>Side-by-side comparison</Heading>
                  <Paragraph>
                    At a high level, each format represents a different trade-off between convenience, control, and
                    infrastructure risk.
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Custody:</strong> Tokens and ETFs rely on professional custodians; bullion can be self-
                      custodial or vaulted.
                    </li>
                    <li>
                      <strong>Liquidity:</strong> Tokens and ETFs offer click-to-trade markets; bullion can be slower and
                      more fragmented.
                    </li>
                    <li>
                      <strong>Fees:</strong> ETFs charge ongoing management fees; tokens and bullion concentrate costs in
                      issuance, spreads, and storage.
                    </li>
                    <li>
                      <strong>Usability:</strong> Tokens plug into DeFi and on-chain collateral; bullion is best for
                      off-grid, long-horizon holders.
                    </li>
                  </ul>
                </section>

                <section id="choosing">
                  <Heading level={2}>Which format fits which investor?</Heading>
                  <Paragraph>
                    There is no single “best” way to hold silver. Instead, the right choice depends on your time horizon,
                    comfort with digital assets, and need for flexibility.
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Crypto-native users</strong> may prefer tokenized silver they can move, trade, or post as
                      collateral directly on-chain.
                    </li>
                    <li>
                      <strong>Traditional investors</strong> may default to ETFs that sit cleanly inside brokerage and
                      retirement accounts.
                    </li>
                    <li>
                      <strong>Hard-asset purists</strong> may prioritize physical bullion they can see and touch, even at
                      the cost of convenience.
                    </li>
                  </ul>
                  <Paragraph>
                    In practice, many sophisticated allocators blend formats—using tokenized silver for agility, ETFs for
                    scale, and bullion for long-term reserves.
                  </Paragraph>
                </section>

                <section id="risks">
                  <Heading level={2}>Key risks and due diligence questions</Heading>
                  <Paragraph>
                    Regardless of format, silver exposure carries market risk and implementation risk. Asking sharp
                    questions up front is the best defense.
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Who is the legal issuer or fund manager, and in which jurisdiction?</li>
                    <li>How is custody structured, and who are the vaulting partners?</li>
                    <li>What audits, attestations, or proof-of-reserves reports are available?</li>
                    <li>How are fees, spreads, and slippage likely to compound over time?</li>
                  </ul>
                </section>
              </>
            ) : (
              <>
                <section id="overview">
                  <Heading level={2}>Overview</Heading>
                  <Paragraph>
                    This is placeholder body copy for the article. In the real implementation, this content would be
                    rendered from MDX or another rich-text source, using the same typography components.
                  </Paragraph>
                </section>

                <section id="layout">
                  <Heading level={2}>Layout &amp; reading experience</Heading>
                  <Paragraph>
                    The goal of this layout is to keep reading width constrained, typography calm, and navigation
                    predictable so that readers can focus on the underlying ideas instead of the UI.
                  </Paragraph>
                </section>

                <section id="quotes">
                  <Heading level={2}>Quotes &amp; emphasis</Heading>
                  <Blockquote>
                    Crypto doesn&apos;t need louder interfaces; it needs quieter places to think.
                  </Blockquote>
                </section>

                <section id="usage">
                  <Heading level={2}>Using this page as a reference</Heading>
                  <Paragraph>
                    Use this page as a reference for spacing, headings, and how different components (quotes, dividers,
                    meta) sit together on the page.
                  </Paragraph>
                </section>
              </>
            )}
          </section>
        </div>

        <Divider />

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>Tags: {article.tags.join(", ")}</p>
          <a
            href="/authors"
            className="font-medium uppercase tracking-wide text-primary underline-offset-4 hover:underline"
          >
            Research Desk
          </a>
        </footer>
      </article>
    </PageShell>
  );
};

export default ArticlePage;
