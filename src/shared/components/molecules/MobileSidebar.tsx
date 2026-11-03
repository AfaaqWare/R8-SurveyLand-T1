"use client";

import { useEffect, useId, useState } from "react";
import { useLocale } from "next-intl";
import type { ReactNode } from "react";

import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

import { Menu, X } from "@/assets/icons/icons";

type Props = {
  children: (onNavigate: () => void) => ReactNode;
  openLabel: string;
  closeLabel: string;
};

export default function MobileSidebar({
  children,
  openLabel,
  closeLabel,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const isArabic = locale === "ar";

  const sidebarId = useId();

  const closeSidebar = () => {
    setIsOpen(false);
  };

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
  }, [isOpen]);

  return (
    <>
      {/* Menu Button */}
      <Button
        type="button"
        aria-label={openLabel}
        aria-expanded={isOpen}
        aria-controls={sidebarId}
        onClick={() => setIsOpen(true)}
        className="ds-bg-alt ds-border-color ds-shadow-sm fixed start-4 top-4 z-50 rounded-md border p-2 lg:hidden"
      >
        <Icon
          IconComponent={Menu}
          size={20}
          variant="primary"
        />
      </Button>

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
        className={`ds-bg-alt ds-border-color fixed inset-y-0 start-0 z-50 flex h-screen w-80 max-w-[85vw] flex-col overflow-y-auto dashboard-sidebar-scrollbar border-e transition-transform duration-300 ease-out lg:hidden ${
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
            aria-label={closeLabel}
            onClick={closeSidebar}
            className="rounded-md p-2"
          >
            <Icon
              IconComponent={X}
              size={20}
              variant="primary"
            />
          </Button>
        </div>

        {/* Injected Sidebar Content */}
        {children(closeSidebar)}
      </aside>
    </>
  );
}
