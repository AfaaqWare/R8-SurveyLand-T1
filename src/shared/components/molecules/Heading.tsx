import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { cn } from "@/lib/cn";

interface Props {
  title?: string;
  highlightText?: string;
  text?: string;
  className?: string;
  titleClassName?: string;
  textClassName?: string;
}

export default function Heading({
  title = "title",
  highlightText = "",
  text = "",
  className = "",
  titleClassName = "",
  textClassName = "",
}: Props) {
  return (
    <div className={cn("flex flex-col gap-0.5 text-center", className)}>
      <Title variant="primary" size="lg" className={cn("font-bold", titleClassName)}>
        {title} <span className="ds-text-alt">{highlightText}</span>
      </Title>
      {text && (
        <Text variant="disabled" size="md" className={textClassName}>
          {text}
        </Text>
      )}
    </div>
  );
}
