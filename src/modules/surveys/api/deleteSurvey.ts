import apiClient from "@/services/ApiClient";

export function deleteSurvey(id: string) {
  return apiClient.delete<void>(`/survey/${id}`);
}
