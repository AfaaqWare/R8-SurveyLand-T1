import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import MySurveys from "@/modules/surveys/components/organisms/MySurveys";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "surveys" });

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`,
    noIndex: true,
  });
}
export default function SurveysPage() {
  return <MySurveys />;
}
