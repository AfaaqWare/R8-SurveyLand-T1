"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import OtpInput from "../molecules/OtpInput";
import { useVerifyOtp } from "@/modules/auth/verify-otp/hooks/useVerifyOtp";
import { useResendOtp } from "@/modules/auth/verify-otp/hooks/useResendOtp";
import { useCountdown } from "@/modules/auth/verify-otp/hooks/useCountdown";
import { useOtpStore } from "@/modules/auth/verify-otp/store/otpStore";
import { getApiErrorMessage } from "@/modules/auth/verify-otp/utils/getApiErrorMessage";
import { otpSchema, type OtpFormValues } from "@/modules/auth/verify-otp/utils/otpSchema";

const OTP_SECONDS = 60;
const REGISTER_ROUTE = "/register";
const AFTER_VERIFY_ROUTE = "/";

export default function VerifyForm() {
  const t = useTranslations("otp");
  const router = useRouter();

  const email = useOtpStore(s => s.email);
  const clearEmail = useOtpStore(s => s.clear);

  const { seconds, isDone, restart } = useCountdown(OTP_SECONDS);
  const [serverError, setServerError] = useState("");
  const [resendMessage, setResendMessage] = useState("");

  const verify = useVerifyOtp();
  const resend = useResendOtp();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  // useEffect(() => {
  //   if (!useOtpStore.getState().email) router.replace(REGISTER_ROUTE);
  // }, [router]);

  const onSubmit = ({ otp }: OtpFormValues) => {
    setServerError("");
    setResendMessage("");
    verify.mutate(
      { email, otp },
      {
        onSuccess: () => {
          clearEmail();
          router.push(AFTER_VERIFY_ROUTE);
        },
        onError: err => setServerError(getApiErrorMessage(err, t("errors.verifyFailed"))),
      }
    );
  };

  const onResend = () => {
    setServerError("");
    setResendMessage("");
    resend.mutate(
      { email },
      {
        onSuccess: () => {
          restart();
          setResendMessage(t("resendSuccess"));
        },
        onError: err => setServerError(getApiErrorMessage(err, t("errors.resendFailed"))),
      }
    );
  };

  return (
    <section className="mx-auto flex w-full flex-col items-center gap-8 px-10 py-35 text-center">
      <header className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-semibold text-black sm:text-4xl dark:text-white">
          {t("title")}
        </h1>
        <p className="max-w-md text-xs text-gray-500 sm:text-sm dark:text-white/40">
          {t("description")}
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex w-full max-w-sm flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center gap-2">
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <OtpInput
                value={field.value}
                onChange={field.onChange}
                disabled={verify.isPending}
                hasError={!!errors.otp || !!serverError}
              />
            )}
          />
          {errors.otp && (
            <p role="alert" className="text-xs text-red-500">
              {t("errors.invalidOtp")}
            </p>
          )}
          {serverError && (
            <p role="alert" className="text-xs text-red-500">
              {serverError}
            </p>
          )}
          {resendMessage && <p className="text-xs text-green-600">{resendMessage}</p>}
        </div>

        <p className="text-[11px] text-gray-400">
          {isDone ? t("expired") : t("expire", { seconds })}
        </p>

        <div className="flex w-full flex-col gap-3">
          <button
            type="submit"
            disabled={verify.isPending}
            aria-busy={verify.isPending}
            className="h-10 w-full rounded-md bg-[#00a9b1] text-sm font-medium text-white transition hover:bg-[#008f96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a9b1] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {verify.isPending ? t("verifying") : t("verify")}
          </button>
          <button
            type="button"
            onClick={onResend}
            disabled={!isDone || resend.isPending}
            className="h-10 w-full rounded-md border border-[#00a9b1] bg-transparent text-sm font-medium text-[#00a9b1] transition hover:bg-[#00a9b1]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a9b1] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("resend")}
          </button>
        </div>
      </form>
    </section>
  );
}
