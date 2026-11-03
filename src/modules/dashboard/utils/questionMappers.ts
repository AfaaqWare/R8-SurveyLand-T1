import type { PreviewQuestion } from "../types/PreviewType";
import type { QuestionType, UpdateQuestionPayload } from "../types/QuestionTypes";
import type { UpdateQuestionValues } from "../schema/UpdateQuestionSchema";

const isQuestionType = (type: string): type is QuestionType =>
  type === "mcq" || type === "textarea";

const toQuestionType = (type: string): QuestionType => {
  if (!isQuestionType(type)) {
    throw new Error(`Unsupported question type: ${type}`);
  }
  return type;
};

export const toFormValues = (question: PreviewQuestion): UpdateQuestionValues => ({
  type: toQuestionType(question.type),
  questionText: question.questionText,
  isRequired: question.isRequired,
  choices: (question.choices ?? []).map((choice) => ({ value: choice.trim() })),
});

export const toPayload = (values: UpdateQuestionValues): UpdateQuestionPayload => ({
  questionText: values.questionText.trim(),
  type: values.type,
  isRequired: values.isRequired,
  choices: values.type === "mcq" ? values.choices.map((choice) => choice.value.trim()) : null,
});