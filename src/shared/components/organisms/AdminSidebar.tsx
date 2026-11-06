"use client";

import { useTranslations } from "next-intl";

import DesktopSidebar from "../molecules/DesktopSidebar";
import MobileSidebar from "../molecules/MobileSidebar";

import AdminSidebarContent from "../molecules/AdminSidebarContent";

import useGetProfile from "@/modules/Admin/hooks/useGetProfile";

import useLogout from "@/modules/auth/hooks/useLogout";

export default function AdminSidebar() {
  const { data, isPending: isLoading } = useGetProfile();

  const { handleLogout, isPending } = useLogout();

  const t = useTranslations("AdminDashboard");

  const handleLogoutClick = () => {
    void handleLogout();
  };

  const renderAdminContent = (onNavigate: () => void) => (
    <AdminSidebarContent
      profile={data}
      isLoading={isLoading}
      isLogoutPending={isPending}
      onLogout={handleLogoutClick}
      onNavigate={onNavigate}
    />
  );

  return (
    <>
      <MobileSidebar closeLabel={t("actions.closeSidebar")}>
        {renderAdminContent}
      </MobileSidebar>

      <DesktopSidebar>{renderAdminContent}</DesktopSidebar>
    </>
  );
}
