import { z } from "zod";
import type { useTranslations } from "next-intl";

type Translate = ReturnType<typeof useTranslations<"UserDashboard.editQuestion">>;

export const MIN_CHOICES = 2;

export const updateQuestionSchema = (t: Translate) =>
  z
    .object({
      type: z.enum(["mcq", "textarea"]),
      questionText: z.string().trim().min(1, t("errors.textRequired")),
      isRequired: z.boolean(),
      choices: z.array(z.object({ value: z.string().trim() })),
    })
    .superRefine((data, ctx) => {
      if (data.type !== "mcq") return;

      if (data.choices.length < MIN_CHOICES) {
        ctx.addIssue({ code: "custom", path: ["choices"], message: t("errors.minChoices") });
      }
      data.choices.forEach((choice, index) => {
        if (!choice.value) {
          ctx.addIssue({
            code: "custom",
            path: ["choices", index, "value"],
            message: t("errors.choiceRequired"),
          });
        }
      });
    });

export type UpdateQuestionValues = z.infer<ReturnType<typeof updateQuestionSchema>>;