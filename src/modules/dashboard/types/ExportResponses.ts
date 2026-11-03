export interface ExportResponseItem {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  submittedAt: string;
}

export interface SurveyResponsesApiResponse {
  success: boolean;
  message: string;
  data: ExportResponseItem[];
}

export interface ExportFileSettings {
  fileName: string;
  includeName: boolean;
  includeEmail: boolean;
  includeSubmission: boolean;
  includeAnswers: boolean;
}
