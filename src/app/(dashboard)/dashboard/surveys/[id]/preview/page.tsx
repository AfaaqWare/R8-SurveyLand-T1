import Preview from "@/modules/dashboard/preview/components/organisms/Preview";
import { UpdateProps } from "@/modules/dashboard/types/UpdateSurveyType";

const page = async ({ params }: UpdateProps) => {
  const { id } = await params;
  return <Preview id={id} />;
};

export default page;
