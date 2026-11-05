"use client";

import { useTranslations } from "next-intl";
import { CalendarDays, ChevronDown, Search } from "@/assets/icons/icons";
import type { ResponsesFilters, SortOrder } from "../../types/ResponsesTypes";
import { controlClass } from "../styles";
import FilterPopover from "./FilterPopover";

type Props = {
  filters: ResponsesFilters;
  surveyIds: string[];
  onChange: (patch: Partial<ResponsesFilters>) => void;
  onReset: () => void;
};

export default function ResponsesToolbar({ filters, surveyIds, onChange, onReset }: Props) {
  const t = useTranslations("responses.toolbar");

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      {/* search */}
      <div className="relative min-w-0 flex-1">
        <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
        <input
          type="search"
          value={filters.search}
          onChange={e => onChange({ search: e.target.value })}
          placeholder={t("search")}
          aria-label={t("search")}
          className={`${controlClass} ps-10`}
        />
      </div>

      {/* sort */}
      <div className="relative lg:w-48">
        <select
          value={filters.sort}
          onChange={e => onChange({ sort: e.target.value as SortOrder })}
          aria-label={t("sort")}
          className={`${controlClass} appearance-none pe-9`}
        >
          <option value="newest">{t("newest")}</option>
          <option value="oldest">{t("oldest")}</option>
        </select>
        <ChevronDown className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
      </div>

      {/* date range */}
      <div
        role="group"
        aria-label={t("dateRange")}
        className="flex h-11 items-center gap-2 rounded-[var(--radius-md)] border border-[color:var(--border-color)] bg-[var(--color-bg-card)] px-3 focus-within:border-[color:var(--color-primary)] focus-within:ring-1 focus-within:ring-[color:var(--color-primary)]"
      >
        <CalendarDays className="size-4 shrink-0 text-[color:var(--color-text-secondary)]" />
        <input
          type="date"
          value={filters.from}
          max={filters.to || undefined}
          onChange={e => onChange({ from: e.target.value })}
          aria-label={t("from")}
          className="w-32 bg-transparent text-sm text-[color:var(--color-text-primary)] outline-none"
        />
        <span aria-hidden="true" className="text-[color:var(--color-text-disabled)]">
          –
        </span>
        <input
          type="date"
          value={filters.to}
          min={filters.from || undefined}
          onChange={e => onChange({ to: e.target.value })}
          aria-label={t("to")}
          className="w-32 bg-transparent text-sm text-[color:var(--color-text-primary)] outline-none"
        />
      </div>

      <FilterPopover
        filters={filters}
        surveyIds={surveyIds}
        onChange={onChange}
        onReset={onReset}
      />
    </div>
  );
}
