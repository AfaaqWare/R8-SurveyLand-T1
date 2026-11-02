
export interface CreateNewPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export interface CreateNewPasswordRequest {
  email: string;
  otp: string;
  newPassword: string;
}

export interface CreateNewPasswordResponse {
  success: boolean;
  message: string;
}
