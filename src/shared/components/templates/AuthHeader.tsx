"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Logo from "@/shared/components/atoms/Logo";
import Button from "@/shared/components/atoms/Button";
import { ThemeToggle } from "@/shared/components/atoms/ThemeButton";
import { authSheetRoutes } from "@/shared/utils/routes";
import { TokenService } from "@/services/tokenService";

interface Props {
  showCta?: boolean;
}

export default function AuthHeader({ showCta = true }: Props) {
  const pathname = usePathname();
  const t = useTranslations("auth.header");
  const route = authSheetRoutes.find((route) => route.path === pathname);
  const isSignUp = route?.i18nKey === "signUp";
  const ctaHref = isSignUp
    ? authSheetRoutes.find((route) => route.i18nKey === "signIn")?.path
    : authSheetRoutes.find((route) => route.i18nKey === "signUp")?.path;
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setHasToken(Boolean(TokenService.getToken()));
  }, []);

  return (
    <header className="ds-bg-alt h-20 w-full shrink-0 border-b border-[var(--border-color-card)]">
      <div className="ds-container flex h-full items-center justify-between">
        <Logo />
        {hasToken ? (
          <div className="flex items-center gap-4">
            <Link href="/" className="ds-text-alt font-bold">
              {t("home")}
            </Link>
            <ThemeToggle />
          </div>
        ) : (
          <>
            {showCta && ctaHref && (
              <div className="flex items-center gap-4">
                <p className="ds-text-sm hidden md:block ds-text-secondary">
                  {t(isSignUp ? "signUp.prefix" : "signIn.prefix")}{" "}
                  <Link href={ctaHref} className="ds-text-alt font-bold">
                    {t(isSignUp ? "signUp.apply" : "signIn.apply")}
                  </Link>
                </p>
                <ThemeToggle />
              </div>
            )}
            {!route && (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/sign-in" className="ds-text-primary font-medium ds-text-base hover:opacity-80 transition-opacity">
                  {t("loginBtn")}
                </Link>
                <Link href="/sign-up">
                  <Button size="md">{t("signUpBtn")}</Button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}

