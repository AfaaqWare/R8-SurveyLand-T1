"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FileSpreadsheet, Info, Lock, Settings } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import { Card } from "@/shared/components/atoms/Card";
import Checkbox from "@/shared/components/atoms/Checkbox";
import Input from "@/shared/components/atoms/Input";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import type { ExportFileSettings } from "@/modules/dashboard/types/ExportResponses";

export type ExportSettingsValues = ExportFileSettings;

const INCLUDE_FIELDS = [
  { key: "name", label: "includeName" },
  { key: "email", label: "includeEmail" },
  { key: "submission", label: "includeSubmission" },
  { key: "answers", label: "includeAnswers" },
] as const;

type IncludeKey = (typeof INCLUDE_FIELDS)[number]["key"];

interface ExportSettingsProps {
  onExport?: (values: ExportSettingsValues) => void;
  isExporting?: boolean;
}

const initialIncluded: Record<IncludeKey, boolean> = {
  name: true,
  email: true,
  submission: true,
  answers: true,
};

const ExportSettings = ({ onExport, isExporting = false }: ExportSettingsProps) => {
  const t = useTranslations("mySurveys.UserDashboard.exportResponses.settings");
  const [included, setIncluded] = useState(initialIncluded);
  const [fileName, setFileName] = useState("");

  const handleExport = () => {
    onExport?.({
      fileName: fileName.trim(),
      includeName: included.name,
      includeEmail: included.email,
      includeSubmission: included.submission,
      includeAnswers: included.answers,
    });
  };

  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-4 p-4 shadow-none">
      <div className="flex items-center gap-2">
        <Settings className="ds-text-primary size-5" />
        <Title size="sm" className="font-bold">
          {t("title")}
        </Title>
      </div>

      <Text size="sm" variant="secondary">
        {t("select")}
      </Text>

      <div className="flex flex-col gap-3">
        {INCLUDE_FIELDS.map(field => (
          <Checkbox
            key={field.key}
            label={t(field.label)}
            checked={included[field.key]}
            onChange={event =>
              setIncluded(current => ({ ...current, [field.key]: event.target.checked }))
            }
          />
        ))}
      </div>

      <div className="border-t border-[var(--border-color)] pt-4">
        <Input
          label={t("fileName")}
          placeholder={t("fileNamePlaceholder")}
          value={fileName}
          onChange={event => setFileName(event.target.value)}
          labelClassName="!font-bold"
        />
      </div>

      <div className="ds-bg-teal-soft flex items-start gap-2 rounded-lg p-3">
        <Info className="ds-text-teal mt-0.5 size-4 shrink-0" />
        <Text size="xs">{t("format")}</Text>
      </div>

      <Button
        type="button"
        variant="primaryWhite"
        isFullWidth
        onClick={handleExport}
        disabled={isExporting}
      >
        <FileSpreadsheet className="size-4" />
        {isExporting ? t("exporting") : t("export")}
      </Button>

      <div className="flex items-center justify-center gap-2">
        <Lock className="ds-text-secondary size-3.5" />
        <Text size="xs" variant="secondary">
          {t("secure")}
        </Text>
      </div>
    </Card>
  );
};

export default ExportSettings;
