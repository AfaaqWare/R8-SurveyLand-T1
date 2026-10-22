import type { ReactNode } from "react";
import { changeLocaleAction } from "@/i18n/locale";
import Navbar from "@/shared/components/organisms/Navbar";
import Footer from "@/shared/components/organisms/Footer/Footer";
import LocaleSwitcher from "@/shared/components/atoms/LocalSwitcher";
import ThemeToggle from "@/shared/components/atoms/ThemeToggle";

export default function GuestGroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar
        controls={
          <div className="ds-bg-form ds-border-sm flex items-center gap-1 rounded-full p-1">
            <ThemeToggle />
            <span aria-hidden="true" className="ds-border-color h-5 border-s" />
            <LocaleSwitcher changeLocaleAction={changeLocaleAction} />
          </div>
        }
      />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
}
