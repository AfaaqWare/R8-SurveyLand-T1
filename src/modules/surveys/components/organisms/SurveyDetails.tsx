"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  CalendarDays,
  ClipboardList,
  Clock3,
  Copy,
  Eye,
  FileText,
  Link2,
  Pencil,
  Send,
  Trash2,
} from "@/assets/icons/icons";
import { ErrorState } from "@/core/ui-states";
import { graduationSurveyCover, notfound } from "@/assets/images/images";
import usePreviewSurvey from "@/modules/dashboard/hooks/usePreviewSurvey";
import type { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";
import type { SurveyStatus } from "@/modules/Admin/types/DashboardTypes";
import Notfoundsurvey from "@/modules/dashboard/UpdateSurvey/components/molecules/Notfoundsurvey";
import PreviewSurveySkeleton from "@/modules/dashboard/preview/components/molecules/PreviewSurveySkeleton";
import Button from "@/shared/components/atoms/Button";
import { Card } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import useDeleteSurvey from "../../hooks/useDeleteSurvey";
import { useAlert } from "@/shared/hooks/useAlert";
import useGetProfile from "@/modules/Admin/hooks/useGetProfile";

const questionPreviewLimit = 3;
const statusStyles: Record<SurveyStatus, string> = {
  draft: "bg-[#fff3d9] text-[#eda321]",
  published: "bg-[#e2f3eb] text-[#359e63]",
  closed: "ds-text-disabled bg-[#F0F2F6]",
};

function formatDate(value: string | null | undefined, locale: string, fallback: string) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function SurveyDetails({ id }: IdProps) {
  const t = useTranslations("mySurveys.UserDashboard.surveyDetails");
  const locale = useLocale();
  const router = useRouter();
  const { showAlert } = useAlert();
  const { data: profile } = useGetProfile();
  const { survey, questions, isLoading, isError, refetch, isNotFound } = usePreviewSurvey({ id });
  const { mutateAsync: deleteSurvey, isPending: isDeleting } = useDeleteSurvey();

  if (isLoading) return <PreviewSurveySkeleton />;

  if (isNotFound) {
    return (
      <Notfoundsurvey
        image={notfound}
        message={t("notFound")}
        actionLabel={t("back")}
        href="/dashboard/surveys"
      />
    );
  }

  if (isError || !survey) return <ErrorState onRetry={refetch} />;

  const previewHref = `/dashboard/surveys/${id}/preview`;
  const editHref = `/dashboard/surveys/${id}/editsurvey`;
  const publicHref = `/dashboard/survey/${id}`;
  const status = survey.status as SurveyStatus;
  const statusLabel = t(`statuses.${status}`);
  const date = (value: string | null | undefined) => formatDate(value, locale, t("notAvailable"));

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${publicHref}`);
      await showAlert("success", t("shareSuccess"));
    } catch {
      await showAlert("error", t("shareError"));
    }
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      icon: "warning",
      title: t("delete.confirmTitle"),
      text: t("delete.confirmText"),
      showCancelButton: true,
      confirmButtonText: t("delete.confirm"),
      cancelButtonText: t("delete.cancel"),
      confirmButtonColor: "var(--color-danger)",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteSurvey(id);
      await showAlert("success", t("delete.success"));
      router.push("/dashboard/surveys");
    } catch {
      await showAlert("error", t("delete.error"));
    }
  };

  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <Title size="lg" className="font-bold normal-case">
            {t("title")}
          </Title>
          <Text size="sm" variant="secondary">
            {t("subtitle")}
          </Text>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => router.push(previewHref)}>
            <Eye size={15} />
            {t("preview")}
          </Button>
          <Button variant="outline" size="sm" onClick={() => router.push(editHref)}>
            <Pencil size={15} />
            {t("edit")}
          </Button>
          <Button variant="primary" size="sm" onClick={handleShare}>
            <Send size={15} />
            {t("share")}
          </Button>
        </div>
      </div>

      <Card className="ds-border-card ds-bg-card grid gap-5 p-4 shadow-none md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-8 md:p-5">
        <div className="relative min-h-52 overflow-hidden rounded-lg bg-[var(--color-primary-100)] md:h-52">
          <Image
            src={survey.cover || graduationSurveyCover}
            alt={survey.title}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <span
            className={`ds-rounded-sm ds-text-xs ds-font-bold inline-flex w-fit items-center justify-center px-3 py-1 ${statusStyles[status]}`}
          >
            {statusLabel}
          </span>
          <Title size="md" className="font-bold normal-case">
            {survey.title}
          </Title>
          {survey.description && (
            <Text size="sm" variant="secondary" className="leading-6">
              {survey.description}
            </Text>
          )}
          <div className="ds-text-secondary flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <span className="flex items-center gap-2">
              <CalendarDays size={15} />
              {t("deadline", { date: date(survey.deadline) })}
            </span>
            <span className="flex items-center gap-2">
              <ClipboardList size={15} />
              {t("questionCount", { count: questions.length })}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={15} />
              {t("updatedAt", { date: date(survey.updatedAt) })}
            </span>
            <span className="flex items-center gap-2">
              <FileText size={15} />
              {t("createdBy", { name: profile?.name ?? t("unknownCreator") })}
            </span>
          </div>
        </div>
      </Card>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(190px,0.75fr)]">
        <Card className="ds-border-card ds-bg-card gap-4 p-4 shadow-none">
          <h2 className="ds-text-primary text-base font-bold">{t("overview.title")}</h2>
          <dl className="flex flex-col">
            <div className="ds-border-color flex items-center justify-between gap-3 border-b py-2.5 text-sm">
              <dt className="ds-text-secondary flex items-center gap-2">
                <Copy size={14} />
                {t("overview.surveyId")}
              </dt>
              <dd className="ds-text-primary max-w-36 truncate text-end" title={survey.id}>
                {survey.id}
              </dd>
            </div>
            <div className="ds-border-color flex items-center justify-between gap-3 border-b py-2.5 text-sm">
              <dt className="ds-text-secondary flex items-center gap-2">
                <FileText size={14} />
                {t("overview.status")}
              </dt>
              <dd className="ds-text-primary">{statusLabel}</dd>
            </div>
            <div className="ds-border-color flex items-center justify-between gap-3 border-b py-2.5 text-sm">
              <dt className="ds-text-secondary flex items-center gap-2">
                <CalendarDays size={14} />
                {t("overview.createdAt")}
              </dt>
              <dd className="ds-text-primary text-end">{date(survey.createdAt)}</dd>
            </div>
            <div className="ds-border-color flex items-center justify-between gap-3 border-b py-2.5 text-sm">
              <dt className="ds-text-secondary flex items-center gap-2">
                <Clock3 size={14} />
                {t("overview.updatedAt")}
              </dt>
              <dd className="ds-text-primary text-end">{date(survey.updatedAt)}</dd>
            </div>
            <div className="flex items-center justify-between gap-3 pt-2.5 text-sm">
              <dt className="ds-text-secondary flex items-center gap-2">
                <Link2 size={14} />
                {t("overview.link")}
              </dt>
              <dd className="ds-text-primary">
                {survey.status === "published" ? (
                  <Link href={publicHref} className="ds-text-primary hover:underline">
                    {t("overview.openLink")}
                  </Link>
                ) : (
                  t("notPublished")
                )}
              </dd>
            </div>
          </dl>
        </Card>

        <Card className="ds-border-card ds-bg-card gap-4 p-4 shadow-none">
          <div className="flex items-center justify-between gap-3">
            <h2 className="ds-text-primary text-base font-bold">
              {t("questions.title", { count: questions.length })}
            </h2>
            <Link href={previewHref} className="ds-text-primary text-xs font-semibold hover:underline">
              {t("questions.viewAll")}
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="ds-primary-200 ds-text-primary rounded-md px-3 py-2 text-xs font-medium">
              {t("questions.multipleChoice", {
                count: questions.filter(question => question.type === "mcq").length,
              })}
            </span>
            <span className="rounded-md bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
              {t("questions.textArea", {
                count: questions.filter(question => question.type === "textarea").length,
              })}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {questions.length > 0 && (
              <h3 className="ds-text-primary text-sm font-semibold">{t("questions.recent")}</h3>
            )}
            {questions.slice(0, questionPreviewLimit).map((question, index) => (
              <div
                key={question.qid}
                className="ds-border-color ds-bg-card flex items-center gap-3 rounded-md border p-2.5"
              >
                <span className="ds-bg-primary ds-text-white flex size-6 shrink-0 items-center justify-center rounded text-xs font-bold">
                  {index + 1}
                </span>
                <span className="ds-text-primary min-w-0 flex-1 truncate text-sm">
                  {question.questionText}
                </span>
                <span className="ds-primary-200 ds-text-primary shrink-0 rounded px-2 py-1 text-[10px]">
                  {question.type === "mcq"
                    ? t("questions.multipleChoiceLabel")
                    : t("questions.textAreaLabel")}
                </span>
              </div>
            ))}

            {questions.length === 0 && (
              <Text size="sm" variant="secondary" className="py-4 text-center">
                {t("questions.empty")}
              </Text>
            )}
          </div>
          {questions.length > questionPreviewLimit && (
            <Link
              href={previewHref}
              className="ds-text-primary flex items-center justify-center gap-2 text-xs font-semibold hover:underline"
            >
              {t("questions.viewAll")}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </Card>

        <Card className="ds-border-card ds-bg-card gap-3 p-4 shadow-none">
          <h2 className="ds-text-primary text-base font-bold">{t("actions.title")}</h2>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => router.push(editHref)}
          >
            <Pencil size={15} />
            {t("edit")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={handleShare}
          >
            <Send size={15} />
            {t("share")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => router.push(previewHref)}
          >
            <Eye size={15} />
            {t("preview")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="ds-text-danger w-full justify-start"
            disabled={isDeleting}
            onClick={handleDelete}
          >
            <Trash2 size={15} />
            {isDeleting ? t("delete.deleting") : t("delete.action")}
          </Button>
        </Card>
      </div>
    </section>
  );
}
