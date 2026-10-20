import apiClient from "@/services/ApiClient";

export async function GetProfile() {
  return apiClient.get("/auth/profile");
}
