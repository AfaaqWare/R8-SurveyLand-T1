"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "@/assets/icons/icons";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex h-11 w-21 cursor-pointer items-center rounded-full p-1 transition-colors duration-500 md:h-9 md:w-18 ${
        isDark ? "bg-gray-500" : "bg-gray-200"
      } shadow-md`}
      aria-label="Toggle Theme"
    >
      <span
        className={`absolute left-1.5 h-8 w-8 transform rounded-full transition-transform duration-500 md:left-1 md:h-7 md:w-7 ${
          isDark ? "ds-bg-dark-gray translate-x-9" : "translate-x-0 bg-white"
        }`}
      />

      <span
        className={`absolute left-2 transform justify-center text-xs transition-transform duration-500 md:left-1 ${
          isDark ? "translate-x-10" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="text-white" />
        ) : (
          <Sun className="ds-text-alt ml-0 md:ml-1" size={16} />
        )}
      </span>
    </button>
  );
}
