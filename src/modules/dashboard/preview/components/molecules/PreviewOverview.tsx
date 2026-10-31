import {  useTranslations } from "next-intl";
import { Card } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

interface PreviewOverviewProps {
  total: number;
  mcqCount: number;
  textareaCount: number;
  requiredCount: number;
  updatedAt: string;
}

const PreviewOverview = ({
  total,
  mcqCount,
  textareaCount,
  requiredCount,
  updatedAt,
}: PreviewOverviewProps) => {
  const t = useTranslations("UserDashboard.previewSurvey.overview");

  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-4 p-4 shadow-none">
      <Title size="sm">{t("title")}</Title>

      <div className="flex flex-col gap-1">
        <Text size="xs" variant="secondary">
          {t("totalQuestions")}
        </Text>
        <Text size="sm" className="font-bold">
          {total}
        </Text>
      </div>

      <div className="flex flex-col gap-2">
        <Text size="xs" variant="secondary">
          {t("questionTypes")}
        </Text>

        <div className="flex items-center gap-3">
          <span className="ds-bg-green-soft ds-text-green ds-text-xs rounded-md px-2 py-1 font-medium">
            {t("textarea")}
          </span>
          <Text size="sm" className="font-bold">
            {textareaCount}
          </Text>
        </div>

        <div className="flex items-center gap-3">
          <span className="ds-bg-purple-soft ds-text-purple ds-text-xs rounded-md px-2 py-1 font-medium">
            {t("mcq")}
          </span>
          <Text size="sm" className="font-bold">
            {mcqCount}
          </Text>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Text size="xs" variant="secondary">
          {t("requiredQuestions")}
        </Text>
        <Text size="sm" className="font-bold">
          {requiredCount}
        </Text>
      </div>

      <div className="flex flex-col gap-1">
        <Text size="xs" variant="secondary">
          {t("lastUpdated")}
        </Text>
        <Text size="sm" className="font-bold">
          {new Date(updatedAt).toLocaleDateString()}
        </Text>
      </div>

    </Card>
  );
};

export default PreviewOverview;
