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
  isAdmin?: boolean;
  isError?: boolean;
  onRetry?: () => void;
}

const StateItems = ({ stats, isAdmin = true, isError = false, onRetry }: StatsGridProps) => {
  const t = useTranslations("dashboard.home");

  if (isError) {
    return (
      <Card className="ds-border-card ds-bg-card shadow-none">
        <ErrorState onRetry={onRetry} className="min-h-0 py-6" />
      </Card>
    );
  }

  const items = isAdmin
    ? stateItemsData
    : stateItemsData.filter(item => item.key !== "totalUsers");

  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${
        isAdmin ? "lg:grid-cols-5" : "lg:grid-cols-4"
      }`}
    >
      {items.map(item => (
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
