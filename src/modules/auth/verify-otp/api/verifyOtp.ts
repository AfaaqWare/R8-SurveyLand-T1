import apiClient from "@/services/ApiClient";
import { OtpResponse, VerifyOtpBody } from "../types/otpTypes";

export const verifyOtp  = (body:VerifyOtpBody) => apiClient.post<OtpResponse>("/auth/register/verify" , body);