"use client";

import { useCallback, useRef, useState, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy, Eye, MoreVertical } from "@/assets/icons/icons";
import { useDismiss } from "../../hooks/useDismiss";
import type { SurveyResponse } from "../../types/ResponsesTypes";
import { iconButtonClass, panelClass } from "../styles";

type Props = {
  response: SurveyResponse;
  onView?: (response: SurveyResponse) => void; // TODO: اربطها بصفحة/نافذة تفاصيل الرد
};

export default function RowActions({ response, onView }: Props) {
  const t = useTranslations("responses");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const name = response.respondentName.trim() || t("table.anonymous");

  // القائمة fixed عشان ما تنقص جوا حاوية الجدول (overflow)
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!open) {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuStyle({
        position: "fixed",
        top: rect.bottom + 4,
        insetInlineEnd: Math.max(8, window.innerWidth - rect.right),
      });
    }
    setOpen((value) => !value);
  };

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(response.id);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 900);
    } catch {
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onView?.(response)}
        aria-label={t("actions.view", { name })}
        className={iconButtonClass}
      >
        <Eye className="size-4" />
      </button>

      <button
        type="button"
        onClick={toggle}
        aria-label={t("actions.more")}
        aria-haspopup="menu"
        aria-expanded={open}
        className={iconButtonClass}
      >
        <MoreVertical className="size-4" />
      </button>

      {open && (
        <div
          role="menu"
          style={menuStyle}
          className={`${panelClass} z-30 w-52 p-1 shadow-[var(--shadow-md)]`}
        >
          <button
            type="button"
            role="menuitem"
            onClick={copyId}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-start text-sm text-[color:var(--color-text-primary)] transition hover:bg-[var(--color-bg-table)]"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? t("actions.copied") : t("actions.copyId")}
          </button>
          {/* TODO: خيارات ثانية (مثل الحذف) بعد ما تتأكد من الفريق */}
        </div>
      )}
    </div>
  );
}