
export type CreateSurveyBody = {
  title: string;
  description: string;
  deadline: string; 
  image?: File;
};

export type CreateSurveyResponse = { status: number; message: string };