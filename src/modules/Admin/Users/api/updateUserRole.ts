import apiClient from "@/services/ApiClient";

export interface UpdateUserRolePayload {
  id: string;
  role: string;
}

// TODO: confirm endpoint and HTTP method with the backend.
// Note: apiClient.patch always sends multipart/form-data, so use put/post
// if the backend expects JSON.
export const updateUserRole = ({ id, role }: UpdateUserRolePayload) =>
  apiClient.put<unknown>(`/users/${id}/role`, { role });