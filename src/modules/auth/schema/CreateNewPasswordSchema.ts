
import z from "zod";

export const createNewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "validation.passwordRequired")
      .min(8, "validation.passwordMinLength")
      .regex(/[A-Z]/, "validation.passwordUppercase")
      .regex(/[0-9]/, "validation.passwordNumber"),

    confirmPassword: z
      .string()
      .min(1, "validation.confirmPasswordRequired"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "validation.passwordsDoNotMatch",
  });
