import { Avatar } from "@/assets/images/images";
import { User, SquareUserRound, UserRoundCog } from "@/assets/icons/icons";
import type { UserDetails, UserRole } from "./RoleType";

export const UserInfo: UserDetails = {
  name: "Ahmed Mohamed",
  email: "Ahmed@gmail.com",
  status: "Closed",
  date: "2026-12-06",
  image: Avatar,
  role: "USER",
};

export const ROLE_OPTIONS: {
  value: UserRole;
  icon: typeof User;
  color: string;
  bgColor: string;
}[] = [
  { value: "USER", icon: User, color: "ds-text-alt", bgColor: "ds-bg-green-soft" },
  { value: "EDITOR", icon: SquareUserRound, color: "ds-text-blue", bgColor: "ds-bg-blue-soft " },
  { value: "ADMIN", icon: UserRoundCog, color: "ds-text-purple", bgColor: "ds-bg-purple-soft" },
];
