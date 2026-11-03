"use client";

import { useEffect, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import { Menu, X } from "@/assets/icons/icons";

import Button from "../atoms/Button";

import AdminSidebarContent, {
  type AdminSidebarProfile,
} from "./AdminSidebarContent";

type Props = {
  profile: AdminSidebarProfile;
  isLoading: boolean;
  isLogoutPending: boolean;
  onLogout: () => void;
};

export default function MobileSidebar({
  profile,
  isLoading,
  isLogoutPending,
  onLogout,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const isArabic = locale === "ar";

  const t = useTranslations("AdminDashboard");

  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <Button
        type="button"
        aria-label={t("actions.openSidebar")}
        aria-expanded={isOpen}
        aria-controls="admin-mobile-sidebar"
        onClick={() => setIsOpen(true)}
        className="ds-bg-alt ds-border-color ds-shadow-sm fixed start-4 top-4 z-50 rounded-md border p-2 lg:hidden"
      >
        <Menu size={20} />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label={t("actions.closeSidebar")}
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        id="admin-mobile-sidebar"
        aria-hidden={!isOpen}
        className={`ds-bg-alt ds-border-color fixed inset-y-0 start-0 z-50 flex h-screen w-80 max-w-[85vw] flex-col overflow-y-auto border-e transition-transform duration-300 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : isArabic
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex h-16 shrink-0 items-center justify-end px-4">
          <Button
            type="button"
            aria-label={t("actions.closeSidebar")}
            onClick={closeSidebar}
            className="rounded-md p-2"
          >
            <X size={20} />
          </Button>
        </div>

        <AdminSidebarContent
          profile={profile}
          isLoading={isLoading}
          isLogoutPending={isLogoutPending}
          onLogout={() => {
            closeSidebar();
            onLogout();
          }}
          onNavigate={closeSidebar}
        />

      </aside>
    </>
  );
}
