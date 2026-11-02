import apiClient from "@/services/ApiClient";
import type { SurveysApiResponse } from "@/modules/Admin/types/DashboardTypes";

export function getSurveys() {
  return apiClient.get<SurveysApiResponse>("/survey?page=1&pageSize=200");
}
