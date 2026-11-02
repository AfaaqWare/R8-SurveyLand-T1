import apiClient from "@/services/ApiClient";

export interface AuthUser {
  email: string;
  isEmailVerified: boolean;
}

export async function getUsersApi(): Promise<AuthUser[]> {
  const payload = await apiClient.get<unknown>("/auth/users");

  if (Array.isArray(payload)) return payload as AuthUser[];

  if (payload && typeof payload === "object" && Array.isArray((payload as { data?: unknown }).data)) {
    return (payload as { data: AuthUser[] }).data;
  }

  return [];
}
