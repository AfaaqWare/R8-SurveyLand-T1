import apiClient from "@/services/ApiClient";
import { ResponsesApiResponse } from "../types/DashboardTypes";

export async function getAllResponses() {
  return apiClient.get<ResponsesApiResponse>("/responses");
}
