import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { verifyOtp } from "../api/verifyOtp";
import type { OtpResponse, VerifyOtpBody } from "../types/otpTypes";

export const useVerifyOtp = () =>
  useApiMutation<VerifyOtpBody, OtpResponse>({ mutationFn: verifyOtp });
