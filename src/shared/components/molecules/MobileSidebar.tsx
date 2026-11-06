"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { ReactNode } from "react";

import Link from "../atoms/Link";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

import { useMobileNav } from "../organisms/MobileNavProvider";
import { NAV_LINKS } from "@/shared/utils/navLinks";
import { X } from "@/assets/icons/icons";

type Props = {
  children: (onNavigate: () => void) => ReactNode;
  closeLabel: string;
};

export default function MobileSidebar({ children, closeLabel }: Props) {
  const { isOpen, sidebarId, close: closeSidebar } = useMobileNav();

  const locale = useLocale();
  const isArabic = locale === "ar";

  const t = useTranslations("publicPages.navbar");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label={closeLabel}
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        id={sidebarId}
        aria-hidden={!isOpen}
        className={`ds-bg-alt ds-border-color dashboard-sidebar-scrollbar fixed inset-y-0 start-0 z-50 flex h-screen w-80 max-w-[85vw] flex-col overflow-y-auto border-e transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : isArabic ? "translate-x-full" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex h-16 shrink-0 items-center justify-end px-4">
          <Button
            type="button"
            aria-label={closeLabel}
            onClick={closeSidebar}
            className="rounded-md p-2"
          >
            <Icon IconComponent={X} size={20} variant="primary" />
          </Button>
        </div>

        {/* Public site navigation — keeps the main routing reachable from the dashboard */}
        <nav aria-label="Main navigation" className="ds-border-color shrink-0 border-b px-4 pb-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {NAV_LINKS.map(link => (
              <Link
                key={link.key}
                href={link.href}
                onClick={closeSidebar}
                className="text-sm font-medium text-gray-600 no-underline! transition-colors hover:text-cyan-400 dark:text-gray-300 dark:hover:text-cyan-400"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </nav>

        {/* Injected Sidebar Content */}
        {children(closeSidebar)}
      </aside>
    </>
  );
}
