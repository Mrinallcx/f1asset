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
  const isTokenizedVolumesArticle =
    article.slug === "why-tokenized-silver-volumes-are-exploding-amid-record-silver-prices";
  const isTokenizedInflationHedgeArticle =
    article.slug === "tokenized-silver-as-an-inflation-hedge-in-2026";

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
                  <Heading level={2}>Tokenized Silver vs Traditional Silver: ETFs and Physical Bullion Explained</Heading>
                  <Paragraph>
                    Tokenized silver, silver ETFs, and physical bullion all provide exposure to the same underlying metal.
                    However, they differ significantly in ownership structure, trading access, and risk profile. Viewing
                    them through access, control, and use-cases makes the differences clearer.
                  </Paragraph>
                </section>

                <section id="tokenized-silver">
                  <Heading level={2}>What is tokenized silver?</Heading>
                  <Paragraph>
                    Tokenized silver represents specific quantities of physical silver—for example, 1 gram or 1 ounce per
                    token—issued on a blockchain. Each token corresponds to real bullion stored in professional, insured
                    vaults. Tokens are minted or burned as metal enters or exits custody, keeping on-chain supply aligned
                    with off-chain holdings.
                  </Paragraph>

                  <Heading level={3}>Key traits</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>24/7 global trading on crypto platforms with near-instant settlement.</li>
                    <li>Fractional ownership, often down to very small units.</li>
                    <li>Blockchain transferability via standard wallets.</li>
                    <li>
                      In stronger implementations, on-chain supply transparency, independent audits, and optional
                      redemption for physical silver.
                    </li>
                  </ul>
                </section>

                <section id="silver-etfs">
                  <Heading level={2}>How traditional silver ETFs work</Heading>
                  <Paragraph>
                    Silver ETFs issue fund units designed to track the price of silver. They are typically backed by large
                    silver bars held by institutional custodians. Investors trade ETF units on stock exchanges, while fund
                    managers oversee custody, insurance, and compliance.
                  </Paragraph>

                  <Heading level={3}>Main characteristics</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Trades only during stock-market hours.</li>
                    <li>Follows standard T+ settlement cycles rather than instant settlement.</li>
                    <li>Charges annual expense ratios plus brokerage fees.</li>
                    <li>
                      Retail investors generally cannot redeem physical silver; redemption is reserved for large
                      institutional blocks.
                    </li>
                  </ul>
                </section>

                <section id="physical-bullion">
                  <Heading level={2}>Physical silver bullion basics</Heading>
                  <Paragraph>
                    Physical bullion includes coins, bars, or rounds owned outright by the investor. Storage may be at
                    home, in a bank locker, or in a private vault, but in every case the investor is responsible for
                    custody, security, and liquidity.
                  </Paragraph>

                  <Heading level={3}>Key points</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Direct ownership with no fund or token intermediary.</li>
                    <li>
                      Buying and selling often involves wider spreads, dealer visits, and limited operating hours relative
                      to electronic markets.
                    </li>
                    <li>Storage, insurance, and transport costs scale quickly because silver is bulky.</li>
                  </ul>
                </section>

                <section id="side-by-side">
                  <Heading level={2}>Side-by-side comparison</Heading>

                  <Heading level={3}>Access &amp; liquidity</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Tokenized silver:</strong> global, 24/7 trading with fast settlement and low minimums.
                    </li>
                    <li>
                      <strong>Silver ETFs:</strong> highly liquid, but only during market hours and within brokerage
                      systems.
                    </li>
                    <li>
                      <strong>Physical bullion:</strong> least liquid; selling requires dealer interaction and time.
                    </li>
                  </ul>

                  <Heading level={3}>Ownership &amp; control</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Tokenized silver:</strong> digital claim on specific vaulted metal; control depends on
                      custody arrangements and smart-contract structure.
                    </li>
                    <li>
                      <strong>Silver ETFs:</strong> ownership of fund units, not individual bars.
                    </li>
                    <li>
                      <strong>Physical bullion:</strong> full direct ownership, attractive to sovereignty-focused
                      investors.
                    </li>
                  </ul>

                  <Heading level={3}>Costs &amp; fees</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Tokenized silver:</strong> costs embedded in spreads, mint/burn fees, or platform fees.
                    </li>
                    <li>
                      <strong>Silver ETFs:</strong> transparent annual expense ratios plus brokerage fees.
                    </li>
                    <li>
                      <strong>Physical bullion:</strong> higher dealer spreads and explicit storage and insurance costs.
                    </li>
                  </ul>

                  <Heading level={3}>Transparency &amp; audits</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Tokenized silver:</strong> potential for real-time on-chain supply data and proof-of-reserves
                      style audits.
                    </li>
                    <li>
                      <strong>Silver ETFs:</strong> regular holdings reports, but no retail-level bar inspection.
                    </li>
                    <li>
                      <strong>Physical bullion:</strong> transparency limited to personal verification unless you pay for
                      professional assaying.
                    </li>
                  </ul>

                  <Heading level={3}>Utility &amp; integration</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      <strong>Tokenized silver:</strong> compatible with DeFi, on-chain collateral, and cross-border
                      settlement.
                    </li>
                    <li>
                      <strong>Silver ETFs:</strong> integrates smoothly with traditional portfolios and brokerage
                      infrastructure.
                    </li>
                    <li>
                      <strong>Physical bullion:</strong> best for long-term holding or emergency wealth preservation, not
                      frequent trading.
                    </li>
                  </ul>
                </section>

                <section id="when-it-makes-sense">
                  <Heading level={2}>When each option makes sense</Heading>

                  <Heading level={3}>Tokenized silver is best if you:</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Already use digital assets.</li>
                    <li>Want 24/7 liquidity.</li>
                    <li>Value programmability and DeFi integration.</li>
                    <li>Prefer not to manage physical storage yourself.</li>
                  </ul>

                  <Heading level={3}>Silver ETFs are best if you:</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Operate primarily within traditional brokerage accounts.</li>
                    <li>Want regulated exposure and conventional tax reporting.</li>
                    <li>Prioritize institutional-grade liquidity.</li>
                  </ul>

                  <Heading level={3}>Physical bullion is best if you:</Heading>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Prioritize maximum sovereignty and direct control.</li>
                    <li>Focus on long-term wealth preservation.</li>
                    <li>Are comfortable managing storage and security.</li>
                  </ul>

                  <Paragraph>
                    Each form of silver ownership serves a different purpose. Tokenization introduces speed, composability,
                    and global access; ETFs offer regulated convenience; and physical bullion delivers absolute control.
                    The right mix depends on how—and why—you want to own silver.
                  </Paragraph>
                </section>
              </>
            ) : isTokenizedVolumesArticle ? (
              <>
                <section id="intro">
                  <Heading level={2}>
                    Why Tokenized Silver Volumes Are Exploding Amid Record Silver Prices
                  </Heading>
                  <Paragraph>
                    Tokenized silver trading volumes are surging as record silver prices collide with a faster, more
                    accessible digital way to gain exposure to the metal. Rising macro uncertainty, strong industrial
                    demand, and tighter physical supply are pushing investors toward silver—and increasingly toward
                    on-chain silver tokens instead of only futures or ETFs.
                  </Paragraph>
                  <Paragraph>
                    This shift is not just about price. It reflects where modern market participants prefer to trade:
                    globally, instantly, and without traditional friction.
                  </Paragraph>
                </section>

                <section id="record-prices">
                  <Heading level={2}>Record prices and a real-world silver squeeze</Heading>
                  <Paragraph>
                    Silver recently touched new all-time highs above $80 per ounce before a modest pullback. The rally has
                    been driven by a combination of strong investor demand amid inflation and macro uncertainty, growing
                    industrial usage—especially in solar, electronics, and EV supply chains—and supply constraints and
                    export controls in key producing regions.
                  </Paragraph>
                  <Paragraph>
                    As prices broke out, interest surged across all silver instruments—futures, ETFs, and now tokenized
                    products. For many investors, especially outside traditional markets, tokenized silver offers the
                    fastest way to participate in the move.
                  </Paragraph>
                </section>

                <section id="hard-data">
                  <Heading level={2}>Hard data: 1,200% volume growth</Heading>
                  <Paragraph>
                    On-chain silver products have recorded explosive growth in a short period:
                  </Paragraph>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Approximately 1,200% increase in monthly trading or transfer volume in roughly 30 days.</li>
                    <li>
                      300–340% growth in holder addresses, with several tokens crossing 1,000 wallets in a relatively short
                      timeframe.
                    </li>
                    <li>
                      Around 40%+ increase in net asset value, driven by both rising silver prices and increased on-chain
                      demand.
                    </li>
                  </ul>
                  <Paragraph>
                    This pattern suggests broad participation rather than activity driven by a small number of large
                    holders.
                  </Paragraph>
                </section>

                <section id="why-tokens-preferred">
                  <Heading level={2}>Why investors prefer tokens in this rally</Heading>

                  <Heading level={3}>1. 24/7, borderless silver access</Heading>
                  <Paragraph>
                    Tokenized silver trades continuously on blockchain rails, unlike traditional exchanges with fixed
                    hours. That means immediate reaction to global macro news and weekend events, easy access for non-US
                    and emerging-market investors, and the ability to trade using stablecoins without local brokerage or
                    currency friction.
                  </Paragraph>

                  <Heading level={3}>2. Fractional, low-ticket exposure</Heading>
                  <Paragraph>
                    Most silver tokens represent very small units—fractions of an ounce or gram. That enables low-cost
                    entry even at record prices, supports dollar-cost averaging strategies, and is more accessible than
                    buying large physical bars or full ETF lots. This structure is especially attractive to retail and
                    younger investors.
                  </Paragraph>

                  <Heading level={3}>3. Instant settlement and composability</Heading>
                  <Paragraph>
                    Unlike ETFs, tokenized silver settles almost instantly. Tokens can be moved between wallets, exchanges,
                    and protocols in minutes, used as collateral in DeFi, or traded against stablecoins or paired in
                    liquidity pools. This composability makes silver tokens more dynamic than static ETF holdings.
                  </Paragraph>
                </section>

                <section id="macro-tailwinds">
                  <Heading level={2}>Macro tailwinds beyond price</Heading>
                  <Paragraph>
                    The surge in tokenized silver volume reflects deeper structural changes in financial markets. Real-
                    world asset tokenization has grown into a multi–tens-of-billions-dollar market. Tokenized treasuries
                    paved the way; commodities like silver are the next expansion. Institutions and sophisticated traders
                    are testing blockchain rails for familiar assets.
                  </Paragraph>
                  <Paragraph>
                    Each commodity bull run increasingly routes part of its liquidity through tokenized formats.
                  </Paragraph>
                </section>

                <section id="risks">
                  <Heading level={2}>Risks and open questions</Heading>
                  <Paragraph>
                    Despite rapid growth, tokenized silver markets remain early-stage. Liquidity is still concentrated in a
                    small number of products and platforms; issuer risk, custody structures, and smart-contract security
                    all matter; and some reported volume figures are based on on-chain transfers rather than officially
                    confirmed ETF-style data.
                  </Paragraph>
                  <Paragraph>
                    Investors must still evaluate transparency, audits, and redemption mechanisms carefully.
                  </Paragraph>
                </section>

                <section id="bigger-picture">
                  <Heading level={2}>The bigger picture</Heading>
                  <Paragraph>
                    This is not just a silver story—it is a broader market-structure shift. Silver is still silver, but the
                    venue has changed. Trading is gradually moving from COMEX floors and stock exchanges to blockchains,
                    driven by record prices, macro stress, and the demand for faster, global access.
                  </Paragraph>
                  <Paragraph>
                    As tokenization infrastructure matures, future commodity rallies are likely to see even more volume
                    flow through on-chain markets.
                  </Paragraph>
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
