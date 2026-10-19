import apiClient from "@/services/ApiClient";
import { OtpResponse, ResendOtpBody } from "../types/otpTypes";

export const resendOtp = (body:ResendOtpBody) => apiClient.post<OtpResponse>("/auth/otp/resend" , body)