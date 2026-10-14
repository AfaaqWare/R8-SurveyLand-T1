import Surveyheader from "./Surveyheader";
import InfoCart from "./InfoCart";
import QuestionsCard from "./SurveyQuestion";
import { mockQuestions } from "./Mockquestions";

export default function SurveyForm() {
  return (
    <form className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <Surveyheader />
      <InfoCart />
      <QuestionsCard questions={mockQuestions} />
    </form>
  );
}