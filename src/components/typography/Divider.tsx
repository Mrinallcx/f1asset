import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => (
  <hr className={cn("my-8 border-t border-border", className)} />
);
