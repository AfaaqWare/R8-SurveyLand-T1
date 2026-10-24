"use client";
import { UpdateSurveyValues } from "@/modules/dashboard/schema/UpdateSurveySchema";
import { IdProps } from "@/modules/dashboard/types/UpdateSurveyType";
import { Card } from "@/shared/components/atoms/Card";
import FormField from "@/shared/components/molecules/FormField";
import { useTranslations } from "next-intl";
import FieldWrapper from "./FieldWrapper";
import TextArea from "@/shared/components/atoms/TextArea";
import SurveyFormActions from "./UpdateFormAction";
import { status } from "@/modules/dashboard/utils/UpdateSurveyData";
import ImageCard from "./ImageCard";
import useUpdateSurvey from "@/modules/dashboard/hooks/useUpdateSurvey";
import EditSurveySkeleton from "./EditSurveySkeleton";
import { ErrorState } from "@/core/ui-states";
import SurveyHeader from "@/modules/dashboard/components/molecules/SurveyHeader";
import Notfoundsurvey from "./Notfoundsurvey";
import notfound from "@/assets/images/notfound.png";

const Surveyform = ({ id }: IdProps) => {
  const t = useTranslations("UserDashboard.editSurvey");
  const {
    control,
    register,
    isLoading,
    isError,
    cover,
    onSubmit,
    disableSave,
    reset,
    isSaving,
    refetch,
    errors,
    isNotFound,
  } = useUpdateSurvey({
    id,
  });

  if (isLoading) return <EditSurveySkeleton />;
  if (isNotFound)
    return (
      <Notfoundsurvey
        image={notfound}
        message={t("notFound.title")}
        actionLabel={t("notFound.back")}
        href="/dashboard/surveys"
      />
    );
  if (isError) return <ErrorState onRetry={refetch} />;

  return (
    <div className="flex flex-col">
      <SurveyHeader subtitle={t("subtitle")} title={t("title")} />
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-5 p-4 shadow-none">
            <FormField<UpdateSurveyValues>
              control={control}
              name="title"
              label={t("fields.title.label")}
              hint={t("fields.title.hint")}
              required
              translateError={key => t(key)}
              labelClassName="!font-bold"
              className="ds-border-card"
            />

            <FieldWrapper
              label={t("fields.description.label")}
              hint={t("fields.description.hint")}
              htmlFor="description"
              required
              error={errors.description?.message ? t(errors.description.message) : undefined}
            >
              <TextArea
                id="description"
                rows={4}
                {...register("description")}
                className="ds-border-card"
              />
            </FieldWrapper>

            <FormField<UpdateSurveyValues>
              control={control}
              name="deadline"
              type="datetime-local"
              label={t("fields.deadline.label")}
              hint={t("fields.deadline.hint")}
              required
              translateError={key => t(key)}
              labelClassName="!font-bold"
              className="ds-border-card"
            />

            <FieldWrapper
              label={t("fields.status.label")}
              hint={t("fields.status.hint")}
              htmlFor="status"
              required
            >
              <select
                id="status"
                className={`${"ds-border-card ds-text-primary ds-text-sm w-full rounded-md border px-3 outline-none"} h-10`}
                {...register("status")}
              >
                {status.map(status => (
                  <option key={status} value={status} className="ds-text-black">
                    {t(`statuses.${status}`)}
                  </option>
                ))}
              </select>
            </FieldWrapper>
          </Card>

          <ImageCard
            title={t("cover.title")}
            hint={t("cover.hint")}
            emptyLabel={t("cover.empty")}
            cover={cover ?? null}
          />
        </div>

        <SurveyFormActions
          cancelLabel={t("cancel")}
          saveLabel={t("save")}
          disableSave={disableSave}
          onCancel={() => reset()}
          isPending={isSaving}
        />
      </form>
    </div>
  );
};

export default Surveyform;
