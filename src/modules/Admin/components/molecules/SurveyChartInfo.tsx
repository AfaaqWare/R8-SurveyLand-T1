import Text from "@/shared/components/atoms/Text";

interface Props {
  label: string;
  value: number;
  percent: string;
  dotClass: string;
}

const SurveyChartInfo = ({ items }: { items: Props[] }) => {
  return (
    <ul className="flex min-w-0 flex-col gap-2">
      {items.map(item => (
        <li key={item.label} className="flex items-center gap-2">
          <span className={`size-2 shrink-0 rounded-full ${item.dotClass}`} />
          <Text size="xs" className="flex-1 font-medium">
            {item.label}
          </Text>
          <Text size="xs" className="text-end font-medium">
            {item.value}
          </Text>
          <Text size="xs" variant="secondary" className="w-12 text-end">
            {item.percent}%
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default SurveyChartInfo;
