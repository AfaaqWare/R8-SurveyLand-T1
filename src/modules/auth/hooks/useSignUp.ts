"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { isAxiosError } from "axios";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { useOtpStore } from "@/modules/auth/verify-otp/store/otpStore";
import { signUpApi, type SignUpPayload, type SignUpResponse } from "../api/signUp";

export function useSignUp() {
  const router = useRouter();
  const t = useTranslations("signup");
  const { showAlert } = useAlert();
  const setEmail = useOtpStore(s => s.setEmail);

  return useApiMutation<SignUpPayload, SignUpResponse>({
    mutationFn: signUpApi,
    options: {
      onSuccess: (_data, variables) => {
        setEmail(variables.email);
        router.push("/verify-otp");
      },
      onError: error => {
        let key:
          | "errors.genericError"
          | "errors.networkError"
          | "errors.emailExists"
          | "errors.tooManyRequests" = "errors.genericError";

        if (isAxiosError(error)) {
          if (!error.response) key = "errors.networkError";
          else if (error.response.status === 409) key = "errors.emailExists";
          else if (error.response.status === 429) key = "errors.tooManyRequests";
        }

        showAlert("error", t(key));
      },
    },
  });
}
