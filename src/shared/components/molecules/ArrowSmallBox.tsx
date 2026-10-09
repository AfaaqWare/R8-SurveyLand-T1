import Text from "../atoms/Text";
import { ArrowRight } from "lucide-react";

interface Props {
  text: string;
}

export default function ArrowSmallBox({ text }: Props) {
  return (
    <div className="ds-primary-200 ds-border-sm ds-border-muted ds-rounded-md flex min-h-[calc(var(--space-lg)*2)] w-full min-w-0 items-center gap-[var(--space-sm)] px-[var(--space-md)] py-[var(--space-sm)] text-start">
      <ArrowRight
        aria-hidden="true"
        focusable="false"
        className="ds-text-alt h-4 w-4 shrink-0 rtl:rotate-180"
      />
      <Text size="md" className="min-w-0 font-medium break-words">
        {text}
      </Text>
    </div>
  );
}
