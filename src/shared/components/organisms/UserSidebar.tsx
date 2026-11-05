"use client";


import DesktopSidebar from "../molecules/DesktopSidebar";
import MobileSidebar from "../molecules/MobileSidebar";

import UserSidebarContent from "../molecules/UserSidebarContent";

import useGetProfile from "@/modules/auth/hooks/useGetProfile";
import useLogout from "@/modules/auth/hooks/useLogout";

export default function UserSidebar() {
  const { data, isLoading } = useGetProfile();
  const { handleLogout, isPending } = useLogout();

  // سنستخدم Namespace المستخدم الموجود في ملفات الترجمة.
  // لا نحدد اسمه قبل مراجعة messages/ar.json وmessages/en.json.

  const renderUserContent = (onNavigate: () => void) => (
    <UserSidebarContent
      profile={data}
      isLoading={isLoading}
      isLogoutPending={isPending}
      onLogout={() => void handleLogout()}
      onNavigate={onNavigate}
    />
  );

  return (
    <>
      <MobileSidebar
        openLabel="Open navigation"
        closeLabel="Close navigation"
      >
        {renderUserContent}
      </MobileSidebar>

      <DesktopSidebar>
        {renderUserContent}
      </DesktopSidebar>
    </>
  );
}
