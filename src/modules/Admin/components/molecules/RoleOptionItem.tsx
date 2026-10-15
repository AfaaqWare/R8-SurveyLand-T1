import { useTranslations } from "next-intl";
import Text from "@/shared/components/atoms/Text";
import { ROLE_OPTIONS } from "../../utils/RoleData";
import RoleIconBox from "./RoleIconBox";

interface RoleOptionItemProps {
  option: (typeof ROLE_OPTIONS)[number];
  selected: boolean;
  onSelect: () => void;
}

const RoleOptionItem = ({ option, selected, onSelect }: RoleOptionItemProps) => {
  const t = useTranslations("dashboard.editRole");

  return (
    <div
      key={option.value}
      onClick={onSelect}
      className={`ds-rounded-md flex w-full cursor-pointer items-center gap-2 p-2 text-start ${
        selected ? "ds-bg-primary-600" : "role-option"
      }`}
    >
      <div
        className={`ds-rounded-md flex size-8 shrink-0 items-center justify-center ${option.bgColor}`}
      >
        <RoleIconBox option={option} />
      </div>

      <div className="min-w-0">
        <Text size="sm" className="font-medium" variant={selected ? "black" : "primary"}>
          {t(`roles.${option.value}.title`)}
        </Text>

        <Text size="xs" variant="secondary">
          {t(`roles.${option.value}.description`)}
        </Text>
      </div>
    </div>
  );
};

export default RoleOptionItem;
