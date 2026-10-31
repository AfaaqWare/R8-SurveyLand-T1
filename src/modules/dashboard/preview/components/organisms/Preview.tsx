"use client";
import { ErrorState } from "@/core/ui-states";
import type { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";
import PreviewHeader from "../molecules/PreviewHeader";
import PreviewQuestions from "../molecules/PreviewQuestions";
import PreviewOverview from "../molecules/PreviewOverview";
import PreviewSurveySkeleton from "../molecules/PreviewSurveySkeleton";
import usePreviewSurvey from "@/modules/dashboard/hooks/usePreviewSurvey";
import Notfoundsurvey from "@/modules/dashboard/UpdateSurvey/components/molecules/Notfoundsurvey";
import { notfound } from "@/assets/images/images";
import { useTranslations } from "next-intl";

const Preview = ({ id }: IdProps) => {
  const t = useTranslations("UserDashboard.previewSurvey");
  const {
    survey,
    questions,
    total,
    mcqCount,
    textareaCount,
    requiredCount,
    isLoading,
    isError,
    refetch,
    isNotFound,
  } = usePreviewSurvey({ id });

  if (isLoading) return <PreviewSurveySkeleton />;
  if (isNotFound)
    return (
      <Notfoundsurvey
        image={notfound}
        message={t("notFound.title")}
        actionLabel={t("notFound.back")}
        href="/dashboard/surveys"
      />
    );
  if (isError || !survey) return <ErrorState onRetry={refetch} />;

  return (
    <section className="flex w-full flex-col gap-6">
      <PreviewHeader id={id} />

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <PreviewQuestions
          title={survey.title}
          description={survey.description}
          deadline={survey.deadline}
          questions={questions}
        />

        <PreviewOverview
          total={total}
          mcqCount={mcqCount}
          textareaCount={textareaCount}
          requiredCount={requiredCount}
          updatedAt={survey.updatedAt}
        />
      </div>
    </section>
  );
};

export default Preview;
