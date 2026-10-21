import StatCard from "./StateCard";
import { useTranslations } from "next-intl";
import { stateItemsData } from "../../utils/DashboardData";
import { Card } from "@/shared/components/atoms/Card";
import { ErrorState } from "@/core/ui-states";

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
      <Card className="ds-border-card ds-bg-card shadow-none">
        <ErrorState onRetry={onRetry} className="min-h-0 py-6" />
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
