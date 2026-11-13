
"use client";
import { useDeferredValue, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  DEFAULT_FILTERS,
  applyFilters,
  computeStats,
  getUniqueSurveyIds,
} from "@/modules/responses/utils/responsesUtils";
import { getResponses } from "../api/getResponses";
import type {
  ResponsesFilters,
  SurveyResponse,
} from "../types/ResponsesTypes";
import { getSurveys } from "@/modules/surveys/api/getSurveys";

export const PAGE_SIZE = 10;
const EMPTY: SurveyResponse[] = [];

export function useResponsesTable() {
  const query = useQuery({
    queryKey: ["responses", "list"],
    queryFn: getResponses,
    select: res => res.data,
  });


  const surveysQuery = useQuery({
    queryKey: ["surveys", "list"],
    queryFn: getSurveys,
  });


  const surveysIds = useMemo(
    () => surveysQuery.data?.data.map(survey => survey.id) ?? [],
    [surveysQuery.data]
  );

  const all = useMemo(
    () =>
      (query.data ?? EMPTY).filter(response =>
        surveysIds.includes(response.surveyId)
      ),
    [query.data, surveysIds]
  );

  const [filters, setFilters] = useState<ResponsesFilters>(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const deferredSearch = useDeferredValue(filters.search);


  const filtered = useMemo(
    () => applyFilters(all, { ...filters, search: deferredSearch }),
    [all, filters, deferredSearch]
  );


  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const rows = useMemo(
    () => filtered.slice(startIndex, startIndex + PAGE_SIZE),
    [filtered, startIndex]
  );


  const stats = useMemo(() => computeStats(all), [all]);
  const surveyIds = useMemo(() => getUniqueSurveyIds(all), [all]);

  const updateFilters = (patch: Partial<ResponsesFilters>) => {
    setFilters(prev => ({ ...prev, ...patch }));
    setPage(1);
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  };

  const hasActiveFilters = Boolean(
    filters.search ||
      filters.from ||
      filters.to ||
      filters.surveyId ||
      filters.answeredOnly
  );

  return {
    isLoading: query.isLoading || surveysQuery.isLoading,
    isError: query.isError || surveysQuery.isError,
    refetch: () => {
      query.refetch();
      surveysQuery.refetch();
    },
    total: all.length,
    stats,
    surveyIds,
    filters,
    updateFilters,
    resetFilters,
    hasActiveFilters,
    filtered,
    rows,
    startIndex,
    page: currentPage,
    setPage,
    pageCount,
  };
}
