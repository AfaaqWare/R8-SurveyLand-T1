import type { PreviewQuestion } from "./PreviewType";

export type QuestionType = "mcq" | "textarea";

export interface UpdateQuestionPayload {
  questionText: string;
  type: QuestionType;
  isRequired: boolean;
  choices: string[] | null;
}

export type UpdateQuestionParams = UpdateQuestionPayload & {
  qid: string;
};

export interface UpdateQuestionResponse {
  success: boolean;
  message: string;
  data: PreviewQuestion;
}