"use client";

import { useTranslations } from "next-intl";
import { CircleAlert, Inbox, Search } from "@/assets/icons/icons";
import { PAGE_SIZE, useResponsesTable } from "../../hooks/useResponsesTable";
import type { SurveyResponse } from "../../types/ResponsesTypes";
import { countAnswers, downloadCsv } from "../../utils/responsesUtils";
import { panelClass } from "../styles";
import ResponsesPagination from "../molecules/ResponsesPagination";
import ResponsesStats from "../molecules/ResponsesStats";
import ResponsesTable from "../molecules/ResponsesTable";
import ResponsesToolbar from "../molecules/ResponsesToolbar";
import StateMessage from "../molecules/StateMessage";
import { useRouter } from "next/navigation";

function TableSkeleton() {
  return (
    <div className="flex flex-col gap-3 p-4" role="status" aria-busy="true">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="h-12 animate-pulse rounded-lg bg-[var(--color-bg-table)]" />
      ))}
    </div>
  );
}

export default function ResponsesSection() {
  const router = useRouter();
  const t = useTranslations("responses");
  const tTable = useTranslations("responses.table");
  const table = useResponsesTable();

  const handleExport = () => {
    const headers = [
      tTable("id"),
      tTable("respondent"),
      tTable("email"),
      tTable("surveyId"),
      tTable("answers"),
      tTable("submittedAt"),
    ];
    const rows: (string | number)[][] = table.filtered.map(
      (response: SurveyResponse, index: number): (string | number)[] => [
        index + 1,
        response.respondentName,
        response.respondentEmail,
        response.surveyId,
        countAnswers(response),
        response.submittedAt,
      ]
    );
    downloadCsv(`responses-${new Date().toISOString().slice(0, 10)}.csv`, headers, rows);
  };

  let body;
  if (table.isLoading) {
    body = <TableSkeleton />;
  } else if (table.isError) {
    body = (
      <StateMessage
        icon={<CircleAlert className="size-6" />}
        role="alert"
        title={t("states.errorTitle")}
        text={t("states.errorText")}
        actionLabel={t("states.retry")}
        onAction={() => table.refetch()}
      />
    );
  } else if (table.total === 0) {
    body = (
      <StateMessage
        icon={<Inbox className="size-6" />}
        title={t("states.emptyTitle")}
        text={t("states.emptyText")}
      />
    );
  } else if (table.filtered.length === 0) {
    body = (
      <StateMessage
        icon={<Search className="size-6" />}
        title={t("states.noResultsTitle")}
        text={t("states.noResultsText")}
        actionLabel={table.hasActiveFilters ? t("states.clear") : undefined}
        onAction={table.resetFilters}
      />
    );
  } else {
    body = (
      <>
        <ResponsesTable
          rows={table.rows}
          startIndex={table.startIndex}
          onView={response => router.push(`/dashboard/responses/${response.id}/preview`)}
        />
        <ResponsesPagination
          page={table.page}
          pageCount={table.pageCount}
          pageSize={PAGE_SIZE}
          total={table.filtered.length}
          onPageChange={table.setPage}
        />
      </>
    );
  }

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-[color:var(--color-text-primary)] sm:text-3xl">
          {t("title")}
        </h1>
        <p className="text-sm text-[color:var(--color-text-secondary)]">{t("subtitle")}</p>
      </header>

      <ResponsesStats
        stats={table.stats}
        exportCount={table.filtered.length}
        onExport={handleExport}
      />

      <div className={panelClass}>
        <div className="p-4 sm:p-5">
          <ResponsesToolbar
            filters={table.filters}
            surveyIds={table.surveyIds}
            onChange={table.updateFilters}
            onReset={table.resetFilters}
          />
        </div>
        {body}
      </div>
    </section>
  );
}
