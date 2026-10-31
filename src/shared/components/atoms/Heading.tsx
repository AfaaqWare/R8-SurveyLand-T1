
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "sm" | "md" | "lg" | "xl";
type HeadingVariant =
  | "primary"
  | "secondary"
  | "alt"
  | "white"
  | "disabled";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  variant?: HeadingVariant;
  align?: "start" | "center" | "end";
}

const sizes: Record<HeadingSize, string> = {
  sm: "ds-title-sm",
  md: "ds-title-md",
  lg: "ds-title-lg",
  xl: "ds-title-xl",
};

const variants: Record<HeadingVariant, string> = {
  primary: "ds-text-primary",
  secondary: "ds-text-secondary",
  alt: "ds-text-alt",
  white: "ds-text-white",
  disabled: "ds-text-disabled",
};

const alignments = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
};

export default function Heading({
  as: Tag = "h2",
  size = "lg",
  variant = "primary",
  align = "start",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        sizes[size],
        variants[variant],
        alignments[align],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
