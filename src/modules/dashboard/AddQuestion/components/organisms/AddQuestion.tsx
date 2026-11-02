import AddQuestionForm from "../molcules/AddQuestionForm";
import { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";

const AddQuestion = ({ id }: IdProps) => {
  return (
    <div>
      <AddQuestionForm id={id} />
    </div>
  );
};

export default AddQuestion;
