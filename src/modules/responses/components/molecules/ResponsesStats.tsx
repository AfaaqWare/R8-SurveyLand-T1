"use client";

import { useLocale, useTranslations } from "next-intl";
import { CalendarDays, ClipboardList, FileSpreadsheet, FileText } from "@/assets/icons/icons";
import type { ResponsesStatsData } from "../../types/ResponsesTypes";
import { formatDate } from "../../utils/responsesUtils";
import StatCard from "./StatCard";

type Props = {
  stats: ResponsesStatsData;
  exportCount: number; // عدد الصفوف الجاهزة للتصدير (بعد الفلترة)
  onExport: () => void;
};

export default function ResponsesStats({ stats, exportCount, onExport }: Props) {
  const t = useTranslations("responses.stats");
  const locale = useLocale();

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        tone="teal"
        icon={<ClipboardList className="size-6" />}
        label={t("total")}
        value={stats.total}
        caption={t("allTime")}
      />
      <StatCard
        tone="purple"
        icon={<FileText className="size-6" />}
        label={t("uniqueSurveys")}
        value={stats.uniqueSurveys}
        caption={t("allTime")}
      />
      <StatCard
        tone="orange"
        icon={<CalendarDays className="size-6" />}
        label={t("latest")}
        value={stats.latestAt ? formatDate(stats.latestAt, locale) : "—"}
        caption={stats.latestAt ? t("latestCaption") : t("latestEmpty")}
      />
      <StatCard
        tone="green"
        icon={<FileSpreadsheet className="size-6" />}
        label={t("export")}
        value={exportCount}
        caption={t("exportCaption")}
        onClick={onExport}
        disabled={exportCount === 0}
      />
    </div>
  );
}