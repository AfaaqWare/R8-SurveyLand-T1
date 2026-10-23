"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TokenService } from "@/services/tokenService";
import { getApiErrorMessage } from "@/modules/auth/verify-otp/utils/getApiErrorMessage";
import { useOtpStore } from "@/modules/auth/verify-otp/store/otpStore";
import { signInApi, type SignInPayload, type SignInResponse } from "../api/signIn";
import { getUsersApi } from "../api/getUsers";

function isUnverifiedEmailError(error: unknown) {
  if (!isAxiosError(error)) return false;

  const data = error.response?.data;
  if (!data || typeof data !== "object") return false;

  const record = data as Record<string, unknown>;
  if (record.isEmailVerified === false) return true;

  const nested = record.user ?? record.data;
  if (nested && typeof nested === "object" && !Array.isArray(nested)) {
    if ((nested as Record<string, unknown>).isEmailVerified === false) return true;
  }

  const rawMessage = record.message ?? record.error;
  const message = Array.isArray(rawMessage)
    ? rawMessage.filter(item => typeof item === "string").join(" ")
    : typeof rawMessage === "string"
      ? rawMessage
      : "";

  if (/verif|otp|غير مفع|لم يتم التحقق|تفعيل|التحقق من/i.test(message)) return true;

  return error.response?.status === 403 && !/lock|disabled|inactive|محظور|معطل/i.test(message);
}

export function useSignIn() {
  const router = useRouter();
  const t = useTranslations("ui-state.error");
  const [errorMessage, setErrorMessage] = useState("");

  const goToVerifyOtp = (email: string) => {
    useOtpStore.getState().setEmail(email);
    router.push("/verify-otp");
  };

  const mutation = useApiMutation<SignInPayload, SignInResponse>({
    mutationFn: signInApi,
    options: {
      onSuccess: async (data, { email }) => {
        setErrorMessage("");
        TokenService.setToken(data.accessToken);

        try {
          const users = await getUsersApi();
          const signedInEmail = email.trim().toLowerCase();
          const user = users.find(item => item.email?.trim().toLowerCase() === signedInEmail);

          if (user?.isEmailVerified === false) {
            goToVerifyOtp(user.email);
            return;
          }
        } catch {
          router.push("/");
          return;
        }

        router.push("/");
      },
      onError: (error, { email }) => {
        if (isUnverifiedEmailError(error)) {
          setErrorMessage("");
          goToVerifyOtp(email);
          return;
        }

        setErrorMessage(getApiErrorMessage(error, t("default")));
      },
    },
  });

  return {
    ...mutation,
    errorMessage,
    clearError: () => setErrorMessage(""),
  };
}
