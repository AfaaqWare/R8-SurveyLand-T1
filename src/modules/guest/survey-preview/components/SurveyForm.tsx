import { useTranslations } from "next-intl";
import Surveyheader from "./Surveyheader";
import InfoCart from "./SurveyInfoCart";
import QuestionsCard from "./SurveyQuestion";
import { getMockQuestions } from "../data/Mockquestions";

export default function SurveyForm() {
  const t = useTranslations("surveyPreview.mock");

  return (
    <form className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <Surveyheader />
      <InfoCart />
      <QuestionsCard questions={getMockQuestions(t)} />
    </form>
  );
}