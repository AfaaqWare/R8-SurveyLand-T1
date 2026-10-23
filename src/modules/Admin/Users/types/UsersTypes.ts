export interface AdminUser {
  id: string;
  name: string;
  email: string;
  provider: string;
  isEmailVerified: boolean;
  userIsActive: boolean;
  role: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  failedLoginAttempts: number;
  lockUntil: string | null;
}

// The backend may return the array directly or wrapped as { data: [...] }.
export type UsersResponse = AdminUser[] | { data: AdminUser[] };