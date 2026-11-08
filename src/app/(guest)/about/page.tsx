import AboutHero from "@/modules/guest/about/components/organisms/AboutHero";
import HowItWorks from "@/modules/guest/about/components/organisms/HowItWorks";
import OurMission from "@/modules/guest/about/components/organisms/OurMission";
import TeamLeader from "@/modules/guest/about/components/organisms/TeamLeader";
import TreadingAction from "@/modules/guest/about/components/organisms/TreadingAction";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
type Props = {
  params: Promise<{ locale: string }>;
};

// SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "publicPages.navbar" });
  const tAbout  = await getTranslations({ locale, namespace: "about" });

  return getSeoMetadata({
    title: `${tNav("about")} | Survey Land`,
    description: tAbout("subtitle"),
  });
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <TreadingAction />
      <OurMission />
      {/* Leadershi */}
      <HowItWorks />
      <TeamLeader />
    </>
  );
}
