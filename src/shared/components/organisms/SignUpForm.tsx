"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { FcGoogle, FaGithub, User, Mail, Lock, Eye, EyeOff } from "@/assets/icons/icons";

import Input from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import SocialButton from "@/shared/components/molecules/SocialButton";
import { useTranslations } from "next-intl";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

export default function SignUpForm() {
  const t = useTranslations("signup");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 const {
    register,
    handleSubmit,
    watch,
  } = useForm<SignUpFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  });

  const passwordValue = watch("password");
  const confirmPasswordValue = watch("confirmPassword");
  const agreeTermsValue = watch("agreeTerms");

  const onSubmit = async (data: SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      return;
    }

    if (!data.agreeTerms) {
      return;
    }
    // Replace with your registration API integration.
    try {
      const response = await fetch("https://server-node-3r5n.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

     const result = await response.json();

      if (response.ok) {
        console.log("Registration successful:", result);
        alert("Account created successfully!");
      } else {
        console.error("Registration error:", result);
        alert(result.message || "An error occurred during registration");
      }
    } catch (error) {
      console.error("Server connection problem:", error);
      alert("Unable to connect to the server, please check your internet connection.");
    }
  };

  return (
    <main className="ds-bg ds-text-primary ds-font-sans flex min-h-screen w-full flex-col transition-colors duration-300 lg:flex-row">
      {/* Welcome section */}
      <section className="ds-bg-primary ds-text-white relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:min-h-screen lg:w-5/12 lg:p-12"></section>

      {/* Sign up section */}
      <section className="ds-bg-card flex min-w-0 flex-1 flex-col justify-between p-5 transition-colors duration-300 sm:p-8 lg:w-7/12 lg:p-12">
        {/* Existing account link */}
        <div className="flex flex-wrap items-center justify-end gap-2 text-sm">
          <span className="ds-text-secondary">{t("haveAccount")}</span>

          <Link href="/login" className="ds-text-alt font-bold transition-opacity hover:opacity-75">
            {t("logIn")}
          </Link>
        </div>

        <div className="mx-auto my-auto w-full max-w-md py-8">
          <Title className="ds-title-lg mb-2 text-center">{t("title")}</Title>

          {/* Social sign up */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <SocialButton label={t("googleSignup")} icon={<FcGoogle className="h-5 w-5" />} />
            <SocialButton
              label={t("githubSignup")}
              icon={<FaGithub className="ds-text-primary! h-5 w-5" />}
            />
          </div>

          {/* Divider */}
          <div className="relative mb-6 flex items-center py-2">
            <div className="ds-border-color grow border-t" />

            <Text className="ds-text-xs ds-text-secondary mx-4 shrink text-center">
              {t("orRegister")}
            </Text>

            <div className="ds-border-color grow border-t" />
          </div>

          {/* Registration form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full name */}
            <Input
              type="text"
              placeholder={t("nameRequired")}
              aria-label={t("nameRequired")}
              {...register("name", { required: true })}
              autoComplete="name"
              size="lg"
              leftIcon={<User className="h-5 w-5" />}
            />

            {/* Email */}
            <Input
              type="email"
              placeholder={t("emailRequired")}
              aria-label={t("emailRequired")}
              {...register("email", { required: true })}
              autoComplete="email"
              size="lg"
              leftIcon={<Mail className="h-5 w-5" />}
            />

            {/* Password */}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={t("passwordRequired")}
              aria-label={t("passwordRequired")}
              {...register("password", { required: true })}
              autoComplete="new-password"
              size="lg"
              leftIcon={<Lock className="h-5 w-5" />}
              rightAddon={
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="ds-text-secondary hover:!bg-transparent! flex items-center bg-transparent! shadow-none! transition-opacity hover:opacity-70"
                  aria-label={showPassword ? t("hidePassword") : t("showPassword")}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              }
            />

            {/* Confirm password */}
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder={t("confirmPasswordRequired")}
              aria-label={t("confirmPasswordRequired")}
              {...register("confirmPassword", { required: true })}
              autoComplete="new-password"
              size="lg"
              leftIcon={<Lock className="h-5 w-5" />}
              rightAddon={
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowConfirmPassword(prev => !prev)}
                  className="ds-text-secondary hover:!bg-transparent! flex items-center bg-transparent! shadow-none! transition-opacity hover:opacity-70"
                  aria-label={showConfirmPassword ? t("hidePassword") : t("showPassword")}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              }
            />

            {/* Password mismatch */}
            {confirmPasswordValue.length > 0 &&
              passwordValue !== confirmPasswordValue && (
                <p className="ds-text-error text-xs leading-5" role="alert">
                  {t("errors.passwordMismatch")}
                </p>
              )}

            {/* Terms and conditions */}
            <div className="flex items-start gap-2 py-1">
              <input
                type="checkbox"
                id="agreeTerms"
                {...register("agreeTerms", { required: true })}
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

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isFullWidth
              isRounded
              className="ds-font-bold mt-2"
              disabled={
                !agreeTermsValue ||
                passwordValue.length === 0 ||
                passwordValue !== confirmPasswordValue
              }
            >
              {t("submit")}
            </Button>
          </form>
        </div>

        <div aria-hidden="true" />
      </section>
    </main>
  );
}