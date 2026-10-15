"use client";
import { useState } from "react";
import { Menu, X } from "@/assets/icons/icons";
import { useLocale } from "next-intl";
import Button from "../atoms/Button";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      <Button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`ds-border-color ds-bg-alt ds-shadow-sm fixed top-4 z-50 rounded-md border p-2 lg:hidden ${
          isArabic ? "right-4" : "left-4"
        }`}
      >
        <Menu size={20} />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`ds-border-color ds-bg-alt fixed inset-y-0 z-50 flex h-screen w-80 max-w-[85vw] flex-col border ${
          isArabic ? "right-0 border-l" : "left-0 border-r"
        } transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : isArabic ? "translate-x-full" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-4">
          <Button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2"
          >
            <X size={20} />
          </Button>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
