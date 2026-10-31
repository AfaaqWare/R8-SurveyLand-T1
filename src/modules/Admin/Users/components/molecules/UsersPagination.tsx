"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface UsersPaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

const WINDOW = 2;

export default function UsersPagination({ page, pageCount, onChange }: UsersPaginationProps) {
  const t = useTranslations("dashboard.users");

  const first = Math.max(1, page - WINDOW);
  const last = Math.min(pageCount, page + WINDOW);
  const pages = Array.from({ length: last - first + 1 }, (_, index) => first + index);

  const baseButton =
    "ds-border-color flex size-8 items-center justify-center rounded-md border text-sm transition-opacity hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <nav className="flex items-center gap-2" aria-label={t("pagination")}>
      <button
        type="button"
        className={baseButton}
        aria-label={t("prev")}
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
      </button>

      {pages.map(number => (
        <button
          key={number}
          type="button"
          aria-current={number === page ? "page" : undefined}
          className={`${baseButton} ${
            number === page ? "border-var(--color-primary) text-var(--color-primary)" : ""
          }`}
          onClick={() => onChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        className={baseButton}
        aria-label={t("next")}
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" />
      </button>
    </nav>
  );
}