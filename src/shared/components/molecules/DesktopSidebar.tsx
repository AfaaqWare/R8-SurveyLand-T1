"use client";

import { useLocale } from "next-intl";

import AdminSidebarContent, {
  type AdminSidebarProfile,
} from "./AdminSidebarContent";

type Props = {
  profile: AdminSidebarProfile;
  isLoading: boolean;
  isLogoutPending: boolean;
  onLogout: () => void;
};

export default function DesktopSidebar({
  profile,
  isLoading,
  isLogoutPending,
  onLogout,
}: Props) {
  const locale = useLocale();

  return (
    <aside className="ds-bg-alt ds-border-color fixed inset-y-0 start-0 z-30 hidden h-screen w-80 flex-col overflow-y-auto border-e lg:flex">

      <AdminSidebarContent
        profile={profile}
        isLoading={isLoading}
        isLogoutPending={isLogoutPending}
        onLogout={onLogout}
      />

    </aside>
  );
}
