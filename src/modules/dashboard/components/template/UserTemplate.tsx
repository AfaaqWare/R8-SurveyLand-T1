"use client";

import type { ReactNode } from "react";

import UserSidebar from "@/shared/components/organisms/UserSidebar";
import LocaleSwitcher from "@/shared/components/atoms/LocalSwitcher";
import { changeLocaleAction } from "@/i18n/locale";
import { useLocale } from "next-intl";
import Navbar from "@/shared/components/organisms/Navbar";
import { MobileNavProvider } from "@/shared/components/organisms/MobileNavProvider";
import ThemeToggle from "@/shared/components/atoms/ThemeToggle";

type Props = {
  children: ReactNode;
};

export default function UserTemplate({ children }: Props) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <MobileNavProvider>
      <div className="ds-bg flex min-h-screen w-full flex-col">
        <Navbar
          hideProfile
          controls={
            <div className="ds-bg-form ds-border-sm flex items-center gap-1 rounded-full p-1">
              <ThemeToggle />
              <span aria-hidden="true" className="ds-border-color h-5 border-s" />
              <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
            </div>
          }
        />

        <div className="flex flex-1">
          <UserSidebar />

          <main className="min-w-0 flex-1 p-4 pt-4 md:p-6 md:pt-6 lg:pe-8 lg:pt-6">
            {children}
          </main>
        </div>

        <div
          className={`fixed bottom-4 z-50 ${
            isArabic ? "left-4" : "right-4"
          }`}
        >
          <div className="ds-bg-form ds-border-sm flex items-center gap-1 rounded-full p-1">
            <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
          </div>
        </div>
      </div>
    </MobileNavProvider>
  );
}
