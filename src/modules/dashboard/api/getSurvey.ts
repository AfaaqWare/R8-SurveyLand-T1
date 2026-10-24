import apiClient from "@/services/ApiClient";
import { IdProps, SurveyResponse } from "../types/UpdateSurveyType";

export async function getSurvey({ id }: IdProps): Promise<SurveyResponse> {
  return apiClient.get<SurveyResponse>(`/survey/${id}`);
}
