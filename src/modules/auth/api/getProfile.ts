import apiClient from "@/services/ApiClient";

export interface ProfileResponse {
  id: string;
  email: string;
  name: string;
  role: string;
  provider: string;
  image: string | null;
}

export async function getProfileApi(): Promise<ProfileResponse> {
  return apiClient.get<ProfileResponse>("/auth/profile");
}
