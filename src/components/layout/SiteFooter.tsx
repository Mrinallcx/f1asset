import { FormEvent, useState } from "react";

export const SiteFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Placeholder: wire this up to a backend/edge function later
    console.log("Email signup submitted:", email);
    setEmail("");
  };

  return (
    <footer className="border-t bg-background/80">
      <div className="container flex flex-col gap-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Minimal Crypto Journal. All rights reserved.
          </p>
          <p className="leading-relaxed">
            Crypto assets are volatile and risky. Nothing on this site is financial advice.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col gap-2 text-[11px] sm:text-xs">
          <label htmlFor="email" className="font-medium uppercase tracking-wide text-foreground">
            Email updates
          </label>
          <div className="flex gap-2">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-8 flex-1 rounded-md border bg-background px-2 text-xs text-foreground shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-primary"
            />
            <button
              type="submit"
              className="h-8 rounded-md bg-primary px-3 text-[11px] font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Sign up
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground">
            Low-frequency updates on new research. No spam.
          </p>
        </form>
      </div>
    </footer>
  );
};
