"use client";

import DesktopSidebar from "../molecules/DesktopSidebar";
import MobileSidebar from "../molecules/MobileSidebar";

import useGetProfile from "@/modules/auth/hooks/useGetProfile";
import useLogout from "@/modules/auth/hooks/useLogout";

export default function AdminSidebar() {
  const { data, isLoading } = useGetProfile();

  const { handleLogout, isPending } = useLogout();

  const handleSidebarLogout = () => {
    void handleLogout();
  };

  const sidebarProps = {
    profile: data,
    isLoading,
    isLogoutPending: isPending,
    onLogout: handleSidebarLogout,
  };

  return (
    <>
      <MobileSidebar {...sidebarProps} />
      <DesktopSidebar {...sidebarProps} />
    </>
  );
}
