"use client";

import { type ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import AuthLayout from "@/shared/components/templates/AuthLayout";
import { authSheetRoutes } from "@/shared/utils/routes";
import { TokenService } from "@/services/tokenService";

export default function AuthGroupLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!TokenService.getToken()) return;
    const resetFlowActive =
      sessionStorage.getItem("resetFlow") === "reset" &&
      Boolean(sessionStorage.getItem("resetEmail"));
    const flowRoutes = ["/otp-verify", "/reset-password", "/done"];
    if (
      pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      (flowRoutes.includes(pathname) && !resetFlowActive)
    ) {
      router.replace("/");
    }
  }, [router, pathname]);

  // Put the translations for your task's strings in src/messages/en.json and src/messages/ar.json.
  const t = useTranslations("auth.sheets");
  const route = authSheetRoutes.find((route) => route.path === pathname);
  const sheet =
    route?.i18nKey && route?.ctaPath
      ? {
          title: t(`${route.i18nKey}.title`),
          subtitle: t(`${route.i18nKey}.subtitle`),
          ctaLabel: t(`${route.i18nKey}.cta`),
          ctaHref: route.ctaPath,
        }
      : undefined;

  return (
    <AuthLayout
      sheetFirst={route?.sheetFirst}
      sheet={sheet}
      showHeaderCta={Boolean(route?.i18nKey)}
    >
      {children}
    </AuthLayout>
  );
}
