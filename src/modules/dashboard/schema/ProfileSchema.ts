
import { z } from "zod";

export const profileSchema = z.object({
  userName: z
    .string()
    .trim()
    .min(2, "userNameMin")
    .max(50, "userNameMax"),

  phoneNumber: z
    .string()
    .trim()
    .refine(
      (value) =>
        value === "" ||
        (/^[+()\d\s-]+$/.test(value) &&
          value.replace(/\D/g, "").length >= 7 &&
          value.length <= 20),
      "phoneInvalid",
    ),

  email: z
    .string()
    .trim()
    .email("emailInvalid"),

  country: z
    .string()
    .min(1, "countryRequired"),

  password: z
    .string()
    // Empty password is allowed when the user does not want to change it.
    .refine(
      (value) => value === "" || value.length >= 12,
      "passwordMin",
    )
    .refine(
      (value) => value === "" || /[A-Z]/.test(value),
      "passwordUppercase",
    )
    .refine(
      (value) => value === "" || /[a-z]/.test(value),
      "passwordLowercase",
    )
    .refine(
      (value) => value === "" || /\d/.test(value),
      "passwordNumber",
    )
    .refine(
      (value) => value === "" || /[\p{P}\p{S}]/u.test(value),
      "passwordSpecial",
    ),

  language: z.enum(["en", "ar"]),
});

export type ProfileValues = z.infer<typeof profileSchema>;

export type ProfileValidationKey =
  | "userNameMin"
  | "userNameMax"
  | "phoneInvalid"
  | "emailInvalid"
  | "countryRequired"
  | "passwordMin"
  | "passwordUppercase"
  | "passwordLowercase"
  | "passwordNumber"
  | "passwordSpecial";
