"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  total: number;
  onPageChange: (page: number) => void;
  translationNamespace: string;
  itemsLabelKey: string;
}

function getPageItems(page: number, totalPages: number): Array<number | "ellipsis"> {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (page >= totalPages - 3) {
    return ["ellipsis", ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)];
  }

  const items: Array<number | "ellipsis"> = Array.from({ length: 4 }, (_, i) => page + i);
  if (page + 3 < totalPages) {
    items.push("ellipsis", totalPages);
  }
  return items;
}

interface PageButtonProps {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  bordered?: boolean;
  ariaLabel?: string;
  children: ReactNode;
}

function PageButton({ onClick, disabled, active, bordered, ariaLabel, children }: PageButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={cn(
        "ds-rounded-md ds-text-sm ds-font-bold focus:ds-focus inline-flex h-9 min-w-9 cursor-pointer items-center justify-center border-2 px-2 transition-colors disabled:cursor-not-allowed disabled:opacity-40",
        active
          ? "ds-border-primary ds-text-alt"
          : bordered
            ? "ds-border-color ds-text-primary hover:ds-primary-200"
            : "ds-text-primary hover:ds-primary-200 border-transparent"
      )}
    >
      {children}
    </button>
  );
}

export default function Pagination({
  page,
  totalPages,
  start,
  end,
  total,
  onPageChange,
  translationNamespace,
  itemsLabelKey,
}: PaginationProps) {
  const t = useTranslations(translationNamespace);
  const items = getPageItems(page, totalPages);

  return (
    <div className="mt-6 flex flex-col flex-wrap items-center justify-between gap-4 sm:flex-row">
      <p className="ds-text-sm ds-text-secondary">
        {t("showing", { start, end, total })}{" "}
        <span className="ds-text-secondary ds-font-bold">{t(itemsLabelKey)}</span>
      </p>

      <nav className="flex flex-wrap items-center gap-1.5" aria-label={t("nav")}>
        <PageButton
          onClick={() => onPageChange(1)}
          disabled={page <= 1}
          bordered
          ariaLabel={t("first")}
        >
          <ChevronsLeft size={16} className="rtl:rotate-180" />
        </PageButton>

        <PageButton
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          bordered
          ariaLabel={t("previous")}
        >
          <ChevronLeft size={16} className="rtl:rotate-180" />
        </PageButton>

        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="ds-text-sm ds-text-secondary px-1"
            >
              ...
            </span>
          ) : (
            <PageButton key={item} active={item === page} onClick={() => onPageChange(item)}>
              {item}
            </PageButton>
          )
        )}

        <PageButton
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          bordered
          ariaLabel={t("next")}
        >
          <ChevronRight size={16} className="rtl:rotate-180" />
        </PageButton>

        <PageButton
          onClick={() => onPageChange(totalPages)}
          disabled={page >= totalPages}
          bordered
          ariaLabel={t("last")}
        >
          <ChevronsRight size={16} className="rtl:rotate-180" />
        </PageButton>
      </nav>
    </div>
  );
}
