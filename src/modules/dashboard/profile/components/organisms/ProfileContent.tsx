
"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Eye, EyeOff } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";

import {
  useForm,
  type FieldPath,
  type FieldPathValue,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  profileSchema,
  type ProfileValues,
  type ProfileValidationKey,
} from "@/modules/dashboard/schema/ProfileSchema";

import Heading from "@/shared/components/molecules/Heading";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import Input from "@/shared/components/atoms/Input";

import ProfileField from "../molecules/ProfileField";
import ProfilePhoto from "../molecules/ProfilePhoto";

const inputClassName =
  "h-[40px] ds-bg-form ds-text-primary ds-border-input";

const selectClassName =
  "h-[40px] w-full appearance-none rounded-lg border ds-border-input ds-bg-form px-3 pr-9 ds-text-xs ds-text-primary outline-none focus:ds-focus";

export default function ProfileContent() {
  const t = useTranslations("DashboardProfile");

  // UI State
  const [showPassword, setShowPassword] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // React Hook Form + Zod
  const {
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      userName: "Frederick Hane",
      phoneNumber: "520-631-1454",
      email: "Gabriella.McKenzie71@gmail.com",
      country: "netherlands-antilles",
      password: "",
      language: "en",
    },
  });

  const form = watch();

  // Update controlled fields
  const updateField = <TField extends FieldPath<ProfileValues>>(
    field: TField,
    value: FieldPathValue<ProfileValues, TField>
  ) => {
    setValue(field, value, {
      shouldDirty: true,
      shouldValidate: true,
    });

    setFeedback(null);
  };

  // Release temporary image URLs
  useEffect(() => {
    return () => {
      if (photoPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  // Runs only when Zod validation succeeds
  const onValidSubmit = () => {
    // Profile API is not connected yet.
    setFeedback(t("apiNotConnected"));
  };

  // Translated validation errors
  const renderError = (message?: string) => {
    if (!message) return null;

    return (
      <p className="mt-1 text-xs text-red-500" role="alert">
        {t(message as ProfileValidationKey)}
      </p>
    );
  };

  return (
    <div className="w-full px-4 py-4 md:py-5">
      <section className="ds-bg-card ds-border-card ds-rounded-2xl ds-shadow-card ds-bg-card ds-border-md mx-auto w-full max-w-190 p-5 sm:p-6">
        {/* Header */}
        <Heading
          title={t("title")}
          text={t("subtitle")}
          className="ds-font-sans gap-1 text-left"
          titleClassName="ds-font-heading font-bold"
          textClassName="ds-text-secondary"
        />

        {/* Profile Photo */}
        <div className="mt-4">
          <ProfilePhoto
            photoPreview={photoPreview}
            onPhotoChange={(file) => {
              setPhotoPreview(URL.createObjectURL(file));
              setFeedback(null);
            }}
            onRemovePhoto={() => {
              setPhotoPreview(null);
              setFeedback(null);
            }}
          />
        </div>

        {/* Profile Form */}
        <form
          onSubmit={handleSubmit(onValidSubmit)}
          noValidate
          className="mt-5"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">

            {/* User Name */}
            <ProfileField id="userName" label={t("userName")}>
              <Input
                id="userName"
                name="userName"
                type="text"
                size="sm"
                autoComplete="name"
                value={form.userName}
                onChange={(event) =>
                  updateField("userName", event.target.value)
                }
                onBlur={() => void trigger("userName")}
                className={inputClassName}
                aria-invalid={Boolean(errors.userName)}
                required
              />

              {renderError(errors.userName?.message)}
            </ProfileField>

            {/* Phone Number */}
            <ProfileField id="phoneNumber" label={t("phoneNumber")}>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                size="sm"
                autoComplete="tel"
                value={form.phoneNumber}
                onChange={(event) =>
                  updateField("phoneNumber", event.target.value)
                }
                onBlur={() => void trigger("phoneNumber")}
                className={inputClassName}
                aria-invalid={Boolean(errors.phoneNumber)}
                required
              />

              {renderError(errors.phoneNumber?.message)}
            </ProfileField>

            {/* Email */}
            <ProfileField id="email" label={t("email")}>
              <Input
                id="email"
                name="email"
                type="email"
                size="sm"
                autoComplete="email"
                value={form.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                onBlur={() => void trigger("email")}
                className={inputClassName}
                aria-invalid={Boolean(errors.email)}
                required
              />

              {renderError(errors.email?.message)}
            </ProfileField>

            {/* Country */}
            <ProfileField id="country" label={t("country")}>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={(event) =>
                    updateField("country", event.target.value)
                  }
                  onBlur={() => void trigger("country")}
                  className={selectClassName}
                  aria-invalid={Boolean(errors.country)}
                  required
                >
                  <option value="">
                    {t("countryPlaceholder")}
                  </option>

                  <option value="netherlands-antilles">
                    {t("countryNetherlands")}
                  </option>

                  <option value="egypt">
                    {t("countryEgypt")}
                  </option>

                  <option value="united-states">
                    {t("countryUnitedStates")}
                  </option>

                  <option value="united-kingdom">
                    {t("countryUnitedKingdom")}
                  </option>
                </select>

                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className="ds-text-secondary pointer-events-none absolute inset-e-3 top-1/2 -translate-y-1/2"
                />
              </div>

              {renderError(errors.country?.message)}
            </ProfileField>

            {/* Password */}
            <ProfileField id="password" label={t("password")}>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                size="sm"
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.password}
                onChange={(event) =>
                  updateField("password", event.target.value)
                }
                onBlur={() => void trigger("password")}
                className={inputClassName}
                aria-invalid={Boolean(errors.password)}
                rightAddon={
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    aria-label={
                      showPassword
                        ? t("hidePassword")
                        : t("showPassword")
                    }
                    aria-pressed={showPassword}
                    className="ds-text-secondary flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </Button>
                }
              />

              {renderError(errors.password?.message)}
            </ProfileField>

            {/* Language */}
            <ProfileField id="language" label={t("language")}>
              <div className="relative">
                <select
                  id="language"
                  name="language"
                  value={form.language}
                  onChange={(event) =>
                    updateField(
                      "language",
                      event.target.value as ProfileValues["language"]
                    )
                  }
                  onBlur={() => void trigger("language")}
                  className={selectClassName}
                  aria-invalid={Boolean(errors.language)}
                  required
                >
                  <option value="en">
                    {t("languageEnglish")}
                  </option>

                  <option value="ar">
                    {t("languageArabic")}
                  </option>
                </select>

                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className="ds-text-secondary pointer-events-none absolute inset-e-3 top-1/2 -translate-y-1/2"
                />
              </div>

              {renderError(errors.language?.message)}
            </ProfileField>
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              role="status"
              aria-live="polite"
              className="ds-bg-form ds-rounded-md ds-p-sm mt-3"
            >
              <Text size="sm" variant="secondary">
                {feedback}
              </Text>
            </div>
          )}

          {/* Save Changes */}
          <div className="mt-5">
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="h-8 px-5"
            >
              {t("saveChanges")}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
