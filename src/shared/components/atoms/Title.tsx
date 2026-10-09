import React from "react";
import { cn } from "@/lib/cn";
interface Props {
  size?: "sm" | "base" | "md" | "lg" | "xl";
  variant?: "primary" | "disabled" | "secondary" | "alt" | "white";
  className?: string;
  children: React.ReactNode;
  isCenter?: boolean;
}

export default function Title({
  size = "xl",
  variant = "primary",
  className = "font-bold capitalize",
  children,
  isCenter = false,
}: Props) {
  const sizes = {
    sm: "ds-text-sm",
    base: "ds-text-base",
    md: "ds-text-md",
    lg: "ds-text-lg",
    xl: "ds-text-xl",
  };
  const variants = {
    primary: "ds-text-primary",
    disabled: "ds-text-disabled ",
    secondary: "ds-text-secondary",
    alt: "ds-text-alt ",
    white: "text-white",

  };
  return (
    <h2 className={cn(variants[variant], sizes[size], isCenter ? "text-center" : "", className)}>
      {children}
    </h2>
  );
}
