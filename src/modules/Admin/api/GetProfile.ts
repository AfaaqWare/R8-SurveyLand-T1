import apiClient from "@/services/ApiClient";
import { UserDetails } from "../types/RoleType";

export async function GetProfile() {
  return apiClient.get<UserDetails>("/auth/profile");
}
