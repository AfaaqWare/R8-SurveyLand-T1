import type { Question } from "../survey-overview/components/SurveyQuestion";

export const mockQuestions: Question[] = [
  {
    id: "q1",
    type: "radio",
    label: "What’s your favorite language?",
    options: ["JavaScript", "Python", "Go"],
    required: true,
  },
  { id: "q2", type: "text", label: "ما اسمك ؟", maxLength: 500, required: true },
  { id: "q3", type: "text", label: "ما رايك في التدريب ؟", maxLength: 500, required: true },
];
