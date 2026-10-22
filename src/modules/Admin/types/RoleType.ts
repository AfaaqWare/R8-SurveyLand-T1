import type { StaticImageData } from "next/image";

export type UserRole = "USER" | "EDITOR" | "ADMIN";

export interface InfoRowProps {
  label: string;
  value: string;
}

export interface UserDetails {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  provider: string;
  image: string | StaticImageData |null;
}

export interface UserInfoCardProps {
  user: UserDetails;
}
