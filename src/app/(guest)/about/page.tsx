import AboutHero from "@/modules/guest/about/components/organisms/AboutHero";
import HowItWorks from "@/modules/guest/about/components/organisms/HowItWorks";
import OurMission from "@/modules/guest/about/components/organisms/OurMission";
import TeamLeader from "@/modules/guest/about/components/organisms/TeamLeader";
import TreadingAction from "@/modules/guest/about/components/organisms/TreadingAction";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "publicPages.about",
    titleNamespace: "publicPages.navbar",
    titleKey: "about",
    descriptionKey: "hero.description",
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
