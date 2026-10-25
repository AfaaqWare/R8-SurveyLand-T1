"use client";

import { useMemo, useState } from "react";
import { Plus } from "@/assets/icons/icons";
import { ErrorState, EmptyState, LoadingState } from "@/core/ui-states";
import type { Survey, SurveyStatus } from "@/modules/Admin/types/DashboardTypes";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import type { StatusBadgeVariant } from "@/shared/components/atoms/StatusBadge";
import Pagination from "@/shared/components/molecules/Pagination";
import { formatDate } from "@/shared/utils/formatDate";
import SurveyCard from "../molecules/SurveyCard";
import SurveyToolbar, { type SurveyOrder, type SurveyTab } from "../molecules/SurveyToolbar";
import useMySurveys from "../../hooks/useMySurveys";

const PAGE_SIZE = 6;

const statuses: SurveyStatus[] = ["draft", "published", "closed"];

function toStatus(status: string): StatusBadgeVariant {
  return statuses.includes(status as SurveyStatus) ? (status as StatusBadgeVariant) : "draft";
}

function toUpdatedAt(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return formatDate(value);
}

function toCard(survey: Survey) {
  return {
    id: survey.id,
    image: survey.cover || "",
    status: toStatus(survey.status),
    title: survey.title || "Untitled survey",
    description: survey.description || "",
    questionsCount: survey.questions?.length ?? 0,
    responsesCount: 0,
    deadline: toUpdatedAt(survey.deadline ?? undefined),
    updatedAt: toUpdatedAt(survey.updatedAt),
  };
}

export default function MySurveys() {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState<SurveyTab>("All");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState<SurveyOrder>("Newest First");
  const { data, isPending, isError, refetch } = useMySurveys();

  const surveys = useMemo(() => {
    const search = query.trim().toLowerCase();

    return (data?.data ?? [])
      .filter(survey => tab === "All" || survey.status === tab.toLowerCase())
      .filter(survey => {
        if (!search) return true;
        return (
          survey.title?.toLowerCase().includes(search) ||
          survey.description?.toLowerCase().includes(search)
        );
      })
      .sort((a, b) => {
        const aTime = new Date(a.updatedAt).getTime();
        const bTime = new Date(b.updatedAt).getTime();
        return order === "Newest First" ? bTime - aTime : aTime - bTime;
      })
      .map(toCard);
  }, [data, tab, query, order]);

  const total = surveys.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleSurveys = surveys.slice(startIndex, startIndex + PAGE_SIZE);

  const changeTab = (next: SurveyTab) => {
    setTab(next);
    setPage(1);
  };

  const changeQuery = (next: string) => {
    setQuery(next);
    setPage(1);
  };

  const changeOrder = (next: SurveyOrder) => {
    setOrder(next);
    setPage(1);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <Title size="lg" className="font-bold normal-case">
            My Surveys
          </Title>
          <Text size="sm" variant="secondary">
            Manage, Edit and track all your Survey
          </Text>
        </div>

        <Button className="h-11 shrink-0 px-5">
          <Plus size={16} />
          Create Survey
        </Button>
      </div>

      {isPending ? (
        <LoadingState />
      ) : isError ? (
        <ErrorState onRetry={() => refetch()} />
      ) : (
        <>
          <SurveyToolbar
            tab={tab}
            query={query}
            order={order}
            onTabChange={changeTab}
            onQueryChange={changeQuery}
            onOrderChange={changeOrder}
          />

          {surveys.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {visibleSurveys.map(survey => (
                  <SurveyCard
                    key={survey.id}
                    image={survey.image}
                    status={survey.status}
                    title={survey.title}
                    description={survey.description}
                    questionsCount={survey.questionsCount}
                    responsesCount={survey.responsesCount}
                    deadline={survey.deadline}
                    updatedAt={survey.updatedAt}
                    surveyId={survey.id}
                  />
                ))}
              </div>

              <Pagination
                page={currentPage}
                totalPages={totalPages}
                start={startIndex + 1}
                end={startIndex + visibleSurveys.length}
                total={total}
                onPageChange={setPage}
                translationNamespace="mySurveys.pagination"
                itemsLabelKey="surveys"
              />
            </>
          )}
        </>
      )}
    </section>
  );
}
