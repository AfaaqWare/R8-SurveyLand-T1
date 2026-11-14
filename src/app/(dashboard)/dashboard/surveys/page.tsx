import MySurveys from "@/modules/surveys/components/organisms/MySurveys";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "mySurveys",
    titleKey: "title",
    descriptionKey: "subtitle",
    noIndex: true,
  });
}
export default function SurveysPage() {
  return <MySurveys />;
}
