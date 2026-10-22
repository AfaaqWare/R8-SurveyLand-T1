import Icon from "@/shared/components/atoms/Icon";
import { LucideIcon } from "lucide-react";
import { StatVariant } from "../../types/DashboardTypes";
import Link from "@/shared/components/atoms/Link";
import Text from "@/shared/components/atoms/Text";
interface QuickActionCardProps {
  href: string;
  icon: LucideIcon;
  variant: StatVariant;
  tone: string;
  title: string;
  description: string;
}
const QuickActionCard = ({
  href,
  icon,
  tone,
  variant,
  title,
  description,
}: QuickActionCardProps) => {
  return (
    <Link
      href={href}
      className={`ds-rounded-lg flex items-center gap-3 p-4 ${tone} no-underline transition-opacity duration-200 hover:opacity-70`}
    >
      <Icon IconComponent={icon} variant={variant} withBackground size="sm" />
      <div className="min-w-0">
        <Text size="sm" className="font-bold">
          {title}
        </Text>

        <Text size="xs" variant="secondary">
          {description}
        </Text>
      </div>
    </Link>
  );
};

export default QuickActionCard;
