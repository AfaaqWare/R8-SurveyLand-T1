
"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import  Heading  from "@/shared/components/atoms/Heading";
import  Text  from "@/shared/components/atoms/Text";
import  Button  from "@/shared/components/atoms/Button";
import  { Check }  from "@/assets/icons/icons";

type AuthSuccessCardProps = {
  type: "passwordReset" | "accountReactivation";
};

export default function AuthSuccessCard({
  type,
}: AuthSuccessCardProps) {
  const t = useTranslations("AuthSuccessCard");
  const router = useRouter();

  return (
    <section className="
      mx-auto flex w-full max-w-112.5
      min-h-71.25 flex-col items-center
      justify-center gap-4
      rounded-xl border
      ds-bg-card ds-border-card ds-shadow-card
      px-8 py-10 text-center
    ">
      {/* Success Icon */}
      <div className="
        flex size-12 items-center justify-center
        rounded-full bg-green-100
        text-green-600
      ">
        <Check size={25} strokeWidth={2} />
      </div>

      {/* Title */}
      <Heading
        variant="primary"
        as="h2"
        size="md"
      >
        {t("title")}
      </Heading>

      {/* Description */}
      <Text
        size="xs"
        variant="secondary"
      >
        {t(`${type}Description`)}
      </Text>

      {/* Action */}
      <Button
        onClick={() => router.push("/login")}
        className="mt-1 min-w-31.25"
      >
        {t("returnToLogin")}
      </Button>
    </section>
  );
}
