import CreateSurveyForm from "@/modules/Admin/components/organisms/CreateSurveyForm";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "createSurvey",
    titleKey: "title",
    noIndex: true,
  });
}
export default function Page() {
  return <CreateSurveyForm />;
}
