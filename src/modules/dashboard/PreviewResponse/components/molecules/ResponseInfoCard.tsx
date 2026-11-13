import Icon from "@/shared/components/atoms/Icon";
import Title from "@/shared/components/atoms/Title";
import { Info } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";
import React from "react";
import ResponseInfoInput from "./ResponseInfoInput";
import { ResponseInfo } from "@/modules/dashboard/utils/PreviewResponse";
import { ResponseInfoProps } from "@/modules/dashboard/types/PreviewResponse";

const ResponseInfoCard = ({ data }: ResponseInfoProps) => {
  const values: Record<string, string> = {
    surveyId: data.id || "",
    submittedAt: new Date(data.submittedAt).toLocaleDateString() || "",
    respondentName: data.respondentName || "",
  };

  const t = useTranslations("mySurveys.UserDashboard.previewResponse.info");
  return (
    <div className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-5 p-4 shadow-none">
      <div className="flex items-center gap-3">
        <Icon IconComponent={Info} variant="teal" size="sm" />
        <Title size="md">{t("title")}</Title>
      </div>

      <div className="flex min-w-0 flex-col gap-2">
        {ResponseInfo.map(item => (
          <ResponseInfoInput
            key={item.key}
            label={t(item.key)}
            value={values[item.key]}
            IconComponent={item.IconComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponseInfoCard;
