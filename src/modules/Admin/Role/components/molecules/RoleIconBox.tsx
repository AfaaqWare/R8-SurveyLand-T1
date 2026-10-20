import { ROLE_OPTIONS } from "../../utils/RoleData";
interface RoleIconBoxProps {
  option: (typeof ROLE_OPTIONS)[number];
}
const RoleIconBox = ({ option }: RoleIconBoxProps) => {
  const Icon = option.icon;

  return (
    <div
      className={`ds-rounded-md flex size-8 shrink-0 items-center justify-center ${option.bgColor}`}
    >
      <Icon className={option.color} size={20} />
    </div>
  );
};

export default RoleIconBox;
