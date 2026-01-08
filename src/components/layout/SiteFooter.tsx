export const SiteFooter = () => (
  <footer className="border-t bg-background/80">
    <div className="container flex flex-col items-start gap-2 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p className="leading-relaxed">
        © {new Date().getFullYear()} Minimal Crypto Journal. All rights reserved.
      </p>
      <p className="leading-relaxed">
        Crypto assets are volatile and risky. Nothing on this site is financial advice.
      </p>
    </div>
  </footer>
);
