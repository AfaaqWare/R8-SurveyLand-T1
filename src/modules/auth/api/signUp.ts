import apiClient from "@/services/ApiClient";

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  message?: string;
}

export const signUpApi = (payload: SignUpPayload) =>
  apiClient.post<SignUpResponse>("/auth/register", payload);
