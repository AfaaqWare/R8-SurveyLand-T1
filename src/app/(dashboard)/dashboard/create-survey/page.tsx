import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import CreateSurveyForm from "@/modules/Admin/components/organisms/CreateSurveyForm";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "createSurvey" });

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`,
    noIndex: true,
  });
}
export default function Page() {
  return <CreateSurveyForm />;
}
