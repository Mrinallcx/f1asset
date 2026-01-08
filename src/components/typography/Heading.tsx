import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
}

const levelStyles: Record<number, string> = {
  1: "text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight",
  2: "text-2xl md:text-3xl font-semibold tracking-tight",
  3: "text-xl md:text-2xl font-semibold tracking-tight",
  4: "text-lg md:text-xl font-semibold tracking-tight",
  5: "text-base md:text-lg font-semibold tracking-tight",
  6: "text-sm md:text-base font-semibold tracking-tight",
};

export const Heading = ({ level = 1, className, children }: HeadingProps) => {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={cn(
        "text-foreground",
        level === 1 ? "mb-4" : "mt-10 mb-3",
        "leading-tight",
        levelStyles[level],
        className,
      )}
    >
      {children}
    </Tag>
  );
};
