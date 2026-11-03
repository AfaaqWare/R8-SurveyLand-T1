import ExportResponses from "@/modules/dashboard/ExportResponses/components/organisms/ExportResponses";
import { UpdateProps } from "@/modules/dashboard/types/UpdateSurveyType";

const page = async ({ params }: UpdateProps) => {
  const { id } = await params;
  return <ExportResponses id={id} />;
};

export default page;
