import { aboutMission } from "@/assets/images/images";
import Button from "@/shared/components/atoms/Button";
import Image from "@/shared/components/atoms/Image";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { getTranslations } from "next-intl/server";

export default async function OurMission() {
  const t = await getTranslations("publicPages.about.mission");

  return (
    <section className="ds-bg">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16 lg:py-24">
        <Image
          src={aboutMission}
          alt={t("imageAlt")}
          width={460}
          height={420}
          objectFit="contain"
          className="mx-auto w-full max-w-md"
        />

        <div className="flex flex-col items-center gap-5 text-center">
          <Title size="xl" variant="primary" className="font-bold normal-case">
            {t.rich("title", {
              highlight: chunks => <span className="ds-text-alt">{chunks}</span>,
            })}
          </Title>
          <Text variant="secondary" size="base" isCenter className="max-w-md leading-relaxed">
            {t("description")}
          </Text>
          <Button variant="primary" size="md" isRounded>
            {t("button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
