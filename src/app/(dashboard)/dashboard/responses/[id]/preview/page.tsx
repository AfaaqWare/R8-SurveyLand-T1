import PreviewResponse from "@/modules/dashboard/PreviewResponse/components/organisms/PreviewResponse";
import { UpdateProps } from "@/modules/dashboard/types/UpdateSurveyType";

const page = async ({ params }: UpdateProps) => {
  const { id } = await params;
  return <PreviewResponse id={id} />;
};

export default page;
