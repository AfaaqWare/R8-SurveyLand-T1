import { aboutTeamLeader } from "@/assets/images/images";
import Button from "@/shared/components/atoms/Button";
import Image from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { getTranslations } from "next-intl/server";

export default async function TeamLeader() {
  const t = await getTranslations("publicPages.about.team");

  return (
    <section className="ds-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-16 lg:py-24">
        <Title size="xl" variant="primary" isCenter className="font-bold normal-case">
          {t.rich("title", {
            highlight: chunks => <span className="ds-text-alt">{chunks}</span>,
          })}
        </Title>

        <div className="mt-10 grid w-full items-center gap-10 md:grid-cols-2 lg:mt-16">
          <div className="flex flex-col items-center justify-center gap-5 mx-auto text-center md:items-start md:text-start">
            <Title size="lg" variant="alt" className="font-bold normal-case mx-auto">
              {t("subtitle")}
            </Title>
            <Text variant="secondary" size="base" className="max-w-md leading-relaxed">
              {t("description")}
            </Text>
            <Button variant="primary" className="mx-auto" size="md" isRounded>
              {t("button")}
            </Button>
          </div>

          <Image
            src={aboutTeamLeader}
            alt={t("imageAlt")}
            width={960}
            height={640}
            objectFit="cover"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
