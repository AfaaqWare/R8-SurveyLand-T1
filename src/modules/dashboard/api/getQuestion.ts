import apiClient from "@/services/ApiClient";
import { IdProps } from "../types/UpdateSurveyType";
import { QuestionsApiResponse } from "../types/PreviewType";

export async function getQuestion({ id }: IdProps): Promise<QuestionsApiResponse> {
  return apiClient.get<QuestionsApiResponse>(`/questions/${id}`);
}
