import z from "zod";
export const forgetPasswordSchema = z.object({
  email: z.string().min(1, "emailRequired").email("invalidEmail"),
});

export type ForgetPasswordValues = z.infer<typeof forgetPasswordSchema>;
