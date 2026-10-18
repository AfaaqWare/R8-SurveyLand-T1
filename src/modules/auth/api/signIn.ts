import apiClient from "@/services/ApiClient";

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

export const signInApi = (payload: SignInPayload) =>
  apiClient.post<SignInResponse>("/auth/login", payload);
