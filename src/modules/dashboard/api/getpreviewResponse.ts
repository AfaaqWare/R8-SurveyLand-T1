import apiClient from "@/services/ApiClient";
import { IdProps } from "../types/UpdateSurveyType";
import { ResponseApiResult } from "../types/PreviewResponse";

export async function getPreviewResponse({ id }: IdProps): Promise<ResponseApiResult> {
  return apiClient.get<ResponseApiResult>(`/responses/${id}`);
}
