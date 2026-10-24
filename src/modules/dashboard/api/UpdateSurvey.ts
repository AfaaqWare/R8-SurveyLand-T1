import apiClient from "@/services/ApiClient";
import { SurveyResponse, UpdateSurveyProps } from "../types/UpdateSurveyType";

export async function UpdateSurvey(id: string, values: UpdateSurveyProps) {
  return apiClient.put<SurveyResponse>(`/survey/${id} `, values);
}
