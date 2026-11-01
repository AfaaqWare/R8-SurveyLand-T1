import apiClient from "@/services/ApiClient";
import type { AddQuestionBody, AddQuestionResponse } from "../types/PreviewType";

export function addQuestion(id: string, body: AddQuestionBody) {
  return apiClient.post<AddQuestionResponse>(`/questions/${id}`, body);
}
