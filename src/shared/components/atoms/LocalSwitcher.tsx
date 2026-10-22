// app/components/LocaleSwitcher.tsx
"use client";
import { useEffect, useState } from "react";
import { Locale, useLocale } from "next-intl";
import { useRouter } from "next/navigation";

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

  return (
    <button
      type="button"
      onClick={handleLocaleChange}
      disabled={isPending}
      className="ds-text-primary flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-full px-2 text-xs font-bold transition-colors duration-200 hover:bg-[var(--color-bg-card)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-70"
      aria-label={`Switch language to ${nextLabel}`}
      title={`Current language: ${label}. Switch to ${nextLabel}`}
    >
      {label}
    </button>
  );
}
