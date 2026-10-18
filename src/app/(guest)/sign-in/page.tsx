"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";

import { FcGoogle, FaGithub, Mail, Lock, Eye, EyeOff } from "@/assets/icons/icons";

import Input from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import SocialButton from "@/shared/components/molecules/SocialButton";

export default function SignInPage() {
  const t = useTranslations("signin");
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   try {
      console.log("Sign In Data:", formData);

      toast.success(t("successMessage"));

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } catch {
      toast.error(t("errorMessage"));
    }
  };

  return (
    <main className="ds-bg ds-text-primary ds-font-sans flex min-h-screen w-full flex-col transition-colors duration-300 lg:flex-row">
      {/* Toaster */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Welcome section */}
      <section className="ds-bg-primary ds-text-white relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 lg:min-h-screen lg:w-5/12 lg:p-12"></section>

      {/* Sign in section */}
      <section className="ds-bg-card flex min-w-0 flex-1 flex-col justify-between p-5 transition-colors duration-300 sm:p-8 lg:w-7/12 lg:p-12">
        {/* New account link */}
        <div className="flex flex-wrap items-center justify-end gap-2 text-sm">
          <span className="ds-text-secondary">{t("noAccount")}</span>

          <Link
            href="/signup"
            className="ds-text-alt font-bold transition-opacity hover:opacity-75"
          >
            {t("registerNow")}
          </Link>
        </div>

        <div className="mx-auto my-auto w-full max-w-md py-8">
          <Title className="ds-title-lg mb-2 text-center">{t("title")}</Title>

          <Text className="ds-text-sm ds-text-secondary mb-6 text-center">
            {t("welcomeDescription")}
          </Text>

          {/* Social sign in */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <SocialButton
              label={t("googleSignin")}
              icon={<FcGoogle className="h-5 w-5" />}
              onClick={() => {
                window.location.href = "https://your-backend-api.com/auth/google";
              }}
            />

            <SocialButton
              label={t("githubSignin")}
              icon={<FaGithub className="ds-text-primary h-5 w-5" />}
              onClick={() => {
                window.location.href = "https://your-backend-api.com/auth/github";
              }}
            />
          </div>

          {/* Divider */}
          <div className="relative mb-6 flex items-center py-2">
            <div className="ds-border-color grow border-t" />

            <Text className="ds-text-xs ds-text-secondary mx-4 shrink text-center">
              {t("orLogin")}
            </Text>

            <div className="ds-border-color grow border-t" />
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <Input
              type="email"
              name="email"
              placeholder={t("email")}
              aria-label={t("email")}
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              size="lg"
              leftIcon={<Mail className="h-5 w-5" />}
            />

            {/* Password */}
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("password")}
              aria-label={t("password")}
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
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

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="accent-var(--color-primary) h-4 w-4 shrink-0 cursor-pointer"
                />
                <label htmlFor="rememberMe" className="ds-text-xs ds-text-secondary cursor-pointer">
                  {t("rememberMe")}
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="ds-text-xs ds-text-alt font-semibold transition-opacity hover:opacity-75"
              >
                {t("forgotPassword")}
              </Link>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isFullWidth
              isRounded
              className="ds-font-bold mt-2"
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