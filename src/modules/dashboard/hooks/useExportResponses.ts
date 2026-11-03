"use client";

import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { useAlert } from "@/shared/hooks/useAlert";
import { getQuestion } from "../api/getQuestion";
import { getSurveyResponses } from "../api/exportResponses";
import useGetSurvey from "./useGetSurvey";
import { downloadXlsx } from "../utils/buildXlsx";
import type { IdProps } from "../types/UpdateSurveyType";
import type { ExportFileSettings, ExportResponseItem } from "../types/ExportResponses";
import type { PreviewQuestion } from "../types/PreviewType";
import type { ResponsePreviewRow } from "../ExportResponses/components/molecules/ResponsesPreview";

export const EXPORT_PAGE_SIZE = 5;

const answerFor = (response: ExportResponseItem, question: PreviewQuestion) =>
  response.answers?.[question.qid] ?? "";

const formatSubmittedAt = (value: string, locale: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const useExportResponses = ({ id }: IdProps) => {
  const t = useTranslations("mySurveys.UserDashboard.exportResponses");
  const locale = useLocale();
  const { showAlert } = useAlert();
  const [page, setPage] = useState(1);
  const [isExporting, setIsExporting] = useState(false);

  const surveyQuery = useGetSurvey({ id });
  const questionsQuery = useApiQuery({
    queryKey: ["questions", id],
    queryFn: () => getQuestion({ id }),
    options: { enabled: !!id, retry: false },
  });
  const responsesQuery = useApiQuery({
    queryKey: ["responses", "survey", id],
    queryFn: () => getSurveyResponses({ id }),
    options: { enabled: !!id, retry: false },
  });

  const questionList = questionsQuery.data?.data ?? surveyQuery.data?.questions ?? [];
  const questions = Array.isArray(questionList) ? questionList : [];
  const responseList = responsesQuery.data?.data;
  const responses = Array.isArray(responseList) ? responseList : [];
  const questionHeaders = questions.map(question => question.questionText);
  const rows: ResponsePreviewRow[] = responses.map(response => ({
    id: response.id,
    respondentName: response.respondentName,
    respondentEmail: response.respondentEmail,
    answers: questions.map(question => answerFor(response, question)),
    submittedAt: response.submittedAt,
  }));

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / EXPORT_PAGE_SIZE));
  const start = (page - 1) * EXPORT_PAGE_SIZE;
  const pageRows = rows.slice(start, start + EXPORT_PAGE_SIZE);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const refetch = () => {
    surveyQuery.refetch();
    questionsQuery.refetch();
    responsesQuery.refetch();
  };

  const exportFile = (settings: ExportFileSettings) => {
    const headers: string[] = [];
    const valueAt = rows.map(row => {
      const values: string[] = [];
      if (settings.includeName) values.push(row.respondentName);
      if (settings.includeEmail) values.push(row.respondentEmail);
      if (settings.includeSubmission) values.push(formatSubmittedAt(row.submittedAt, locale));
      if (settings.includeAnswers) values.push(...row.answers);
      return values;
    });

    if (settings.includeName) headers.push(t("preview.columns.name"));
    if (settings.includeEmail) headers.push(t("preview.columns.email"));
    if (settings.includeSubmission) headers.push(t("preview.columns.submittedAt"));
    if (settings.includeAnswers) {
      questionHeaders.forEach((header, index) => {
        headers.push(t("preview.columns.question", { number: index + 1, title: header }));
      });
    }

    if (headers.length === 0) {
      showAlert("error", t("noColumns"));
      return;
    }

    try {
      setIsExporting(true);
      downloadXlsx(settings.fileName, [headers, ...valueAt]);
      showAlert("success", t("exported"));
    } catch {
      showAlert("error", t("somethingWrong"));
    } finally {
      setIsExporting(false);
    }
  };

  const isNotFound = isAxiosError(surveyQuery.error) && surveyQuery.error.response?.status === 404;

  return {
    rows: pageRows,
    questionHeaders,
    questionCount: questions.length,
    responseCount: total,
    page,
    pageSize: EXPORT_PAGE_SIZE,
    totalPages,
    total,
    setPage,
    exportFile,
    isExporting,
    isLoading: surveyQuery.isPending || questionsQuery.isPending || responsesQuery.isPending,
    isError: surveyQuery.isError || questionsQuery.isError || responsesQuery.isError,
    isNotFound,
    refetch,
  };
};

export default useExportResponses;
