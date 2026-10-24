import { useTranslations } from "next-intl";
import Images from "@/shared/components/atoms/Images";
import Link from "@/shared/components/atoms/Link";
import surveyDone from "@/assets/images/SyrveyDone.png";
import { Check, Heart } from "@/assets/icons/icons";

type ThankYouProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  detailTitle?: string;
  detailText?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function ThankYou({
  title,
  subtitle,
  description,
  detailTitle,
  detailText,
  actionLabel,
  actionHref = "/",
}: ThankYouProps) {
  const t = useTranslations("thankYou");

  return (
    <section
      aria-labelledby="thank-you-title"
      className="relative isolate m-0 flex min-h-screen w-full items-center justify-center overflow-hidden ds-bg-alt px-4 py-8 sm:px-6"
    >
      <Images
        src={surveyDone}
        alt={t("imageAlt")}
        priority
        className="absolute inset-0 z-0 h-full w-full object-cover dark:hidden"
      />

      <div className="absolute z-10 mx-auto w-full max-w-xl">
        <div className="ds-bg-card m-5 ds-rounded-lg ds-shadow-card ds-p-lg text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ds-bg-primary ds-text-white text-2xl">
            <Check className="h-10 w-10" />
          </div>

          <h1
            id="thank-you-title"
            className="ds-title-lg ds-text-primary"
          >
            {title ?? t("title")}
          </h1>

          <p className="mt-2 ds-text-alt ds-text-sm">
            {subtitle ?? t("subtitle")}
          </p>

          <p className="mx-auto mt-3 max-w-lg ds-text-secondary ds-text-sm">
            {description ?? t("description")}
          </p>

          <div className="mx-auto mt-5 flex max-w-lg items-start gap-3 ds-bg-form ds-rounded-md ds-p-md text-start">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full ds-text-white"
            >
              <Heart className="ds-text-primary" />
            </span>

            <div className="min-w-0 flex-1">
              <h2 className="ds-text-primary ds-text-sm ds-font-bold">
                {detailTitle ?? t("detailTitle")}
              </h2>

              <p className="mt-1 ds-text-secondary ds-text-xs">
                {detailText ?? t("detailText")}
              </p>
            </div>
          </div>

          <Link
            href={actionHref}
            className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 ds-bg-primary ds-text-white ds-rounded-md ds-p-sm ds-font-bold ds-hover"
          >
            <span aria-hidden="true">⌂</span>
            {actionLabel ?? t("actionLabel")}
          </Link>
        </div>
      </div>
    </section>
  );
}

