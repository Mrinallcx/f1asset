import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlockquoteProps {
  className?: string;
  children: ReactNode;
}

export const Blockquote = ({ className, children }: BlockquoteProps) => (
  <blockquote
    className={cn(
      "mt-8 border-l-2 border-border pl-4 text-sm sm:text-base italic text-muted-foreground",
      className,
    )}
  >
    {children}
  </blockquote>
);
