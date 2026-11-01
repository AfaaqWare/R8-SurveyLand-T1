
"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { useTranslations } from "next-intl";

import Images from "@/shared/components/atoms/Images";
import Input from "@/shared/components/atoms/Input";
import Button from "@/shared/components/atoms/Button";

import Avatar from "@/assets/images/Avatar.jpg";

import {
  profilePhotoSchema,
  type ProfileValidationKey,
} from "@/modules/dashboard/schema/ProfileSchema";

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

  const [photoError, setPhotoError] =
    useState<ProfileValidationKey | null>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];

    if (!file) return;

    // Validate the selected image using Zod
    const result = profilePhotoSchema.safeParse(file);

    if (!result.success) {
      const errorKey = result.error.issues[0]?.message;

      setPhotoError(
        (errorKey as ProfileValidationKey) || "photoInvalid"
      );

      input.value = "";
      return;
    }

    // Valid image
    setPhotoError(null);
    onPhotoChange(file);

    // Allow selecting the same file again
    input.value = "";
  }

  function handleRemovePhoto() {
    setPhotoError(null);
    onRemovePhoto();
  }

  return (
    <div className="flex flex-wrap items-center gap-4" dir="ltr">
      {/* Profile Avatar */}
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

      {/* Hidden File Input */}
      <Input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={handleFileChange}
        aria-label={t("uploadPhoto")}
      />

      {/* Photo Actions */}
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
          onClick={handleRemovePhoto}
          className="h-10 rounded-lg px-4 text-xs font-medium"
        >
          {t("removePhoto")}
        </Button>
      </div>

      {/* Photo Validation Error */}
      {photoError && (
        <p className="w-full text-xs text-red-500" role="alert">
          {t(photoError)}
        </p>
      )}

    </div>
  );
}
