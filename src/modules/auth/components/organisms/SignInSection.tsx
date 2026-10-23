"use client";

import { useState, type SubmitEvent } from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import Checkbox from "@/shared/components/atoms/Checkbox";
import Link from "@/shared/components/atoms/Link";
import IconInput from "@/shared/components/molecules/IconInput";
import { Eye, EyeOff, FaGithub, FcGoogle, Lock, Mail } from "@/assets/icons/icons";
import { useSignIn } from "@/modules/auth/hooks/useSignIn";
import { useTranslations } from "next-intl";

export default function SignInSection() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending, errorMessage, clearError } = useSignIn();
  const t = useTranslations("publicPages.sign-in");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    clearError();
    const formData = new FormData(event.currentTarget);

    mutate({
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    });
  }

  return (
    <section className="ds-bg ds-px-md ds-py-lg flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-center gap-8">
        {errorMessage && (
          <div
            role="alert"
            className="flex w-full items-center justify-between gap-3 rounded-md bg-red-100 px-4 py-3 text-sm text-red-800"
          >
            <p>{errorMessage}</p>
            <button
              type="button"
              aria-label={t("dismiss-error")}
              onClick={clearError}
              className="shrink-0 cursor-pointer text-base leading-none"
            >
              ×
            </button>
          </div>
        )}
        <Title
          size="xl"
          variant="alt"
          isCenter
          className="ds-font-heading font-bold tracking-wide uppercase"
        >
          {t("title")}
        </Title>

        <div className="flex items-center gap-6">
          <Button
            type="button"
            variant="ghost"
            isRounded
            aria-label={t("google")}
            className="size-14 bg-white p-0 shadow-sm"
          >
            <FcGoogle width={28} height={28} />
          </Button>
          <Button
            type="button"
            variant="ghost"
            isRounded
            aria-label={t("github")}
            className="size-14 bg-white p-0 shadow-sm"
          >
            <FaGithub width={28} height={28} />
          </Button>
        </div>

        <Text variant="secondary" size="sm" isCenter>
          {t("email-hint")}
        </Text>

        <div className="flex w-full flex-col gap-4">
          <IconInput
            type="email"
            name="email"
            placeholder={t("email")}
            icon={<Icon IconComponent={Mail} size="sm" variant="disabled" />}
          />
          <IconInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={t("password")}
            icon={<Icon IconComponent={Lock} size="sm" variant="disabled" />}
            trailingAction={
              <button
                type="button"
                aria-label={showPassword ? t("hide-password") : t("show-password")}
                onClick={() => setShowPassword(current => !current)}
                className="cursor-pointer"
              >
                <Icon IconComponent={showPassword ? Eye : EyeOff} size="sm" variant="disabled" />
              </button>
            }
          />

          <div className="flex items-center justify-between gap-4">
            <Checkbox label={t("remember")} />
            <Link href="/forget-password" variant="alt" className="pb-0 text-sm no-underline">
              {t("forget-password")}
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          variant="primary"
          isRounded
          size="lg"
          className="px-16 uppercase"
        >
          {t("submit")}
        </Button>
      </form>
    </section>
  );
}
