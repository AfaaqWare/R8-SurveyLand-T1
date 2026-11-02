import Text from "@/shared/components/atoms/Text";
import Input from "@/shared/components/atoms/Input";
import { LucideIcon } from "lucide-react";

interface DetailsResponseInfoFieldProps {
  label: string;
  value: string;
  IconComponent: LucideIcon;
}

const ResponseInfoInput = ({ label, value, IconComponent }: DetailsResponseInfoFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Text size="sm" variant="secondary">
        {label} :
      </Text>
      <Input
        disabled
        value={value}
        leftIcon={<IconComponent className="size-4 shrink-0" />}
        className="ds-border-color flex w-full min-w-0 items-center gap-2 rounded-md border text-sm"
      />
    </div>
  );
};

export default ResponseInfoInput;
