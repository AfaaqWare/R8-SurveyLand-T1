import { UpdateProps } from "@/modules/dashboard/types/UpdateSurveyType";
import UpdateSurvey from "@/modules/dashboard/UpdateSurvey/components/organisms/UpdateSurvey";

const page = async ({ params }: UpdateProps) => {
  const { id } = await params;
  return <UpdateSurvey id={id} />;
};

export default page;
