import { useTranslations } from "next-intl";

export default function AnswersBadge({ count }: { count: number }) {
  const t = useTranslations("responses");

  const tone =
    count > 0
      ? "border-[color:var(--color-stats-teal)] bg-[var(--color-stats-teal-bg)] text-[color:var(--color-stats-teal)]"
      : "border-[color:var(--border-color)] bg-[var(--color-bg-table)] text-[color:var(--color-text-disabled)]";

  return (
    <span className={`inline-flex rounded-md border px-2 py-1 text-xs font-medium whitespace-nowrap ${tone}`}>
      {t("answersCount", { count })}
    </span>
  );
}