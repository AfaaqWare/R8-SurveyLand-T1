"use client";

import { Eye, Link2, Pencil, Send, Trash2 } from "@/assets/icons/icons";
import useDeleteSurvey from "../../hooks/useDeleteSurvey";
import { useRouter } from "next/navigation";
import { useAlert } from "@/shared/hooks/useAlert";
import { useTranslations } from "next-intl";

const itemClass = "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm cursor-pointer";

export default function SurveyMenu({ surveyId }: { surveyId: string }) {
  const { mutate, isPending } = useDeleteSurvey();
  const t = useTranslations("mySurveys");
  const { showAlert } = useAlert();
  const router = useRouter();

  const handleShare = async () => {
    const surveyUrl = `${window.location.origin}/dashboard/surveys/${surveyId}`;

    try {
      await navigator.clipboard.writeText(surveyUrl);
      showAlert("success", t("card.copySuccess"));
    } catch {
      showAlert("error", t("copyError"));
    }
  };
  return (
    <div
      role="menu"
      className="ds-bg-card r absolute top-10 right-0 z-20 w-40 overflow-hidden rounded-xl py-1.5 shadow-lg"
    >
      <button
        type="button"
        role="menuitem"
        className={itemClass}
        onClick={() => router.push(`/dashboard/surveys/${surveyId}/preview`)}
      >
        <Eye size={16} />
        {t("card.preview")}
      </button>
      <button
        type="button"
        role="menuitem"
        className={itemClass}
        onClick={() => router.push(`/dashboard/surveys/${surveyId}/editsurvey`)}
      >
        <Pencil size={16} />
        {t("card.updated")}
      </button>
      <button type="button" role="menuitem" className={itemClass} onClick={handleShare}>
        <Send size={16} />
        {t("card.publish")}
      </button>
      <button type="button" role="menuitem" className={itemClass} onClick={handleShare}>
        <Link2 size={16} />
        {t("card.copyLink")}
      </button>
      <button
        type="button"
        role="menuitem"
        disabled={isPending}
        onClick={() => mutate(surveyId)}
        className={`${itemClass} ds-text-danger disabled:cursor-not-allowed disabled:opacity-50`}
      >
        <Trash2 size={16} />
        Delete
      </button>
    </div>
  );
}
