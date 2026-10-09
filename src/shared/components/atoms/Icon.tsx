
import React from "react";
import { cn } from "@/lib/cn";
import { Icon as IconifyIcon } from "@iconify/react";

export interface BaseIconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;

  variant?:
    | "primary"
    | "secondary"
    | "alt"
    | "disabled"
    | "white"
    | "teal"
    | "orange"
    | "green"
    | "purple"
    | "blue";

  color?: "primary" | "secondary" | "alt" | "disabled" | "white" | string | "primaryWhite";

  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;

  // Background
  withBackground?: boolean;
  backgroundClassName?: string;
}

export interface StringIconProps extends BaseIconProps {
  name: string;
  IconComponent?: never;
}

export interface ComponentIconProps extends BaseIconProps {
  name?: never;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string }>;
}

export type IconProps = StringIconProps | ComponentIconProps;

const sizeMap: Record<string, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

const variants: Record<string, string> = {
  primary: "ds-text-primary",
  secondary: "ds-text-secondary",
  alt: "ds-text-alt",
  disabled: "ds-text-disabled",
  white: "ds-text-white",
  primaryWhite: "text-white",

  teal: "ds-text-teal",
  orange: "ds-text-orange",
  green: "ds-text-green",
  purple: "ds-text-purple",
  blue: "ds-text-blue",
};

const backgroundVariants: Record<string, string> = {
  teal: "bg-[color-mix(in_srgb,var(--color-stats-teal)_15%,transparent)]",
  orange: "bg-[color-mix(in_srgb,var(--color-stats-orange)_15%,transparent)]",
  green: "bg-[color-mix(in_srgb,var(--color-stats-green)_15%,transparent)]",
  purple: "bg-[color-mix(in_srgb,var(--color-stats-purple)_15%,transparent)]",
  blue: "bg-[color-mix(in_srgb,var(--color-stats-blue)_15%,transparent)]",
};

export default function Icon({
  name,
  IconComponent,
  size = "md",
  variant,
  color,
  className = "",
  onClick,
  style,
  withBackground = false,
  backgroundClassName = "",
}: IconProps) {
  if (process.env.NODE_ENV !== "production" && color && variant) {
    console.warn(
      "[Icon] Both `color` and `variant` were supplied. `color` takes priority; `variant` is ignored."
    );
  }

  const resolvedSize = typeof size === "number" ? size : (sizeMap[size] ?? 24);

  const resolvedColor = color || variant || "primary";

  const isVariantKey = resolvedColor in variants;

  const variantClass = isVariantKey ? variants[resolvedColor] : "";

  const customColorStyle = !isVariantKey && resolvedColor ? { color: resolvedColor } : {};

  const combinedStyle: React.CSSProperties = {
    ...customColorStyle,
    ...style,
  };

  const icon = IconComponent ? (
    <IconComponent
      width={resolvedSize}
      height={resolvedSize}
      className={cn(variantClass, onClick && "ds-hover cursor-pointer", className)}
      onClick={onClick}
      style={combinedStyle}
    />
  ) : (
    <IconifyIcon
      icon={name || ""}
      width={resolvedSize}
      height={resolvedSize}
      className={cn(variantClass, onClick && "ds-hover cursor-pointer", className)}
      onClick={onClick}
      style={combinedStyle}
    />
  );

  if (!withBackground) {
    return icon;
  }

  const background = backgroundClassName || (variant && backgroundVariants[variant]) || "";

  return (
    <span
      className={cn(
        "ds-rounded-md inline-flex size-11 shrink-0 items-center justify-center",
        background,
        backgroundClassName
      )}
    >
      {icon}
    </span>
  );
}
