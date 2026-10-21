import { Card } from "@/shared/components/atoms/Card";
import { useTranslations } from "next-intl";
import { Quick_Action } from "../../utils/DashboardData";
import QuickActionCard from "./QuickActionCard";

const QuickAnswers = () => {
  const t = useTranslations("dashboard.home.quickActions");
  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 gap-3 p-4 shadow-none">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Quick_Action.map(action => (
          <QuickActionCard
            tone={action.tone}
            key={action.key}
            href={action.href}
            icon={action.icon}
            variant={action.variant}
            title={t(`${action.key}.title`)}
            description={t(`${action.key}.description`)}
          />
        ))}
      </div>
    </Card>
  );
};

export default QuickAnswers;
