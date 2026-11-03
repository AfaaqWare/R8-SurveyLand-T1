import type { QuestionType } from "./QuestionTypes";

export interface PreviewQuestion {
  qid: string;
  questionText: string;
  type: QuestionType;
  choices: string[] | null;
  isRequired: boolean;
}

export interface QuestionsApiResponse {
  success: boolean;
  message: string;
  data: PreviewQuestion[];
}

export interface AddQuestionBody {
  questionText: string;
  type: "mcq" | "textarea";
  choices: string[] | null;
  isRequired: boolean;
}

export interface AddQuestionResponse {
  success: boolean;
  message: string;
  data: PreviewQuestion;
}
