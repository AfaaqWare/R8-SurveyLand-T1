import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface VerifiedBadgeProps {
  verified: boolean;
}

export default function VerifiedBadge({ verified }: VerifiedBadgeProps) {
  const t = useTranslations("dashboard.users");

  if (verified) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-green-500/40 bg-green-500/15 px-2.5 py-1 text-xs font-medium text-green-600">
        <CheckCircle2 className="size-4" aria-hidden="true" />
        {t("verified")}
      </span>
    );
  }

  return (
    <span className="ds-text-secondary ds-border-color inline-flex items-center gap-1.5 rounded-md border bg-gray-500/10 px-2.5 py-1 text-xs font-medium">
      <XCircle className="size-4" aria-hidden="true" />
      {t("notVerified")}
    </span>
  );
}