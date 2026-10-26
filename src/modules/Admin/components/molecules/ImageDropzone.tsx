"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Trash2, Upload } from "@/assets/icons/icons";

type Props = {
  value?: File;
  onChange: (file?: File) => void;
  error?: string;
  disabled?: boolean;
};

const ACCEPT = "image/png,image/jpeg,image/webp";

export default function ImageDropzone({ value, onChange, error, disabled }: Props) {
  const t = useTranslations("createSurvey.image");
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

 
  useEffect(() => {
    if (!value || !value.type.startsWith("image/")) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(value);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [value]);

  const pick = (file?: File) => {
    if (file && !disabled) onChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    pick(e.dataTransfer.files?.[0]);
  };

  const borderClass = error
    ? "border-[color:var(--color-error)]"
    : dragging
      ? "border-[color:var(--color-primary)]"
      : "border-transparent";

  return (
    <div className="flex flex-col gap-2">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`flex min-h-52 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] px-4 py-8 text-center transition ${borderClass}`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          className="sr-only"
          tabIndex={-1}
          aria-label={t("choose")}
          onChange={(e) => {
            pick(e.target.files?.[0]);
            e.target.value = ""; 
          }}
        />

        {value && previewUrl ? (
          <>
            <div className="relative h-32 w-full max-w-xs overflow-hidden rounded-md">
              <Image src={previewUrl} alt={value.name} fill unoptimized className="object-cover" />
            </div>
            <p className="max-w-full truncate text-xs text-(--color-text-secondary)">
              {value.name}
            </p>
            <button
              type="button"
              onClick={() => onChange(undefined)}
              disabled={disabled}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-(--color-error) hover:underline disabled:opacity-50"
            >
              <Trash2 className="size-4" />
              {t("remove")}
            </button>
          </>
        ) : (
          <>
            <Upload className="size-8 text-(--color-primary)" />
            <p className="text-sm font-semibold text-(--color-text-primary)">
              {t("dragTitle")}
            </p>
            <p className="text-xs text-(--color-text-primary)">{t("or")}</p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={disabled}
              className="rounded-md border border-(--color-primary) px-5 py-1.5 text-xs font-medium text-(--color-primary) transition hover:bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] disabled:opacity-50"
            >
              {t("choose")}
            </button>
            <p className="text-[11px] text-(--color-text-secondary)">{t("hint")}</p>
          </>
        )}
      </div>

      {error && (
        <p role="alert" className="text-xs text-(--color-error)">
          {error}
        </p>
      )}
    </div>
  );
}