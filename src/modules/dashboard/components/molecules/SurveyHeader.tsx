import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

interface Props {
  title: string;
  subtitle: string;
}
export default function SurveyHeader({ subtitle, title }: Props) {
  return (
    <div className="flex flex-col mb-4">
      <Title size="lg" variant="primary">
        {title}
      </Title>
      <Text size="sm" variant="secondary" className="font-medium normal-case">
        {subtitle}
      </Text>
    </div>
  );
}
