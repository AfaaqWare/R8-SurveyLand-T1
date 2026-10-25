import { z } from "zod";
import type { useTranslations } from "next-intl";

export const MAX_IMAGE_SIZE = 1024 * 1024; // 1MB
export const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp"];

type Translate = ReturnType<typeof useTranslations<"createSurvey">>;
export const getToday = () => new Date().toLocaleDateString("en-CA");

export const createSurveySchema = (t: Translate) =>
  z.object({
    title: z.string().trim().min(1, t("errors.titleRequired")),
    description: z.string().trim().min(1, t("errors.descriptionRequired")),
    deadline: z
      .string()
      .min(1, t("errors.deadlineRequired"))
      .refine((value) => value >= getToday(), t("errors.deadlinePast")),
    image: z
      .custom<File>((value) => value instanceof File)
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), t("errors.imageType"))
      .refine((file) => file.size <= MAX_IMAGE_SIZE, t("errors.imageSize"))
      .optional(),
  });

export type CreateSurveyValues = z.infer<ReturnType<typeof createSurveySchema>>;