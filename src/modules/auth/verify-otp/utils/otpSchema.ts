import { z } from "zod";


export const otpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/),
});

export type OtpFormValues = z.infer<typeof otpSchema>;