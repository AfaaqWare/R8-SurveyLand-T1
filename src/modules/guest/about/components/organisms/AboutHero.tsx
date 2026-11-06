import { aboutHero } from "@/assets/images/images";
import Link from "@/shared/components/atoms/Link";
import Button from "@/shared/components/atoms/Button";
import Image from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { getTranslations } from "next-intl/server";
import CreateSurveyButton from "../molecules/CreateSurveyButton";

export default async function AboutHero() {
  const t = await getTranslations("publicPages.about.hero");

  return (
    <section className="ds-bg">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:justify-between md:gap-12 md:px-16 lg:py-24">
        <div className="flex w-full max-w-xl flex-col items-start gap-6">
          <Title size="xl" variant="primary" className="leading-tight font-bold normal-case">
            {t.rich("title", {
              highlight: chunks => <span className="ds-text-alt">{chunks}</span>,
            })}
          </Title>
          <Text variant="secondary" size="base" className="max-w-md leading-relaxed">
            {t("description")}
          </Text>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/pricing" className="no-underline">
              <Button variant="primary" size="md" isRounded>
                {t("explore")}
              </Button>
            </Link>
            <CreateSurveyButton />
          </div>
        </div>
        <Image
          src={aboutHero}
          alt={t("imageAlt")}
          width={520}
          height={420}
          priority
          objectFit="contain"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
}
