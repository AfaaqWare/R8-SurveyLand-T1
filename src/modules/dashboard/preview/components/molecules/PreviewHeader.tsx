"use client";
import { useTranslations } from "next-intl";
import { Pencil, Send } from "@/assets/icons/icons";
import SurveyHeader from "@/modules/dashboard/components/molecules/SurveyHeader";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";
import { useRouter } from "next/navigation";
import { useAlert } from "@/shared/hooks/useAlert";

const PreviewHeader = ({ id }: IdProps) => {
  const t = useTranslations("UserDashboard.previewSurvey");
  const router = useRouter();
  const { showAlert } = useAlert();

  const handleShare = async () => {
    const surveyUrl = `${window.location.origin}/dashboard/survey/${id}`;

    try {
      await navigator.clipboard.writeText(surveyUrl);
      showAlert("success", t("copySuccess"));
    } catch {
      showAlert("error", t("copyError"));
    }
  };
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <SurveyHeader subtitle={t("subtitle")} title={t("title")} />

      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push(`/dashboard/surveys/${id}/edit-question`)}
        >
          <Icon IconComponent={Pencil} size={15} variant="teal" />
          {t("edit")}
        </Button>

        <Button variant="primaryWhite" size="sm" onClick={handleShare}>
          <Icon IconComponent={Send} size={15} color="text-white"/>
          {t("share")}
        </Button>
      </div>
    </div>
  );
};

export default PreviewHeader;
