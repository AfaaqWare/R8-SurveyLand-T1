import apiClient from "@/services/ApiClient";
import type { IdProps } from "../types/UpdateSurveyType";
import type { ExportResponseItem, SurveyResponsesApiResponse } from "../types/ExportResponses";

export async function getSurveyResponses({ id }: IdProps): Promise<SurveyResponsesApiResponse> {
  const result = await apiClient.get<SurveyResponsesApiResponse>(`/responses/survey/${id}`);
  const data = result.data as ExportResponseItem[] | { responses?: ExportResponseItem[] };

  return {
    success: result.success,
    message: result.message,
    data: Array.isArray(data) ? data : (data?.responses ?? []),
  };
}
