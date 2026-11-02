import Surveyform from "../molecules/Surveyform";
import { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";

const UpdateSurvey = ({ id }: IdProps) => {
  return (
    <div>
      <Surveyform id={id} />
    </div>
  );
};

export default UpdateSurvey;
