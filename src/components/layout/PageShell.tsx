import { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

interface PageShellProps {
  children: ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => (
  <div className="flex min-h-screen flex-col bg-background text-foreground">
    <SiteHeader />
    <main className="flex-1">
      <div className="container max-w-5xl py-10 lg:py-16">{children}</div>
    </main>
    <SiteFooter />
  </div>
);
