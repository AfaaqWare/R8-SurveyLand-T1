import Button from "@/shared/components/atoms/Button";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  onSave: () => void;
}

const FormActions = ({ onSave }: Props) => {
  const t = useTranslations("dashboard.common");
  return (
    <div className="ds-bg-card ds-border-sm ds-rounded-lg ds-p-lg flex items-center justify-end gap-3">
      <Button variant="outline" size="sm">
        {t("cancel")}
      </Button>
      <Button variant="primary" size="sm" onClick={onSave}>
        {t("save")}
      </Button>
    </div>
  );
};

export default FormActions;
