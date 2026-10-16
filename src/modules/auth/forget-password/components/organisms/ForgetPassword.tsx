"use client";
import React from "react";
import ForgetPasswordTitle from "../molecules/ForgetPasswordTitle";
import { useTranslations } from "next-intl";
import { Mail, Loader } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import Input from "@/shared/components/atoms/Input";
import SignInLink from "../molecules/SignInLink";
import useForgetPassword from "@/modules/auth/hooks/useForgetPassword";
import Icon from "@/shared/components/atoms/Icon";

const ForgetPassword = () => {
  const t = useTranslations("forgotPassword");
  const { register, errors, onSubmit, isSubmitting } = useForgetPassword();

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="ds-container create-survey-form fixed inset-0 m-auto h-fit w-124 max-w-full items-center px-0 py-4"
    >
      <ForgetPasswordTitle />

      <div className="create-survey-field w-full max-w-98.75 gap-3">
        <Input
          type="email"
          size="lg"
          placeholder={t("emailPlaceholder")}
          aria-label={t("emailPlaceholder")}
          leftIcon={<Mail />}
          errorMessage={errors.email?.message && t(errors.email.message)}
          {...register("email")}
          state={errors.email ? "error" : "default"}
          className="ds-bg-form w-full border-0!"
        />

        <Button
          type="submit"
          variant="primary"
          size="form"
          disabled={isSubmitting}
          className="w-full! md:w-full!"
        >
          {isSubmitting && (
            <Icon IconComponent={Loader} size={20} variant="white" className="animate-spin" />
          )}

          {t("submit")}
        </Button>

        <SignInLink text={t("backToSignIn")} href="/sign-in" />
      </div>
    </form>
  );
};

export default ForgetPassword;
