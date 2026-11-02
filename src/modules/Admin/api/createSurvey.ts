import apiClient from "@/services/ApiClient";
import type { CreateSurveyBody, CreateSurveyResponse } from "../types/createSurveyTypes";

export const createSurvey = (body: CreateSurveyBody) => {
  const formData = new FormData();
  formData.append("title", body.title);
  formData.append("description", body.description);
  formData.append("deadline", `${body.deadline}T23:59:59Z`);
  if (body.image) formData.append("file", body.image);

  return apiClient.post<CreateSurveyResponse>("/survey", formData);
};