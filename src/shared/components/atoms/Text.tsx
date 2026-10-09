import React from "react";
import { cn } from "@/lib/cn";
interface Props {
  size?: "xs" | "sm" | "base" | "md" | "lg";
  variant?:
    | "primary"
    | "disabled"
    | "secondary"
    | "alt"
    | "white"
    | "teal"
    | "orange"
    | "green"
    | "purple"
    | "blue"
    | "gray"

  className?: string;
  children: React.ReactNode;
  isCenter?: boolean;
}

export default function Text({
  size = "base",
  variant = "primary",
  className = "",
  children,
  isCenter = false,
}: Props) {
  const sizes = {
    xs: "ds-text-xs",
    sm: "ds-text-sm",
    base: "ds-text-base",
    md: "ds-text-md",
    lg: "ds-text-lg",
  };
  const variants = {
    primary: "ds-text-primary",
    disabled: "ds-text-disabled",
    secondary: "ds-text-secondary",
    alt: "ds-text-alt ",
    white: "text-white",
    teal: "ds-text-teal",
    orange: "ds-text-orange",
    green: "ds-text-green",
    purple: "ds-text-purple",
    blue: "ds-text-blue",
    gray: "ds-text-gray",
  };
  return (
    <p className={cn(variants[variant], sizes[size], isCenter ? "text-center" : "", className)}>
      {children}
    </p>
  );
}
