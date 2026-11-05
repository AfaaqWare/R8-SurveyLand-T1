"use client";

import { useCallback, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Funnel } from "@/assets/icons/icons";
import { useDismiss } from "../../hooks/useDismiss";
import type { ResponsesFilters } from "../../types/ResponsesTypes";
import { shortenId } from "../../utils/responsesUtils";
import { controlClass, panelClass } from "../styles";

type Props = {
  filters: ResponsesFilters;
  surveyIds: string[];
  onChange: (patch: Partial<ResponsesFilters>) => void;
  onReset: () => void;
};

export default function FilterPopover({ filters, surveyIds, onChange, onReset }: Props) {
  const t = useTranslations("responses.toolbar");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const activeCount = (filters.surveyId ? 1 : 0) + (filters.answeredOnly ? 1 : 0);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--border-color)] bg-[var(--color-bg-card)] px-4 text-sm font-medium text-[color:var(--color-text-primary)] transition hover:border-[color:var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)] sm:w-auto"
      >
        <Funnel className="size-4 text-[color:var(--color-text-secondary)]" />
        {t("filter")}
        {activeCount > 0 && (
          <span className="flex size-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[11px] font-semibold text-[color:var(--color-text-panel)]">
            {activeCount}
          </span>
        )}
      </button>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label={t("filterTitle")}
          className={`${panelClass} absolute end-0 top-full z-20 mt-2 flex w-72 flex-col gap-4 p-4 shadow-[var(--shadow-md)]`}
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={`${panelId}-survey`}
              className="text-xs font-semibold text-[color:var(--color-text-primary)]"
            >
              {t("survey")}
            </label>
            <div className="relative">
              <select
                id={`${panelId}-survey`}
                value={filters.surveyId}
                onChange={e => onChange({ surveyId: e.target.value })}
                className={`${controlClass} appearance-none pe-9 font-mono text-xs`}
              >
                <option value="">{t("allSurveys")}</option>
                {surveyIds.map(id => (
                  <option key={id} value={id}>
                    {shortenId(id)}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-2 text-sm text-[color:var(--color-text-primary)]">
            <input
              type="checkbox"
              checked={filters.answeredOnly}
              onChange={e => onChange({ answeredOnly: e.target.checked })}
              className="size-4 accent-(--color-primary)"
            />
            {t("answeredOnly")}
          </label>

          <button
            type="button"
            onClick={onReset}
            className="self-start text-sm font-medium text-[color:var(--color-primary)] hover:underline"
          >
            {t("reset")}
          </button>
        </div>
      )}
    </div>
  );
}
