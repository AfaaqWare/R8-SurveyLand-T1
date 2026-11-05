export interface SurveyResponse {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string; 
  answers: Record<string, string>; 
  submittedAt: string; 
}

export interface ResponsesApiResponse {
  success: boolean;
  message: string;
  data: SurveyResponse[];
}

export type SortOrder = "newest" | "oldest";

export interface ResponsesFilters {
  search: string;
  sort: SortOrder;
  from: string; 
  to: string; 
  surveyId: string; 
  answeredOnly: boolean;
}

export interface ResponsesStatsData {
  total: number;
  uniqueSurveys: number;
  latestAt: string | null;
}