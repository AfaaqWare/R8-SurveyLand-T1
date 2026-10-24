export interface UpdateProps {
  params: {
    id: string;
  };
}

export interface IdProps {
  id: string;
}
export type SurveyStatus = "draft" | "published" | "closed";

export interface SurveyResponse {
  id: string;
  userId: string;
  title: string;
  description: string;
  deadline: string;
  cover: string | null;
  status: SurveyStatus;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  lastMilestone: number;
  questions: [];
}

export interface UpdateSurveyProps {
  title: string;
  description: string;
  deadline: string;
  status: string;
}
