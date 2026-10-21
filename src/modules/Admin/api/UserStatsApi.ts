import apiClient from "@/services/ApiClient";
import { UsersApiResponse } from "../types/DashboardTypes";

export async function UserStatsApi() {
  return apiClient.get<UsersApiResponse>("/auth/users");
}
