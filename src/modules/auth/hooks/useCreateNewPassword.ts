
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { createNewPasswordSchema } from "@/modules/auth/schema/CreateNewPasswordSchema";
import { createNewPasswordApi } from "@/modules/auth/api/createNewPasswordApi";

import type {
  CreateNewPasswordFormValues,
  CreateNewPasswordRequest,
  CreateNewPasswordResponse,
} from "@/modules/auth/create-new-password/types/CreateNewPassword";

import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { getApiErrorMessage } from "@/shared/utils/getApiErrorMessage";
import { OtpService } from "@/services/OtpService";

const useCreateNewPassword = () => {
  const t = useTranslations("createNewPassword");
  const { showAlert } = useAlert();

  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewPasswordFormValues>({
    resolver: zodResolver(createNewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useApiMutation<
    CreateNewPasswordRequest,
    CreateNewPasswordResponse
  >({
    mutationFn: createNewPasswordApi,
    options: {
      onSuccess: () => {
        OtpService.clear();
        setIsSuccess(true);
      },

      onError: (error) => {
        showAlert(
          "error",
          getApiErrorMessage(error, t("errors.resetFailed"))
        );
      },
    },
  });

  const onSubmit = handleSubmit((data) => {
    const email = OtpService.getEmail();
    const otp = OtpService.getOtp();

    if (!email || !otp) {
      showAlert("error", t("errors.invalidResetToken"));
      return;
    }

    mutate({
      email,
      otp,
      newPassword: data.password,
    });
  });

  return {
    register,
    errors,
    onSubmit,
    isSubmitting: isPending,
    isSuccess,
  };
};

export default useCreateNewPassword;
