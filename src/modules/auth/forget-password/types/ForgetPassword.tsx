export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  data: { otp?: string };
}
