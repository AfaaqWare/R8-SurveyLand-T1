import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import Icon from "@/shared/components/atoms/Icon";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

interface QuestionTypeCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  selected?: boolean;
  onSelect: () => void;
}

const QuestionTypeCard = ({
  title,
  subtitle,
  icon,
  selected = false,
  onSelect,
}: QuestionTypeCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "ds-bg-card ds-rounded-xl flex w-full cursor-pointer flex-col items-center gap-3 border-2 px-4 py-6 transition-colors focus:outline-none focus-visible:ds-focus",
        selected ? "border-[var(--color-primary)]" : "border-[var(--border-color)]"
      )}
    >
      <span
        className={cn(
          "inline-flex size-16 items-center justify-center rounded-full border-2",
          selected ? "border-[var(--color-primary)]" : "border-[var(--color-text-disabled)]"
        )}
      >
        <Icon IconComponent={icon} variant={selected ? "teal" : "secondary"} size={22} />
      </span>

      <span className="flex flex-col items-center gap-0.5">
        <Title size="sm" className="font-bold">
          {title}
        </Title>
        <Text size="xs" variant="secondary">
          {subtitle}
        </Text>
      </span>
    </button>
  );
};

export default QuestionTypeCard;
