import Link from "next/link";
import Title from "@/shared/components/atoms/Title";

interface SectionHeaderProps {
  title: string;
  actionLabel: string;
  actionHref: string;
}

const CardHeader = ({ title, actionLabel, actionHref }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Title size="sm">{title}</Title>
      <Link
        href={actionHref}
        className="ds-border-sm ds-rounded-md ds-hover ds-text-xs ds-text-primary px-3 py-1 font-medium"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default CardHeader;
