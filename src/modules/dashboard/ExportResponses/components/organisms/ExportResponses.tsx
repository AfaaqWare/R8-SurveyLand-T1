"use client";

import { ErrorState } from "@/core/ui-states";
import { notfound } from "@/assets/images/images";
import type { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";
import useExportResponses from "@/modules/dashboard/hooks/useExportResponses";
import Notfoundsurvey from "@/modules/dashboard/UpdateSurvey/components/molecules/Notfoundsurvey";
import PreviewSurveySkeleton from "@/modules/dashboard/preview/components/molecules/PreviewSurveySkeleton";
import { useTranslations } from "next-intl";
import ExportHeader from "../molecules/ExportHeader";
import ExportSettings from "../molecules/ExportSettings";
import ResponsesPreview from "../molecules/ResponsesPreview";

const ExportResponses = ({ id }: IdProps) => {
  const t = useTranslations("mySurveys.UserDashboard.exportResponses");
  const {
    rows,
    questionHeaders,
    questionCount,
    responseCount,
    page,
    pageSize,
    totalPages,
    total,
    setPage,
    exportFile,
    isExporting,
    isLoading,
    isError,
    isNotFound,
    refetch,
  } = useExportResponses({ id });

  if (isLoading) return <PreviewSurveySkeleton />;
  if (isNotFound) {
    return (
      <Notfoundsurvey
        image={notfound}
        message={t("notFound.title")}
        actionLabel={t("notFound.back")}
        href="/dashboard/surveys"
      />
    );
  }
  if (isError) return <ErrorState onRetry={refetch} />;

  return (
    <section className="flex w-full flex-col gap-6">
      <ExportHeader id={id} />

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <ResponsesPreview
          rows={rows}
          questionHeaders={questionHeaders}
          questionCount={questionCount}
          responseCount={responseCount}
          page={page}
          pageSize={pageSize}
          totalPages={totalPages}
          total={total}
          onPageChange={setPage}
        />

        <ExportSettings onExport={exportFile} isExporting={isExporting} />
      </div>
    </section>
  );
};

export default ExportResponses;
