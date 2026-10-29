"use client";

import Images from "@/shared/components/atoms/Images";
import Input from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";
import { useRef, type ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import Avatar from "@/assets/images/Avatar.jpg";

type ProfilePhotoProps = {
  photoPreview: string | null;
  onPhotoChange: (file: File) => void;
  onRemovePhoto: () => void;
};

export default function ProfilePhoto({
  photoPreview,
  onPhotoChange,
  onRemovePhoto,
}: ProfilePhotoProps) {
  const t = useTranslations("DashboardProfile");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      event.currentTarget.value = "";
      return;
    }

    onPhotoChange(file);
    event.currentTarget.value = "";
  }
  return (
    <div className="flex flex-wrap items-center gap-4" dir="ltr">
      <div className="h-24 w-24 shrink-0">
        <Images
          src={photoPreview ?? Avatar}
          alt={t("avatarAlt")}
          width={96}
          height={96}
          unoptimized
          center={false}
          className="h-24 w-24 shrink-0 rounded-full object-cover"
        />
      </div>

      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        aria-label={t("uploadPhoto")}
      />

      {/* Photo actions */}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="primary"
          onClick={() => fileInputRef.current?.click()}
          className="h-10 rounded-lg px-4 text-xs font-medium"
        >
          {t("uploadPhoto")}
        </Button>

        <Button
          type="button"
          variant="gray"
          onClick={onRemovePhoto}
          className="h-10 rounded-lg px-4 text-xs font-medium"
        >
          {t("removePhoto")}
        </Button>
      </div>
    </div>
  );
}
