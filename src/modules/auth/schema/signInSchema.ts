import z from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, "emailRequired").email("emailInvalid"),
  password: z.string().min(1, "passwordRequired"),
});

export type SignInValues = z.infer<typeof signInSchema>;
