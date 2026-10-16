"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import {
  forgetPasswordSchema,
  ForgetPasswordValues,
} from "@/modules/auth/schema/ForgetPasswordSchema";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { forgetPasswordApi } from "../api/forgetPasswordApi";
import { OtpService } from "@/services/OtpService";
import { isAxiosError } from "axios";
import { ApiErrorResponse } from "@/shared/types/api-error-response";
import type{ ForgotPasswordResponse } from "../forget-password/types/ForgetPassword";

const useForgetPassword = () => {
  const t = useTranslations("forgotPassword");
  const router = useRouter();
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: { email: "" },
  });

  const { mutate, isPending } = useApiMutation<string, ForgotPasswordResponse>({
    mutationFn: forgetPasswordApi,
    options: {
      onSuccess: (response, email) => {
        OtpService.setEmail(email);
        if (response.data.otp) {
          OtpService.setOtp(response.data.otp);
        }
        showAlert("success", t("success"));
        router.push("/verify-otp");
      },
      onError: error => {
        const errormessage = isAxiosError<ApiErrorResponse>(error)
          ? error.response?.data.message
          : error.message;
        showAlert("error", errormessage || t("somethingWrong"));
      },
    },
  });
  
  const onSubmit = handleSubmit(data => mutate(data.email));
  return { register, errors, onSubmit, isSubmitting: isPending };
};

export default useForgetPassword;
