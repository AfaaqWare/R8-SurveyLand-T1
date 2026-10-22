"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { isAxiosError } from "axios";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { signUpApi, type SignUpPayload, type SignUpResponse } from "../api/signUp";

export function useSignUp() {
  const router = useRouter();
  const t = useTranslations("signup");
  const { showAlert } = useAlert();

  return useApiMutation<SignUpPayload, SignUpResponse>({
    mutationFn: signUpApi,
    options: {
      onSuccess: () => {
        showAlert("success", t("success")).then(() => router.push("/sign-in"));
      },
      onError: error => {
        let key = "errors.genericError";

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