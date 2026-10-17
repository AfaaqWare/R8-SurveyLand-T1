import apiClient from "@/services/ApiClient";
import { ForgotPasswordResponse } from "../forget-password/types/ForgetPassword";

export async function forgetPasswordApi(email: string): Promise<ForgotPasswordResponse> {
  return apiClient.post<ForgotPasswordResponse>("/auth/forgot-password", { email });
}
