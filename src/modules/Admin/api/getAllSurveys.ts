import apiClient from "@/services/ApiClient";
import { SurveysApiResponse } from "../types/DashboardTypes";
export async function getAllSurveys() {
  return apiClient.get<SurveysApiResponse>("/survey?page=1&pageSize=200");
}
