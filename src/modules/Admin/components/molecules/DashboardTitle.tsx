import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";


interface Props {
  title: string;
  subtitle: string;
}
const DashboardTitle = ({ subtitle, title }: Props) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <Title size="lg">{title}</Title>
      <Text size="sm" variant="secondary">
        {subtitle}
      </Text>
    </div>
  );
};

export default DashboardTitle;
