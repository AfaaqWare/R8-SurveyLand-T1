import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/shared/components/atoms/Card";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import SurveyChart from "./SurveyChart";
import SurveyChartInfo from "./SurveyChartInfo";
import { statusItems } from "../../utils/DashboardData";

interface SurveyChartCardProps {
  title: string;
  counts: { draft: number; published: number; closed: number };
  startAngle?: number;
  centerIcon?: LucideIcon;
}

const SurveyChartCard = ({ title, counts, startAngle, centerIcon }: SurveyChartCardProps) => {
  const t = useTranslations("dashboard.home");

  const total = counts.draft + counts.published + counts.closed;

  const chartData = statusItems.map(item => ({
    name: t(`status.${item.key}`),
    value: counts[item.key],
    fill: item.color,
  }));

  const infoItems = statusItems.map(item => ({
    label: t(`status.${item.key}`),
    value: counts[item.key],
    percent: total ? ((counts[item.key] / total) * 100).toFixed(1) : "0.0",
    dotClass: item.dotClass,
  }));

  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-3 p-4 shadow-none">
      <Title size="sm">{title}</Title>

      <div className="flex min-w-0 items-center justify-center gap-6 py-2">
        <SurveyChart data={chartData} label={title} startAngle={startAngle}>
          {centerIcon ? (
            <Icon IconComponent={centerIcon} size={20} />
          ) : (
            <>
              <Text size="md" className="font-bold">
                {total}
              </Text>
              <Text size="xs" variant="secondary">
                {t("total")}
              </Text>
            </>
          )}
        </SurveyChart>

        <SurveyChartInfo items={infoItems} />
      </div>
    </Card>
  );
};

export default SurveyChartCard;
