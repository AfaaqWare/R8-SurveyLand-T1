"use client";
import { useLocale } from "next-intl";
const DesktopSidebar = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <aside
      className={`ds-border-color ds-bg-alt fixed inset-y-0 z-30 hidden h-screen w-80 flex-col border lg:flex ${
        isArabic ? "right-0 border-l" : "left-0 border-r"
      }`}
    ></aside>
  );
};

export default DesktopSidebar;
