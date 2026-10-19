import type { LucideIcon } from "lucide-react";
import { Card } from "@/shared/components/atoms/Card";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import type { StatVariant } from "../../types/DashboardTypes";

interface StatCardProps {
  icon: LucideIcon;
  variant: StatVariant;
  label: string;
  value: number | string;
  hint: string;
}

const StatCard = ({ icon, variant, label, value, hint }: StatCardProps) => {
  return (
    <Card className={"ds-border-card ds-bg-card flex min-w-0 flex-col gap-3 p-4 shadow-none"}>
      <div className="flex items-center gap-3">
        <Icon IconComponent={icon} variant={variant} withBackground size="sm" />
        <div className="min-w-0">
          <Text size="xs" variant="secondary">
            {label}
          </Text>
          <Text size="md" className="font-bold">
            {value}
          </Text>
        </div>
      </div>

      <Text size="xs" variant={variant}>
        {hint}
      </Text>
    </Card>
  );
};

export default StatCard;
