
import apiClient from "@/services/ApiClient";

import type {
  CreateNewPasswordRequest,
  CreateNewPasswordResponse,
} from "../create-new-password/types/CreateNewPassword";

export async function createNewPasswordApi(
  payload: CreateNewPasswordRequest
): Promise<CreateNewPasswordResponse> {
  return apiClient.post<CreateNewPasswordResponse>(
    "/auth/reset-password",
    payload
  );
}
