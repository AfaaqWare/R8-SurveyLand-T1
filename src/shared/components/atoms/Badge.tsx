import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "gray" | "green" | "orange" | "teal" | "purple" | "blue";

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

const toneStyles: Record<BadgeTone, string> = {
  gray: "ds-bg-gray-soft ds-text-gray",
  green: "ds-bg-green-soft ds-text-green",
  orange: "ds-bg-orange-soft ds-text-orange",
  teal: "ds-bg-teal-soft ds-text-teal",
  purple: "ds-bg-purple-soft ds-text-purple",
  blue: "ds-bg-blue-soft ds-text-blue",
};

export default function Badge({ tone = "gray", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center justify-center whitespace-nowrap",
        "ds-rounded-md px-3 py-1.5",
        "ds-text-sm ds-font-bold",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
