import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Image from "@/shared/components/atoms/Image";
import ButtonGroup from "@/shared/components/molecules/ButtonGroup";
import heroImage from "../../../assets/images/HeroImage.png";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations("publicPages.home.hero-section");

  return (
    <section className="ds-bg-alt">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:justify-between md:gap-12 md:px-16 lg:py-24">
        <div className="flex w-full max-w-xl flex-col items-start gap-6">
          <Title
            size="xl"
            variant="primary"
            className="ds-font-heading leading-tight font-bold normal-case"
          >
            {t.rich("title", {
              highlight: chunks => <span className="ds-text-alt">{chunks}</span>,
            })}
          </Title>
          <Text variant="primary" size="base" className="max-w-md leading-relaxed">
            {t("description")}
          </Text>
          <ButtonGroup
            button1={{ variant: "primary", size: "md", children: t("create-btn") }}
            button2={{ variant: "outline", size: "md", children: t("how-it-works-btn") }}
          />
        </div>
        <Image
          src={heroImage}
          alt={t("image-alt")}
          width={620}
          height={460}
          priority
          objectFit="contain"
          className="w-full max-w-xl"
        />
      </div>
    </section>
  );
}
