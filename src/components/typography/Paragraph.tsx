import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParagraphProps {
  className?: string;
  children: ReactNode;
}

export const Paragraph = ({ className, children }: ParagraphProps) => (
  <p className={cn("max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground", className)}>
    {children}
  </p>
);
