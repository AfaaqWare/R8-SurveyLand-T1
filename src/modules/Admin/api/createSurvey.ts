import apiClient from "@/services/ApiClient";
import type { CreateSurveyBody, CreateSurveyResponse } from "../types/createSurveyTypes";

export const createSurvey = (body: CreateSurveyBody) => {
  const formData = new FormData();
  formData.append("title", body.title);
  formData.append("description", body.description);
  formData.append("deadline", body.deadline);
  if (body.image) formData.append("image", body.image);
 
    //   call api in hooks file 
  return apiClient.post<CreateSurveyResponse>("/survey", formData);
};