import apiClient from "@/services/ApiClient";
import { AdminUser, UsersResponse } from "../types/UsersTypes";

// TODO: confirm the endpoint with the backend / Postman collection.
const USERS_ENDPOINT = "/auth/users";

export async function getUsers(): Promise<AdminUser[]> {
  const response = await apiClient.get<UsersResponse>(USERS_ENDPOINT);
  return Array.isArray(response) ? response : response.data;
}
