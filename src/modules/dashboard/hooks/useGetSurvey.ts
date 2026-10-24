"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getSurvey } from "../api/getSurvey";
import { IdProps } from "../types/UpdateSurveyType";

const useGetSurvey = ({ id }: IdProps) => {
  return useApiQuery({
    queryKey: ["survey", "details", id],
    queryFn: () => getSurvey({ id }),
    options: {
      enabled: !!id,
    },
  });
};

export default useGetSurvey;
