"use client";

import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { TokenService } from "@/services/tokenService";
import { getApiErrorMessage } from "@/modules/auth/verify-otp/utils/getApiErrorMessage";
import { useOtpStore } from "@/modules/auth/verify-otp/store/otpStore";
import { signInApi, type SignInPayload, type SignInResponse } from "../api/signIn";
import { getUsersApi } from "../api/getUsers";
import { signInSchema, type SignInValues } from "../schema/signInSchema";

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
  const t = useTranslations("publicPages.sign-in");
  const tError = useTranslations("ui-state.error");
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const goToVerifyOtp = (email: string) => {
    useOtpStore.getState().setEmail(email);
    router.push("/verify-otp");
  };

  const { mutate, isPending } = useApiMutation<SignInPayload, SignInResponse>({
    mutationFn: signInApi,
    options: {
      onSuccess: async (data, { email }) => {
        clearErrors("root");
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

        await showAlert("success", t("success"));
        router.push("/");
      },
      onError: (error, { email }) => {
        if (isUnverifiedEmailError(error)) {
          clearErrors("root");
          goToVerifyOtp(email);
          return;
        }

        const message = getApiErrorMessage(error, tError("default"));
        setError("root", { message });
        showAlert("error", message);
      },
    },
  });

  const onSubmit = handleSubmit(values => {
    clearErrors("root");
    mutate(values);
  });

  return { register, errors, onSubmit, isPending };
}
