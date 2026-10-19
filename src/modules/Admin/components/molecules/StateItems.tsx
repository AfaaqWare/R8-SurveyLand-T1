import StatCard from "./StateCard";
import { useTranslations } from "next-intl";
import { stateItemsData } from "../../utils/DashboardData";
import { Card } from "@/shared/components/atoms/Card";
import { CircleAlert } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";;
import Text from "@/shared/components/atoms/Text";

interface StatsGridProps {
  stats: {
    totalSurveys: number;
    draftSurveys: number;
    publishedSurveys: number;
    responses: number;
    totalUsers: number;
  };
  isError?: boolean;
  onRetry?: () => void;
}

const StateItems = ({ stats, isError = false, onRetry }: StatsGridProps) => {
  const t = useTranslations("dashboard.home");

  if (isError) {
    return (
      <Card className=" ds-border-card ds-bg-card flex flex-col items-center justify-center gap-3 p-6 shadow-none">
        <CircleAlert className="ds-text-danger size-8" />

        <Text className="ds-text-sm ds-text-danger">{t("error")}</Text>
        <Button variant="outline" size="sm" onClick={onRetry}>
          {t("retry")}
        </Button>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stateItemsData.map(item => (
        <StatCard
          key={item.key}
          icon={item.icon}
          variant={item.variant}
          label={t(`stats.${item.key}`)}
          value={stats[item.statsKey]}
          hint={t("fromLastMonth")}
        />
      ))}
    </div>
  );
};

export default StateItems;
