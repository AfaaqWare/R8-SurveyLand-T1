"use client";
import SurveyHeader from "@/modules/dashboard/components/molecules/SurveyHeader";
import { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";
import { useTranslations } from "next-intl";
import ResponseInfoCard from "../molecules/ResponseInfoCard";
import useGetPreviewResponse from "@/modules/dashboard/hooks/useGetPreviewResponse";
import PreviewResponseSkelton from "../molecules/PreviewResponseSkelton";
import ErrorState from "@/core/ui-states/ErrorState";
import ResponseAnswer from "../molecules/ResponseAnswer";
import useGetSurvey from "@/modules/dashboard/hooks/useGetSurvey";
import Notfoundsurvey from "@/modules/dashboard/UpdateSurvey/components/molecules/Notfoundsurvey";
import { notfound } from "@/assets/images/images";

const PreviewResponse = ({ id }: IdProps) => {
  const t = useTranslations("mySurveys.UserDashboard.previewResponse");

  const {
    data: previewInfo,
    isLoading,
    isError,
    refetch,
    notFound,
  } = useGetPreviewResponse({ id });

  const surveyId = previewInfo?.data?.surveyId;
  const { data: surveyInfo, isLoading: isSurveyLoading } = useGetSurvey({ id: surveyId ?? "" });

  if (isLoading || isSurveyLoading) {
    return <PreviewResponseSkelton />;
  }

  if (notFound) {
    return (
      <Notfoundsurvey
        image={notfound}
        message={t("notFound.title")}
        actionLabel={t("notFound.back")}
        href="/dashboard/surveys"
      />
    );
  }

  if (isError || !previewInfo) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  return (
    <div>
      <SurveyHeader subtitle={t("subtitle")} title={t("title")} />
      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <ResponseInfoCard data={previewInfo.data} />
        <ResponseAnswer
          questions={surveyInfo?.questions ?? []}
          answers={previewInfo.data.answers}
        />
      </div>
    </div>
  );
};

export default PreviewResponse;
