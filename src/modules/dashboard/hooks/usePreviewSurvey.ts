"use client";
import useGetSurvey from "./useGetSurvey";
import type { IdProps } from "../types/UpdateSurveyType";
import useGetQuestion from "./useGetQuestion";
import { isAxiosError } from "axios";
const usePreviewSurvey = ({ id }: IdProps) => {
  const surveyQuery = useGetSurvey({ id });
  const questionsQuery = useGetQuestion({ id });

  const questions = questionsQuery.data?.data ?? [];

  const total = questions.length;
  const mcqCount = questions.filter(question => question.type === "mcq").length;
  const textareaCount = questions.filter(question => question.type === "textarea").length;
  const requiredCount = questions.filter(question => question.isRequired).length;


  const refetch = () => {
    surveyQuery.refetch();
    questionsQuery.refetch();
  };

  const isNotFound =
    (isAxiosError(surveyQuery.error) && surveyQuery.error.response?.status === 404) ||
    (isAxiosError(questionsQuery.error) && questionsQuery.error.response?.status === 500);

  return {
    survey: surveyQuery.data,
    questions,
    total,
    mcqCount,
    textareaCount,
    requiredCount,
    isLoading: surveyQuery.isPending || questionsQuery.isPending,
    isError: surveyQuery.isError || questionsQuery.isError,
    refetch,
    isNotFound,
  };
};

export default usePreviewSurvey;
