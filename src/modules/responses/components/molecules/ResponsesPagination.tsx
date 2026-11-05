"use client";

import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "@/assets/icons/icons";
import { getPageItems } from "../../utils/responsesUtils";

type Props = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

const base =
  "inline-flex size-9 items-center justify-center rounded-lg border text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40";
const idle =
  "border-[color:var(--border-color)] text-[color:var(--color-text-primary)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]";
const active =
  "border-[color:var(--color-primary)] bg-[var(--color-primary)] font-semibold text-[color:var(--color-text-panel)]";

export default function ResponsesPagination({ page, pageCount, pageSize, total, onPageChange }: Props) {
  const t = useTranslations("responses.pagination");
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <div className="flex flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row">
      <p className="text-sm text-[color:var(--color-text-secondary)]">{t("showing", { from, to, total })}</p>

      <nav aria-label={t("nav")} className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          aria-label={t("previous")}
          className={`${base} ${idle}`}
        >
          <ChevronLeft className="size-4 rtl:rotate-180" />
        </button>

        {getPageItems(page, pageCount).map((item, index) =>
          item === "ellipsis" ? (
            <span key={`e-${index}`} aria-hidden="true" className="px-1 text-[color:var(--color-text-disabled)]">
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-label={t("page", { page: item })}
              aria-current={item === page ? "page" : undefined}
              className={`${base} ${item === page ? active : idle}`}
            >
              {item}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= pageCount}
          aria-label={t("next")}
          className={`${base} ${idle}`}
        >
          <ChevronRight className="size-4 rtl:rotate-180" />
        </button>
      </nav>
    </div>
  );
}