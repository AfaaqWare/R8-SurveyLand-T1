import { useTranslations } from "next-intl";
import { User } from "@/assets/icons/icons";
import { getInitials } from "../../utils/responsesUtils";

export default function RespondentCell({ name }: { name: string }) {
  const t = useTranslations("responses.table");
  const trimmed = name.trim();
  const initials = getInitials(trimmed);

  return (
    <div className="flex min-w-0 items-center gap-3">
      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-stats-teal-bg)] text-xs font-semibold text-[color:var(--color-stats-teal)]"
      >
        {initials || <User className="size-4" />}
      </span>
      {trimmed ? (
        <span className="truncate font-medium text-[color:var(--color-text-primary)]" title={trimmed}>
          {trimmed}
        </span>
      ) : (
        <span className="truncate text-[color:var(--color-text-disabled)] italic">{t("anonymous")}</span>
      )}
    </div>
  );
}