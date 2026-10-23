"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { ChevronDown, LayoutDashboard, LogOut } from "@/assets/icons/icons";
import { defaultAvatar } from "@/assets/images/images";
import { cn } from "@/lib/cn";
import Icon from "@/shared/components/atoms/Icon";
import AppImage from "@/shared/components/atoms/Image";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";
import useLogout from "@/modules/auth/hooks/useLogout";

type DropdownProfileProps = {
  /** Called after the session is cleared, so the navbar can swap back to the guest links */
  onLogout?: () => void;
};

export default function DropdownProfile({ onLogout }: DropdownProfileProps) {
  const t = useTranslations("publicPages.navbar");
  const tUi = useTranslations("ui-state");
  const { data, isLoading } = useGetProfile();
  const { handleLogout, isPending } = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const name = data?.name || t("account");

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="ds-text-primary flex cursor-pointer items-center gap-2 rounded-full p-1 transition-colors hover:bg-[var(--color-bg-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
      >
        <span className="relative size-9 shrink-0 overflow-hidden rounded-full">
          <AppImage
            src={data?.image ?? defaultAvatar}
            alt={name}
            fill
            sizes="36px"
            className="h-full w-full object-cover"
          />
        </span>

        <span className="hidden max-w-24 truncate text-sm font-medium sm:block">
          {isLoading ? tUi("loading") : name}
        </span>

        <Icon
          IconComponent={ChevronDown}
          size={16}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="ds-bg-card absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-gray-200 py-1 shadow-xl dark:border-gray-800"
        >
          <NextLink
            href="/dashboard"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            className="ds-text-primary flex items-center gap-2 px-4 py-3 text-sm transition-colors hover:bg-[var(--color-bg-card)]"
          >
            <Icon IconComponent={LayoutDashboard} size={18} />
            {t("dashboard")}
          </NextLink>

          <button
            type="button"
            role="menuitem"
            disabled={isPending}
            onClick={() => handleLogout(onLogout)}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50 dark:hover:bg-red-900/30"
          >
            <Icon IconComponent={LogOut} size={18} color="#ef4444" />
            {t("logout")}
          </button>
        </div>
      )}
    </div>
  );
}
