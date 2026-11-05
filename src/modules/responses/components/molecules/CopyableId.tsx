"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "@/assets/icons/icons";
import { shortenId } from "../../utils/responsesUtils";

// chip بيعرض الـ ID مختصر، وبالنقر بينسخ الكامل
export default function CopyableId({ id }: { id: string }) {
  const t = useTranslations("responses");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // النسخ مش متاح (مثلاً متصفح قديم)، منتجاهل
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={id}
      aria-label={`${t("copySurveyId")}: ${id}`}
      className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-[color:var(--color-stats-teal)] bg-[var(--color-stats-teal-bg)] px-2 py-1 font-mono text-xs text-[color:var(--color-stats-teal)] transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]"
    >
      <span className="truncate">{shortenId(id)}</span>
      {copied ? <Check className="size-3.5 shrink-0" /> : <Copy className="size-3.5 shrink-0" />}
      <span role="status" className="sr-only">
        {copied ? t("actions.copied") : ""}
      </span>
    </button>
  );
}