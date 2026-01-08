import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InlineCodeProps {
  className?: string;
  children: ReactNode;
}

export const InlineCode = ({ className, children }: InlineCodeProps) => (
  <code
    className={cn(
      "rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground",
      className,
    )}
  >
    {children}
  </code>
);
