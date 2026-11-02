export interface ResponseDetails {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  submittedAt: string;
}

export interface ResponseApiResult {
  success: boolean;
  message: string;
  data: ResponseDetails;
}

export interface ResponseInfoProps {
  data: ResponseDetails;
}
