"use client";

import { useTranslations } from "next-intl";
import { authSheetRoutes } from "@/shared/utils/routes";
import AuthLayout from "@/shared/components/templates/AuthLayout";
import SignInSection from "@/shared/components/organisms/SignInSection";

export default function SignInPage() {
  const t = useTranslations("auth.sheets");
  const route = authSheetRoutes.find((r) => r.path === "/sign-in");
  const sheet =
    route?.i18nKey && route.ctaPath
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
      <SignInSection />
    </AuthLayout>
  );
}
