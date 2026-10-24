"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getAllSurveys } from "../api/getAllSurveys";
import { SurveysApiResponse } from "../types/DashboardTypes";
const useGetSurvey = (surveyId: string) => {
  const {
    data: surveysData,
    isPending: surveysPending,
    isError: surveysError,
    refetch: surveysrefetch,
  } = useApiQuery<SurveysApiResponse>({
    queryFn: getAllSurveys,
    queryKey: ["survey", "list"],
  });

  const surveys = surveysData?.data ?? [];
  const totalSurveys = surveysData?.total ?? surveys.length;
  const draftSurveys = surveys.filter(survey => survey.status === "draft").length;
  const publishedSurveys = surveys.filter(survey => survey.status === "published").length;

  return {
    totalSurveys,
    draftSurveys,
    publishedSurveys,
    surveys,
    isPending: surveysPending,
    isError: surveysError,
    refetch: surveysrefetch,
  };
};

export default useGetSurvey;
