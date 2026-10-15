import type { StaticImageData } from "next/image";

export type UserRole = "USER" | "EDITOR" | "ADMIN";

export interface InfoRowProps {
  label: string;
  value: string;
}

export interface UserDetails {
  name: string;
  email: string;
  status: string;
  date: string;
  image: string | StaticImageData;
  role: UserRole;
}

export interface UserInfoCardProps {
  user: UserDetails;
}

export interface RoleManagementCardProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
}
