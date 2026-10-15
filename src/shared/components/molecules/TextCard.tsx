import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { cn } from "@/lib/cn";

interface Props {
  title: string;
  text: string;
  className?: string;
}

export default function TextCard({ title, text, className }: Props) {
  return (
    <div
      className={cn(
        "ds-bg-alt ds-rounded-lg ds-shadow-sm flex h-full flex-col items-center justify-center gap-3 px-8 py-10 text-center",
        className
      )}
    >
      <Title variant="alt" size="md" isCenter className="font-bold normal-case">
        {title}
      </Title>
      <Text variant="secondary" size="sm" isCenter className="leading-relaxed">
        {text}
      </Text>
    </div>
  );
}
