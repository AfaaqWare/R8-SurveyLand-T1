"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { IdProps } from "../types/UpdateSurveyType";
import { getQuestion } from "../api/getQuestion";

const useGetQuestion = ({ id }: IdProps) => {
  return useApiQuery({
    queryKey: ["questions", id],
    queryFn: () => getQuestion({ id }),
    options: {
      enabled: !!id,
      retry: false,
    },
  });
};

export default useGetQuestion;
