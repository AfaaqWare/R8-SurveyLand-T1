export interface PreviewQuestion {
  qid: string;
  questionText: string;
  type: string; // "mcq" أو "textarea"
  choices: string[] | null;
  isRequired: boolean;
}

export interface QuestionsApiResponse {
  success: boolean;
  message: string;
  data: PreviewQuestion[];
}
