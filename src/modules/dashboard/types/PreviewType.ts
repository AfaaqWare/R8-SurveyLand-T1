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
