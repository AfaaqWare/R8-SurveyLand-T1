import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { resendOtp } from "../api/resendOtp";
import type { OtpResponse, ResendOtpBody } from "../types/otpTypes";

export const useResendOtp = () =>
  useApiMutation<ResendOtpBody, OtpResponse>({ mutationFn: resendOtp });
