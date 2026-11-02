import type { LucideIcon } from "lucide-react";

export type StatVariant = "teal" | "orange" | "green" | "purple" | "blue";

export type SurveyStatus = "draft" | "published" | "closed";

export interface Survey {
  id: string;
  title: string;
  description?: string | null;
  status: SurveyStatus;
  questions: unknown[];
  deadline?: string | null;
  cover?: string | null;
  updatedAt: string;
}

export interface SurveyResponse {
  id: string;
  surveyId: string;
  respondentName: string;
  respondentEmail: string;
  answers: Record<string, string>;
  submittedAt: string;
}


export interface SurveysApiResponse {
  data: Survey[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ResponsesApiResponse {
  success: boolean;
  message: string;
  data: SurveyResponse[];
}

export interface QuickAction {
  key: "create" | "users" | "responses" | "export";
  href: string;
  icon: LucideIcon;
  variant: StatVariant;
  tone: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  provider: string;
  isEmailVerified: boolean;
  userIsActive: boolean;
  role: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  failedLoginAttempts: number;
  lockUntil: string | null;
}

export type UsersApiResponse = User[];
