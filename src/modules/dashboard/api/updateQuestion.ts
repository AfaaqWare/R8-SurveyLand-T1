import apiClient from "@/services/ApiClient";
import type { UpdateQuestionParams, UpdateQuestionResponse } from "../types/QuestionTypes";

export async function updateQuestion({
  qid,
  ...body
}: UpdateQuestionParams): Promise<UpdateQuestionResponse> {
  return apiClient.put<UpdateQuestionResponse>(`/questions/${qid}`, body);
}