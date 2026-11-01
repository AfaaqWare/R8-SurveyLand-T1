import { z } from "zod";

// Allowed profile image MIME types
export const ALLOWED_PROFILE_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

// Maximum image size: 5 MB
export const MAX_PROFILE_PHOTO_SIZE = 5 * 1024 * 1024;

// Profile photo validation
export const profilePhotoSchema = z.custom<File>().superRefine((file, ctx) => {
  if (typeof File === "undefined" || !(file instanceof File)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "photoInvalid",
    });
    return;
  }

  if (
    !ALLOWED_PROFILE_PHOTO_TYPES.includes(file.type as (typeof ALLOWED_PROFILE_PHOTO_TYPES)[number])
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "photoInvalidType",
    });
    return;
  }

  if (file.size > MAX_PROFILE_PHOTO_SIZE) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "photoTooLarge",
    });
  }
});

export const profileSchema = z.object({
  userName: z.string().trim().min(2, "userNameMin").max(50, "userNameMax"),

  phoneNumber: z
    .string()
    .trim()
    .min(1, "phoneRequired")
    .refine(
      value =>
        /^[+()\d\s-]+$/.test(value) && value.replace(/\D/g, "").length >= 7 && value.length <= 20,
      "phoneInvalid"
    ),

  email: z.string().trim().min(1, "emailRequired").email("emailInvalid"),

  country: z.string().trim().min(1, "countryRequired"),

  password: z.string().superRefine((value, ctx) => {
    // Empty password is now invalid
    if (value.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwordRequired",
      });
      return;
    }

    if (value.length < 12) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwordMin",
      });
    }

    if (!/[A-Z]/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwordUppercase",
      });
    }

    if (!/[a-z]/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwordLowercase",
      });
    }

    if (!/\d/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwordNumber",
      });
    }

    if (!/[\p{P}\p{S}]/u.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwordSpecial",
      });
    }
  }),

  language: z.enum(["en", "ar"]),
});

export type ProfileValues = z.infer<typeof profileSchema>;

export type ProfileValidationKey =
  | "userNameMin"
  | "userNameMax"
  | "phoneRequired"
  | "phoneInvalid"
  | "emailRequired"
  | "emailInvalid"
  | "countryRequired"
  | "passwordRequired"
  | "passwordMin"
  | "passwordUppercase"
  | "passwordLowercase"
  | "passwordNumber"
  | "passwordSpecial"
  | "photoInvalid"
  | "photoInvalidType"
  | "photoTooLarge";
