"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

import { Send } from "@/assets/icons/icons";
import { getApiErrorMessage } from "@/shared/utils/getApiErrorMessage";
import FormField from "@/modules/Admin/components/molecules/FormField";
import ImageDropzone from "@/modules/Admin/components/molecules/ImageDropzone";
import { useCreateSurvey } from "@/modules/Admin/hooks/useCreateSurvey";
import {
  createSurveySchema,
  getToday,
  type CreateSurveyValues,
} from "@/modules/Admin/utils/createSurveySchema";

const SURVEYS_ROUTE = "/dashboard/surveys"; // TODO: تأكد من المسار
const SURVEYS_QUERY_KEY = ["survey", "list"];

export default function CreateSurveyForm() {
  const t = useTranslations("createSurvey");
  const router = useRouter();
  const queryClient = useQueryClient();
  const [serverError, setServerError] = useState("");

  const { mutate, isPending } = useCreateSurvey();
  const schema = useMemo(() => createSurveySchema(t), [t]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateSurveyValues> ({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      deadline: getToday(),
      image: undefined,
    },
  });

  const imageValue = watch("image");

  const onSubmit = (values: CreateSurveyValues) => {
    setServerError("");
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: SURVEYS_QUERY_KEY });
        router.push(SURVEYS_ROUTE);
      },
      onError: (err) => setServerError(getApiErrorMessage(err, t("errors.createFailed"))),
    });
  };

  return (
    <div className="create-survey-page">
      <header className="create-survey-header">
        <h1 className="create-survey-title">{t("title")}</h1>
        <p className="create-survey-subtitle">{t("subtitle")}</p>
      </header>

      <div className="create-survey-card">
        <form className="create-survey-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormField
            id="title"
            label={t("fields.title.label")}
            hint={t("fields.title.hint")}
            required
            error={errors.title?.message}
          >
            <input
              id="title"
              type="text"
              placeholder={t("fields.title.placeholder")}
              disabled={isPending}
              className="w-full rounded-xl border border-(--border-color-muted) bg-(--color-form) px-3 py-2.5 text-sm text-(--color-text-primary) outline-none transition focus:border-(--color-primary) focus:ring-2 focus:ring-[color:var(--color-primary)]/20 disabled:opacity-60"
              {...register("title")}
            />
          </FormField>

          <FormField
            id="description"
            label={t("fields.description.label")}
            hint={t("fields.description.hint")}
            required
            error={errors.description?.message}
          >
            <textarea
              id="description"
              rows={5}
              placeholder={t("fields.description.placeholder")}
              disabled={isPending}
              className="w-full rounded-xl border border-(--border-color-muted) bg-(--color-form) px-3 py-2.5 text-sm text-(--color-text-primary) outline-none transition focus:border-(--color-primary) focus:ring-2 focus:ring-[color:var(--color-primary)]/20 disabled:opacity-60"
              {...register("description")}
            />
          </FormField>

          <FormField
            id="deadline"
            label={t("fields.deadline.label")}
            hint={t("fields.deadline.hint")}
            required
            error={errors.deadline?.message}
          >
            <input
              id="deadline"
              type="date"
              min={getToday()}
              suppressHydrationWarning
              disabled={isPending}
              className="create-survey-date-input"
              {...register("deadline")}
            />
          </FormField>

          {/* ImageDropzone بيعرض رسالة الخطأ بنفسه، فما لازم FormField حواليه */}
          <ImageDropzone
            value={imageValue}
            onChange={(file) =>
              setValue("image", file, { shouldValidate: true, shouldDirty: true })
            }
            error={errors.image?.message}
            disabled={isPending}
          />

          {serverError && (
            <p role="alert" className="text-sm text-(--color-error)">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            aria-busy={isPending}
            className="flex w-full max-w-62.5 items-center justify-center gap-3 self-end rounded-xl bg-(--color-primary) px-3 py-2 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? t("submitting") : t("submit")}
            <Send className="size-5 rtl:-scale-x-100" />
          </button>
        </form>
      </div>
    </div>
  );
}