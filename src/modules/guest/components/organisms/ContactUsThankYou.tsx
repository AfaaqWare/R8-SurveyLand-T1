
import { useTranslations } from "next-intl";

import Images from "@/shared/components/atoms/Images";
import Link from "@/shared/components/atoms/Link";
import Heading from "@/shared/components/atoms/Heading";
import Text from "@/shared/components/atoms/Text";

import { Check, Heart } from "@/assets/icons/icons";
import surveyDone from "@/assets/images/SyrveyDone.png"

type ContactUsThankYouProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  detailTitle?: string;
  detailText?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function ContactUsThankYou({
  title,
  subtitle,
  description,
  detailTitle,
  detailText,
  actionLabel,
  actionHref = "/",
}: ContactUsThankYouProps) {
  const t = useTranslations("contactUsThankYou");

  return (
    <section
      aria-labelledby="contact-thank-you-title"
      className="
        relative isolate m-0 flex min-h-screen w-full
        items-center justify-center overflow-hidden
        ds-bg-alt px-4 py-8 sm:px-6
      "
    >
      {/* Background Image */}
      <Images
        src={surveyDone}
        alt={t("imageAlt")}
        priority
        quality={85}
        className="
          absolute inset-0 z-0 h-full w-full scale-105
          object-cover object-center dark:hidden
        "
      />

      {/* Thank You Card */}
      <div className="absolute z-10 mx-auto w-full max-w-xl">
        <div
          className="
            m-5 text-center
            ds-bg-card ds-rounded-lg
            ds-shadow-card ds-p-lg
          "
        >
          {/* Success Icon */}
          <div
            className="
              mx-auto mb-4 flex h-16 w-16
              items-center justify-center rounded-full
              ds-bg-primary ds-text-white
            "
          >
            <Check className="h-10 w-10" />
          </div>

          {/* Title */}
          <Heading
            as="h1"
            size="lg"
            align="center"
            className="ds-title-lg ds-text-primary"
          >
            {title ?? t("title")}
          </Heading>

          {/* Subtitle */}
          <Text
            size="sm"
            className="mt-2 ds-text-alt"
          >
            {subtitle ?? t("subtitle")}
          </Text>

          {/* Description */}
          <Text
            size="sm"
            variant="secondary"
            className="mx-auto mt-3 max-w-lg"
          >
            {description ?? t("description")}
          </Text>

          {/* Additional Details */}
          <div
            className="
              mx-auto mt-5 flex max-w-lg items-start
              gap-3 text-start
              ds-bg-form ds-rounded-md ds-p-md
            "
          >
            <span
              aria-hidden="true"
              className="
                flex h-7 w-7 shrink-0
                items-center justify-center
                rounded-full ds-text-white
              "
            >
              <Heart className="ds-text-primary" />
            </span>

            <div className="min-w-0 flex-1">
              <Text
                size="sm"
                className="ds-text-primary ds-font-bold"
              >
                {detailTitle ?? t("detailTitle")}
              </Text>

              <Text
                size="xs"
                variant="secondary"
                className="mt-1"
              >
                {detailText ?? t("detailText")}
              </Text>
            </div>
          </div>

          {/* Action Link */}
          <Link
            href={actionHref}
            className="
              mt-5 inline-flex min-h-10
              items-center justify-center gap-2
              ds-bg-primary ds-text-white
              ds-rounded-md ds-p-sm
              ds-font-bold ds-hover
            "
          >
            <span aria-hidden="true">⌂</span>
            {actionLabel ?? t("actionLabel")}
          </Link>
        </div>
      </div>
    </section>
  );
}
