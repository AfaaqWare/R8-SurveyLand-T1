"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import Button from "@/shared/components/atoms/Button";
import { TokenService } from "@/services/tokenService";

export default function CreateSurveyButton() {
  const router = useRouter();
  const t = useTranslations("publicPages.about.hero");

  const handleClick = () => {
    router.push(TokenService.hasToken() ? "/dashboard/create-survey" : "/sign-in");
  };

  return (
    <Button variant="outline" size="md" isRounded onClick={handleClick}>
      {t("create")}
    </Button>
  );
}
