// app/components/LocaleSwitcher.tsx
"use client";
import { useEffect, useState } from "react";
import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export default function LocaleSwitcher({ changeLocaleAction }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const nextLocale = locale === "en" ? "ar" : "en";
  const label = locale.toUpperCase();
  const nextLabel = nextLocale.toUpperCase();

  const handleLocaleChange = async () => {
    setIsPending(true);
    try {
      await changeLocaleAction(nextLocale);
      router.refresh();
    } finally {
      setIsPending(false);
    }
  };

  const baseClasses = `
    fixed
    bottom-4
    w-14
    h-14
    rounded-full
    ds-bg-primary
    text-white
    flex
    items-center
    justify-center
    text-md
    shadow-xl
    hover:scale-105
    transition
    cursor-pointer
    z-50
    disabled:cursor-not-allowed
    disabled:opacity-70
  `;
  return (
    <button
      type="button"
      onClick={handleLocaleChange}
      disabled={isPending}
      className={cn(baseClasses, locale === "en" ? "right-8" : "left-8")}
      aria-label={`Switch language to ${nextLabel}`}
      title={`Current language: ${label}. Switch to ${nextLabel}`}
    >
      {label}
    </button>
  );
}
