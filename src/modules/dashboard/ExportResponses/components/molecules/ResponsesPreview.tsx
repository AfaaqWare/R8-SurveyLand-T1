"use client";

import { useLocale, useTranslations } from "next-intl";
import { Info } from "@/assets/icons/icons";
import { Card } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import Pagination from "@/shared/components/molecules/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/molecules/Table";

export interface ResponsePreviewRow {
  id: string;
  respondentName: string;
  respondentEmail: string;
  answers: string[];
  submittedAt: string;
}

interface ResponsesPreviewProps {
  rows: ResponsePreviewRow[];
  questionHeaders: string[];
  questionCount: number;
  responseCount: number;
  page: number;
  pageSize?: number;
  totalPages: number;
  total: number;
  onPageChange: (page: number) => void;
}

const formatSubmittedAt = (value: string, locale: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return { day: value, time: "" };

  return {
    day: new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date),
    time: new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date),
  };
};

const ResponsesPreview = ({
  rows,
  questionHeaders,
  questionCount,
  responseCount,
  page,
  pageSize = 5,
  totalPages,
  total,
  onPageChange,
}: ResponsesPreviewProps) => {
  const t = useTranslations("mySurveys.UserDashboard.exportResponses.preview");
  const locale = useLocale();
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = total === 0 ? 0 : Math.min(start + rows.length - 1, total);

  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-4 p-4 shadow-none">
      <div className="flex flex-wrap items-center gap-2">
        <Title size="sm" className="font-bold">
          {t("title")}
        </Title>
        <span className="ds-bg-gray-soft ds-text-gray ds-text-xs rounded-full px-3 py-1 font-medium">
          {t("firstRows", { count: rows.length })}
        </span>
        <span className="ds-bg-green-soft ds-text-green ds-text-xs rounded-full px-3 py-1 font-medium">
          {t("questions", { count: questionCount })}
        </span>
        <span className="ds-bg-orange-soft ds-text-orange ds-text-xs rounded-full px-3 py-1 font-medium">
          {t("responses", { count: responseCount })}
        </span>
      </div>

      <div className="ds-bg-teal-soft flex items-center gap-2 rounded-lg px-3 py-2">
        <Info className="ds-text-teal size-4 shrink-0" />
        <Text size="xs">{t("hint")}</Text>
      </div>

      {rows.length === 0 ? (
        <Text size="sm" variant="secondary">
          {t("empty")}
        </Text>
      ) : (
        <div className="ds-border-sm ds-rounded-lg overflow-hidden">
          <Table className="min-w-[720px] text-start">
            <TableHeader>
              <TableRow className="ds-bg-form ds-text-secondary ds-text-xs">
                <TableHead>{t("columns.id")}</TableHead>
                <TableHead>{t("columns.name")}</TableHead>
                <TableHead>{t("columns.email")}</TableHead>
                {questionHeaders.map((header, index) => (
                  <TableHead key={`${index}-${header}`}>
                    {t("columns.question", { number: index + 1, title: header })}
                  </TableHead>
                ))}
                <TableHead>{t("columns.submittedAt")}</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.map((row, index) => {
                const submitted = formatSubmittedAt(row.submittedAt, locale);

                return (
                  <TableRow key={row.id}>
                    <TableCell className="ds-text-secondary">{start + index}</TableCell>
                    <TableCell className="font-medium">{row.respondentName}</TableCell>
                    <TableCell>
                      <a href={`mailto:${row.respondentEmail}`} className="underline">
                        {row.respondentEmail}
                      </a>
                    </TableCell>
                    {questionHeaders.map((_, answerIndex) => (
                      <TableCell key={`${row.id}-${answerIndex}`}>
                        {row.answers[answerIndex] || "—"}
                      </TableCell>
                    ))}
                    <TableCell>
                      <span className="flex flex-col leading-5">
                        <span>{submitted.day}</span>
                        {submitted.time && (
                          <span className="ds-text-secondary ds-text-xs">{submitted.time}</span>
                        )}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}

      {total > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          start={start}
          end={end}
          total={total}
          onPageChange={onPageChange}
          translationNamespace="mySurveys.pagination"
          itemsLabelKey="responses"
        />
      )}
    </Card>
  );
};

export default ResponsesPreview;
