import apiClient from "@/services/ApiClient";

// TODO: confirm the endpoint with the backend.
export const deleteUser = (id: string) => apiClient.delete<unknown>(`/users/${id}`);