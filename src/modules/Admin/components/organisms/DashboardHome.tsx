"use client";
import { useTranslations } from "next-intl";
import DashboardTitle from "../molecules/DashboardTitle";
import StateItems from "../molecules/StateItems";
import { statusCounts, summaryStatusCounts } from "../../utils/DashboardData";
import SurveyChartCard from "../molecules/SurveyChartCard";
import DashBoardTable from "../molecules/DashBoardTable";
import RecentResponsesTable from "../molecules/RecentResponsesTable";
import { UsersRound } from "@/assets/icons/icons";
import QuickAnswers from "../molecules/QuickActions";
import DashBoardSkeleton from "../molecules/DashBoardSkeleton";
import useDashboardHome from "../../hooks/useDashboardHome";

const DashboardHome = () => {
  const t = useTranslations("dashboard.home");
  const { stats, surveys, responses, isPending, isError, errors, retry } = useDashboardHome();

  if (isPending) {
    return <DashBoardSkeleton />;
  }

  return (
    <section className="flex w-full flex-col gap-6">
      <DashboardTitle title={t("title")} subtitle={t("subtitle")} />
      <StateItems stats={stats} isError={isError} onRetry={retry} />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <SurveyChartCard title={t("statusOverview")} counts={statusCounts} startAngle={90} />
        <DashBoardTable responses={responses} isError={errors.responses} onRetry={retry} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <RecentResponsesTable surveys={surveys} isError={errors.surveys} onRetry={retry} />
        <SurveyChartCard
          title={t("statusOverview")}
          counts={summaryStatusCounts}
          startAngle={10}
          centerIcon={UsersRound}
        />
      </div>

      <QuickAnswers />
    </section>
  );
};

export default DashboardHome;
