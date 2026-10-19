import NextLink from "next/link";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "alt";

  target?: "_self" | "_blank";
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
};

export default function Link({
  href,
  children,
  target,
  replace,
  scroll,
  prefetch,
  className,
  variant = "primary",
}: LinkProps) {
  return (
    <NextLink
      href={href}
      target={target}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      className={cn(variant === "alt" ? "ds-text-alt" : "ds-text-primary", "pb-2 underline", className)}
    >
      {children}
    </NextLink>
  );
}
