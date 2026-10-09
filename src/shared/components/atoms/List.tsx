"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

interface ListProps {
  routes: {
    id: number;
    key: string;
    path: string;
  }[];
  className?: string;
  trans?: string;
}
export default function List({ routes, className = "", trans = "footer" }: ListProps) {
  const pathname = usePathname();
  const t = useTranslations(trans);
  return (
    <ul className={cn(`font-medium ${className}`)}>
      {routes.map(route => (
        <li key={route.id}>
          <Link
            href={route.path}
            className={cn(
              ` ${pathname === route.path ? "ds-text-primary font-bold" : "ds-text-secondary"}`
            )}
          >
            {t(route.key)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
