
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Eye, EyeOff, Loader, Lock } from "@/assets/icons/icons";

import Button from "@/shared/components/atoms/Button";
import Input from "@/shared/components/atoms/Input";
import Icon from "@/shared/components/atoms/Icon";
import Heading from "@/shared/components/atoms/Heading";
import Text from "@/shared/components/atoms/Text";

import useCreateNewPassword from "@/modules/auth/hooks/useCreateNewPassword";

const CreateNewPassword = () => {
  const t = useTranslations("createNewPassword");

  const {
    register,
    errors,
    onSubmit,
    isSubmitting,
  } = useCreateNewPassword();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="ds-container create-survey-form fixed inset-0 m-auto h-fit w-124 max-w-full items-center px-0 py-4"
    >
      <header className="mb-6 text-center">
        <Heading as="h1" size="lg" align="center">
          {t("title")}
        </Heading>

        <Text size="sm" variant="secondary">
          {t("description")}
        </Text>
      </header>

      <div className="create-survey-field mx-auto w-full max-w-98.75 gap-3">
        <Input
          type={showPassword ? "text" : "password"}
          size="lg"
          placeholder={t("passwordPlaceholder")}
          aria-label={t("password")}
          autoComplete="new-password"
          leftIcon={<Lock />}
          rightAddon={
            <Button
              type="button"
              variant="ghost"
              onClick={() => setShowPassword((previous) => !previous)}
              aria-label={
                showPassword ? t("hidePassword") : t("showPassword")
              }
              aria-pressed={showPassword}
            >
              <Icon
                IconComponent={showPassword ? EyeOff : Eye}
                size={18}
                variant="secondary"
              />
            </Button>
          }
          errorMessage={
            errors.password?.message
              ? t(errors.password.message)
              : undefined
          }
          {...register("password")}
          state={errors.password ? "error" : "default"}
          className="ds-bg-form w-full border-0!"
        />

        <Input
          type={showConfirmPassword ? "text" : "password"}
          size="lg"
          placeholder={t("confirmPasswordPlaceholder")}
          aria-label={t("confirmPassword")}
          autoComplete="new-password"
          leftIcon={<Lock />}
          rightAddon={
            <Button
              type="button"
              variant="ghost"
              onClick={() =>
                setShowConfirmPassword((previous) => !previous)
              }
              aria-label={
                showConfirmPassword
                  ? t("hideConfirmPassword")
                  : t("showConfirmPassword")
              }
              aria-pressed={showConfirmPassword}
            >
              <Icon
                IconComponent={showConfirmPassword ? EyeOff : Eye}
                size={18}
                variant="secondary"
              />
            </Button>
          }
          errorMessage={
            errors.confirmPassword?.message
              ? t(errors.confirmPassword.message)
              : undefined
          }
          {...register("confirmPassword")}
          state={errors.confirmPassword ? "error" : "default"}
          className="ds-bg-form w-full border-0!"
        />

        <Text size="xs" variant="gray">
          {t("passwordRequirements")}
        </Text>

        <Button
          type="submit"
          variant="primary"
          size="form"
          disabled={isSubmitting}
          className="w-full! md:w-full!"
        >
          {isSubmitting && (
            <Icon
              IconComponent={Loader}
              size={20}
              variant="white"
              className="animate-spin"
            />
          )}

          {isSubmitting
            ? t("resettingPassword")
            : t("resetPassword")}
        </Button>
      </div>
    </form>
  );
};

export default CreateNewPassword;
