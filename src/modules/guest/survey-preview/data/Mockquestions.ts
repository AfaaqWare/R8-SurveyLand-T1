import type { useTranslations } from "next-intl";
import type { Question } from "../components/SurveyQuestion";

type Translate = ReturnType<typeof useTranslations>;

export const getMockQuestions = (t: Translate): Question[] => [
  {
    id: "q1",
    type: "radio",
    label: t("q1"),
    options: [t("q1o1"), t("q1o2"), t("q1o3")],
    required: true,
  },
  { id: "q2", type: "text", label: t("q2"), maxLength: 500, required: true },
  { id: "q3", type: "text", label: t("q3"), maxLength: 500, required: true },
];