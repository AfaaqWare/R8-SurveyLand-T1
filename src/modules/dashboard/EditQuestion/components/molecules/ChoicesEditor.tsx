"use client";

import { useTranslations } from "next-intl";
import {
  useFieldArray,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";

import { CirclePlus, X } from "@/assets/icons/icons";
import { fieldClass } from "@/modules/Admin/components/formStyles";
import { MIN_CHOICES, type UpdateQuestionValues } from "@/modules/dashboard/schema/UpdateQuestionSchema";

type Props = {
  control: Control<UpdateQuestionValues>;
  register: UseFormRegister<UpdateQuestionValues>;
  errors: FieldErrors<UpdateQuestionValues>;
  disabled?: boolean;
};

export default function ChoicesEditor({ control, register, errors, disabled }: Props) {
  const t = useTranslations("UserDashboard.editQuestion.choices");
  const { fields, append, remove } = useFieldArray({ control, name: "choices" });

  const rootError = errors.choices?.message ?? errors.choices?.root?.message;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-[color:var(--color-text-primary)]">{t("label")}</p>

      <ul className="flex flex-col gap-2.5">
        {fields.map((field, index) => {
          const rowError = errors.choices?.[index]?.value?.message;
          return (
            <li key={field.id} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-color)] text-xs text-[color:var(--color-text-secondary)]"
                >
                  {index + 1}
                </span>

                <input
                  type="text"
                  placeholder={t("placeholder", { number: index + 1 })}
                  aria-label={t("placeholder", { number: index + 1 })}
                  aria-invalid={!!rowError}
                  disabled={disabled}
                  className={`${fieldClass} h-10`}
                  {...register(`choices.${index}.value` as const)}
                />

                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={disabled || fields.length <= MIN_CHOICES}
                  aria-label={t("remove", { number: index + 1 })}
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-error)] text-[color:var(--color-error)] transition hover:bg-[color-mix(in_srgb,var(--color-error)_12%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <X className="size-3.5" />
                </button>
              </div>
              {rowError && (
                <p role="alert" className="ps-9 text-xs text-[color:var(--color-error)]">
                  {rowError}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {rootError && (
        <p role="alert" className="text-xs text-[color:var(--color-error)]">
          {rootError}
        </p>
      )}

      <button
        type="button"
        onClick={() => append({ value: "" })}
        disabled={disabled}
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[color:var(--color-primary)] transition hover:opacity-80 disabled:opacity-50"
      >
        <CirclePlus className="size-5" />
        {t("add")}
      </button>
    </div>
  );
}