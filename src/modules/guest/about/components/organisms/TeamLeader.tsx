import { aboutTeamLeader } from "@/assets/images/images";
import Image from "@/shared/components/atoms/Image";
import { getTranslations } from "next-intl/server";

export default async function TeamLeader() {
  const t = await getTranslations("publicPages.about.team");

  return (
    <section className="ds-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:px-16">
        <Image
          src={aboutTeamLeader}
          alt={t("imageAlt")}
          width={960}
          height={640}
          objectFit="contain"
          className="mx-auto w-full max-w-4xl"
        />
      </div>
    </section>
  );
}
