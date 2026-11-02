import SurveyDetails from "@/modules/surveys/components/organisms/SurveyDetails";
import type { UpdateProps } from "@/modules/dashboard/types/UpdateSurveyType";

export default async function SurveyDetailsPage({ params }: UpdateProps) {
  const { id } = await params;
  return <SurveyDetails id={id} />;
}
