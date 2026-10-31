import z from "zod";

export const UpdateSurveySchema = z.object({
  title: z.string().trim().min(1, "titleRequired"),
  description: z.string().trim().min(1, "descriptionRequired"),
  deadline: z.string().min(1, "deadlineRequired"),
  status: z.enum(["draft", "published", "closed"]),
});

export type UpdateSurveyValues = z.infer<typeof UpdateSurveySchema>;
