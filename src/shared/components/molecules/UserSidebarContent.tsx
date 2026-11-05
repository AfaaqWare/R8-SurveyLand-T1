"use client";

import type { ReactNode } from "react";

import Link from "../atoms/Link";
import Icon from "../atoms/Icon";
import AppImage from "../atoms/Image";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import type { ProfileResponse } from "@/modules/auth/api/getProfile";

import {
  ChevronDown,
  LayoutDashboard,
  ClipboardList,
  FileText,
  PieChart,
  User,
  LogOut,
} from "@/assets/icons/icons";

import { defaultAvatar } from "@/assets/images/images";

export type UserSidebarProfile =
  Pick<ProfileResponse, "name" | "image" | "role"> | null | undefined;

type Props = {
  profile: UserSidebarProfile;
  isLoading: boolean;
  isLogoutPending: boolean;
  onLogout: () => void;
  onNavigate?: () => void;
};

type SidebarLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  isActive: boolean;
  onNavigate?: () => void;
};

function SidebarNavigationLink({ href, label, icon, isActive, onNavigate }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      label={label}
      onClick={onNavigate}
      className={`sidebar-nav-item pb-5 ${
        isActive
          ? "active !bg-[var(--color-dashboard-role-selected-bg)] !text-[var(--color-primary)]"
          : ""
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default function UserSidebarContent({
  profile,
  isLoading,
  isLogoutPending,
  onLogout,
  onNavigate,
}: Props) {
  const t = useTranslations("UserDashboardSidebar");
  const pathname = usePathname();

  // Normalize pathname
  const currentPath = pathname.replace(/\/+$/, "") || "/";

  // Remove locale prefix if present
  const normalizedPath = currentPath.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";

  // Keep Dashboard active only on its exact route.
  // Nested pages remain associated with their parent item.
  const isActive = (href: string) =>
    normalizedPath === href || (href !== "/dashboard" && normalizedPath.startsWith(`${href}/`));

  const iconClassName = (active: boolean) =>
    `sidebar-nav-icon ${active ? "!text-[var(--color-primary)]" : ""}`;

  const userName = profile?.name || (isLoading ? t("profile.loading") : t("profile.fallbackName"));

  return (
    <div className="flex min-h-full flex-col pb-4">
      {/* User Profile */}
      <div className="sidebar-profile-section mt-2">
        <span className="sidebar-profile-avatar relative block">
          <AppImage
            src={profile?.image || defaultAvatar}
            alt={userName}
            fill
            sizes="50px"
            objectFit="cover"
            className="h-full w-full"
          />
        </span>

        <div className="sidebar-profile-info">
          <p className="sidebar-profile-name" title={userName}>
            {userName}
          </p>

          <p className="sidebar-profile-role">{profile?.role ?? ""}</p>
        </div>

        <Icon
          IconComponent={ChevronDown}
          size={18}
          variant="secondary"
          className="sidebar-chevron"
        />
      </div>

      {/* Navigation */}
      <nav aria-label={t("actions.navigationLabel")}>
        <div className="sidebar-nav">
          {/* Dashboard */}
          <SidebarNavigationLink
            href="/dashboard"
            label={t("items.dashboard")}
            icon={
              <Icon
                IconComponent={LayoutDashboard}
                size={20}
                variant="secondary"
                className={iconClassName(isActive("/dashboard"))}
              />
            }
            isActive={isActive("/dashboard")}
            onNavigate={onNavigate}
          />

          {/* My Surveys */}
          <SidebarNavigationLink
            href="/dashboard/surveys"
            label={t("items.mySurveys")}
            icon={
              <Icon
                IconComponent={ClipboardList}
                size={20}
                variant="secondary"
                className={iconClassName(isActive("/dashboard/surveys"))}
              />
            }
            isActive={isActive("/dashboard/surveys")}
            onNavigate={onNavigate}
          />

          {/* Create Survey */}
          <SidebarNavigationLink
            href="/dashboard/create-survey"
            label={t("items.createSurvey")}
            icon={
              <Icon
                IconComponent={FileText}
                size={20}
                variant="secondary"
                className={iconClassName(isActive("/dashboard/create-survey"))}
              />
            }
            isActive={isActive("/dashboard/create-survey")}
            onNavigate={onNavigate}
          />

          {/* Responses */}
          <SidebarNavigationLink
            href="/dashboard/responses"
            label={t("items.responses")}
            icon={
              <Icon
                IconComponent={PieChart}
                size={20}
                variant="secondary"
                className={iconClassName(isActive("/dashboard/responses"))}
              />
            }
            isActive={isActive("/dashboard/responses")}
            onNavigate={onNavigate}
          />

        </div>

        <div className="sidebar-divider" />

        {/* Others */}
        <p className="sidebar-section-label">{t("sections.others")}</p>

        <div className="sidebar-nav">
          {/* Profile */}
          <SidebarNavigationLink
            href="/dashboard/profile"
            label={t("items.profile")}
            icon={
              <Icon
                IconComponent={User}
                size={20}
                variant="secondary"
                className={iconClassName(isActive("/dashboard/profile"))}
              />
            }
            isActive={isActive("/dashboard/profile")}
            onNavigate={onNavigate}
          />

          {/* Logout */}
          <button
            type="button"
            onClick={onLogout}
            disabled={isLogoutPending}
            className="sidebar-nav-item sidebar-logout disabled:opacity-50"
          >
            <Icon
              IconComponent={LogOut}
              size={20}
              color="var(--color-error)"
              className="sidebar-nav-icon"
            />

            <span>{t("items.logout")}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
