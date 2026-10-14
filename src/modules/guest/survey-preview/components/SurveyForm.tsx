import Surveyheader from "./Surveyheader";
import InfoCart from "./SurveyInfoCart";
import QuestionsCard from "./SurveyQuestion";
import { mockQuestions } from "../data/Mockquestions";

export default function SurveyForm() {
  return (
    <form className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <Surveyheader />
      <InfoCart />
      <QuestionsCard questions={mockQuestions} />
    </form>
  );
}
