"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, type RegisterOptions } from "react-hook-form";
import { useTranslations } from "next-intl";

import { FcGoogle, FaGithub, User, Mail, Lock, Eye, EyeOff } from "@/assets/icons/icons";
import Input from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import SocialButton from "@/shared/components/molecules/SocialButton";
import { useSignUp } from "@/modules/auth/hooks/useSignUp";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="ds-text-error -mt-2 text-xs leading-5" role="alert">
      {message}
    </p>
  );
}

export default function SignUpForm() {
  const t = useTranslations("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate, isPending } = useSignUp();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: "onChange",
    defaultValues: { name: "", email: "", password: "", confirmPassword: "", agreeTerms: false },
  });

  const onSubmit = ({ name, email, password }: SignUpFormData) => {
    mutate({ name, email, password });
  };

  const rules: { [K in keyof SignUpFormData]: RegisterOptions<SignUpFormData, K> } = {
    name: {
      required: t("errors.nameMin"),
      minLength: { value: 2, message: t("errors.nameMin") },
      maxLength: { value: 60, message: t("errors.nameMax") },
    },
    email: {
      required: t("errors.emailRequired"),
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("errors.emailInvalid") },
    },
    password: {
      required: t("errors.passwordMin"),
      minLength: { value: 8, message: t("errors.passwordMin") },
      maxLength: { value: 72, message: t("errors.passwordMax") },
      validate: {
        lower: (v: string) => /[a-z]/.test(v) || t("errors.passwordLower"),
        upper: (v: string) => /[A-Z]/.test(v) || t("errors.passwordUpper"),
        number: (v: string) => /\d/.test(v) || t("errors.passwordNumber"),
      },
    },
    confirmPassword: {
      required: t("errors.confirmRequired"),
      deps: "password",
      validate: (v: string) => v === getValues("password") || t("errors.passwordMismatch"),
    },
    agreeTerms: { required: t("errors.termsRequired") },
  };

  return (
    <section className="ds-bg flex w-full flex-1 items-center justify-center px-4 py-8 sm:px-8 lg:px-12">
      <div className="flex w-full max-w-md flex-col gap-6">
        <div className="flex flex-wrap items-center justify-end gap-2 text-sm">
          <span className="ds-text-secondary">{t("haveAccount")}</span>
          <Link
            href="/sign-in"
            className="ds-text-alt font-bold transition-opacity hover:opacity-75"
          >
            {t("logIn")}
          </Link>
        </div>

        <Title size="xl" variant="alt" isCenter className="ds-font-heading font-bold">
          {t("title")}
        </Title>

        <div className="flex items-center justify-center gap-4">
          <SocialButton label={t("googleSignup")} icon={<FcGoogle className="h-5 w-5" />} />
          <SocialButton label={t("githubSignup")} icon={<FaGithub className="h-5 w-5" />} />
        </div>

        <div className="flex items-center">
          <div className="ds-border-color grow border-t" />
          <Text className="ds-text-xs ds-text-secondary mx-4 shrink-0 text-center">
            {t("orRegister")}
          </Text>
          <div className="ds-border-color grow border-t" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, errors => {
            console.log("Validation errors:", errors);
          })}
          noValidate
          className="flex flex-col gap-4"
        >
          <Input
            type="text"
            placeholder={t("nameRequired")}
            aria-label={t("nameRequired")}
            aria-invalid={!!errors.name}
            {...register("name", rules.name)}
            autoComplete="name"
            size="lg"
            leftIcon={<User className="h-5 w-5" />}
          />
          <FieldError message={errors.name?.message} />

          <Input
            type="email"
            placeholder={t("emailRequired")}
            aria-label={t("emailRequired")}
            aria-invalid={!!errors.email}
            {...register("email", rules.email)}
            autoComplete="email"
            size="lg"
            leftIcon={<Mail className="h-5 w-5" />}
          />
          <FieldError message={errors.email?.message} />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder={t("passwordRequired")}
            aria-label={t("passwordRequired")}
            aria-invalid={!!errors.password}
            {...register("password", rules.password)}
            autoComplete="new-password"
            size="lg"
            leftIcon={<Lock className="h-5 w-5" />}
            rightAddon={
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowPassword(prev => !prev)}
                className="ds-text-secondary flex items-center bg-transparent! shadow-none! transition-opacity hover:bg-transparent! hover:opacity-70"
                aria-label={showPassword ? t("hidePassword") : t("showPassword")}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            }
          />
          <FieldError message={errors.password?.message} />

          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder={t("confirmPasswordRequired")}
            aria-label={t("confirmPasswordRequired")}
            aria-invalid={!!errors.confirmPassword}
            {...register("confirmPassword", rules.confirmPassword)}
            autoComplete="new-password"
            size="lg"
            leftIcon={<Lock className="h-5 w-5" />}
            rightAddon={
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShowConfirmPassword(prev => !prev)}
                className="ds-text-secondary flex items-center bg-transparent! shadow-none! transition-opacity hover:bg-transparent! hover:opacity-70"
                aria-label={showConfirmPassword ? t("hidePassword") : t("showPassword")}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            }
          />
          <FieldError message={errors.confirmPassword?.message} />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agreeTerms"
              {...register("agreeTerms", rules.agreeTerms)}
              className="accent-var(--color-primary) mt-1 h-4 w-4 shrink-0 cursor-pointer"
            />
            <label
              htmlFor="agreeTerms"
              className="ds-text-xs ds-text-secondary cursor-pointer leading-6"
            >
              {t("agreeWith")}{" "}
              <Link
                href="/terms"
                className="ds-text-alt font-semibold transition-opacity hover:opacity-75"
              >
                {t("terms")}
              </Link>
            </label>
          </div>
          <FieldError message={errors.agreeTerms?.message} />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isFullWidth
            isRounded
            className="ds-font-bold"
            disabled={isPending}
          >
            {isPending ? t("submitting") : t("submit")}
          </Button>
        </form>
      </div>
    </section>
  );
}
