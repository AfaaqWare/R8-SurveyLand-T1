import type { LucideIcon } from "lucide-react";

interface InfoChipProps {
  icon: LucideIcon;
  text: string;
}

const InfoChip = ({ icon: ChipIcon, text }: InfoChipProps) => {
  return (
    <span className="ds-border-sm ds-bg-form ds-rounded-md inline-flex items-center gap-1 px-2 py-1">
      <ChipIcon className="ds-text-secondary size-3.5" />
      <span className="ds-text-xs ds-text-secondary">{text}</span>
    </span>
  );
};

export default InfoChip;
