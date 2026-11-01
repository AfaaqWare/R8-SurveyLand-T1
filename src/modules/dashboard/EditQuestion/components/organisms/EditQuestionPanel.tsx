"use client";

import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { X } from "@/assets/icons/icons";
import { fieldClass } from "@/modules/Admin/components/formStyles";
import type { PreviewQuestion } from "@/modules/dashboard/types/PreviewType";
import type { UpdateQuestionPayload } from "@/modules/dashboard/types/QuestionTypes";
import {
  updateQuestionSchema,
  type UpdateQuestionValues,
} from "@/modules/dashboard/schema/UpdateQuestionSchema";
import { toFormValues, toPayload } from "@/modules/dashboard/utils/questionMappers";
import ChoicesEditor from "../molecules/ChoicesEditor";

type Props = {
  question: PreviewQuestion;
  number: number; // رقم السؤال بالقائمة (للشارة)
  onClose: () => void;
  onSubmit: (payload: UpdateQuestionPayload) => void;
  isSaving?: boolean;
  serverError?: string;
};

export default function EditQuestionPanel({
  question,
  number,
  onClose,
  onSubmit,
  isSaving = false,
  serverError,
}: Props) {
  const t = useTranslations("UserDashboard.editQuestion");
  const schema = useMemo(() => updateQuestionSchema(t), [t]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateQuestionValues>({
    resolver: zodResolver(schema),
    defaultValues: toFormValues(question),
  });

  useEffect(() => {
    reset(toFormValues(question));
  }, [question, reset]);

  const type = watch("type");

  const submit = (values: UpdateQuestionValues) => onSubmit(toPayload(values));

  return (
    <section
      aria-labelledby="edit-question-title"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      className="ds-bg-card ds-border-card ds-rounded-lg flex w-full flex-col gap-5 p-5"
    >
      {/* header */}
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2
            id="edit-question-title"
            className="text-lg font-semibold text-[color:var(--color-text-primary)]"
          >
            {t("title")}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="rounded-md p-1 text-[color:var(--color-text-secondary)] transition hover:opacity-70"
          >
            <X className="size-5" />
          </button>
        </div>
        <span className="w-fit rounded-md bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] px-2 py-0.5 text-[10px] font-medium text-[color:var(--color-primary)]">
          {t("badge", { number })}
        </span>
      </header>

      <form onSubmit={handleSubmit(submit)} noValidate className="flex flex-col gap-5">
        {/* type */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="question-type" className="text-sm font-semibold text-[color:var(--color-text-primary)]">
            {t("fields.type.label")}
          </label>
          <select
            id="question-type"
            disabled={isSaving}
            className={`${fieldClass} h-11`}
            {...register("type", {
              onChange: (e) => {
                // لو تحوّل لـ MCQ ومافي خيارات كفاية، نضيف خيارين فاضيين
                if (e.target.value === "mcq") {
                  const current = getValues("choices");
                  if (current.length < 2) {
                    const blanks = Array.from({ length: 2 - current.length }, () => ({ value: "" }));
                    setValue("choices", [...current, ...blanks], { shouldDirty: true });
                  }
                }
              },
            })}
          >
            <option value="mcq">{t("types.mcq")}</option>
            <option value="textarea">{t("types.textarea")}</option>
          </select>
        </div>

        {/* text */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="question-text" className="text-sm font-semibold text-[color:var(--color-text-primary)]">
            {t("fields.text.label")}
          </label>
          <textarea
            id="question-text"
            rows={3}
            placeholder={t("fields.text.placeholder")}
            aria-invalid={!!errors.questionText}
            aria-describedby={errors.questionText ? "question-text-error" : undefined}
            disabled={isSaving}
            className={`${fieldClass} resize-none py-3`}
            {...register("questionText")}
          />
          {errors.questionText && (
            <p id="question-text-error" role="alert" className="text-xs text-[color:var(--color-error)]">
              {errors.questionText.message}
            </p>
          )}
        </div>

        {/* choices (MCQ فقط) */}
        {type === "mcq" && (
          <ChoicesEditor control={control} register={register} errors={errors} disabled={isSaving} />
        )}

        {/* required */}
        <label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-[color:var(--color-text-primary)]">
          <input
            type="checkbox"
            disabled={isSaving}
            className="size-4 accent-(--color-primary)"
            {...register("isRequired")}
          />
          {t("fields.required")}
        </label>

        {/* question id (للقراءة فقط) */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="question-id" className="text-sm font-semibold text-[color:var(--color-text-primary)]">
            {t("fields.questionId")}
          </label>
          <input
            id="question-id"
            type="text"
            dir="ltr"
            readOnly
            value={question.qid}
            className={`${fieldClass} h-10 cursor-default text-xs opacity-80`}
          />
        </div>

        {serverError && (
          <p role="alert" className="text-sm text-[color:var(--color-error)]">
            {serverError}
          </p>
        )}

        {/* actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={isSaving}
            className="h-10 flex-1 rounded-[var(--radius-md)] border border-[color:var(--border-color)] text-sm font-medium text-[color:var(--color-text-primary)] transition hover:opacity-80 disabled:opacity-50"
          >
            {t("cancel")}
          </button>
          <button
            type="submit"
            disabled={!isDirty || isSaving}
            aria-busy={isSaving}
            className="h-10 flex-[1.4] rounded-[var(--radius-md)] bg-[var(--color-primary)] text-sm font-semibold text-[color:var(--color-text-panel)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSaving ? t("updating") : t("update")}
          </button>
        </div>
      </form>
    </section>
  );
}