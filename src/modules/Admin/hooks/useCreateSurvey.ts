"use client";

import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { createSurvey } from "../api/createSurvey";
import type { CreateSurveyBody, CreateSurveyResponse } from "../types/createSurveyTypes";

export function useCreateSurvey() {
  return useApiMutation<CreateSurveyBody, CreateSurveyResponse>({
    mutationFn: createSurvey,
  });
}
