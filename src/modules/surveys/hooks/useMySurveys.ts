"use client";

import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getSurveys } from "../api/getSurveys";

const useMySurveys = () => {
  return useApiQuery({
    queryKey: ["survey", "list"],
    queryFn: getSurveys,
  });
};

export default useMySurveys;
