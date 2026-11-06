import AboutHero from "@/modules/guest/about/components/organisms/AboutHero";
import HowItWorks from "@/modules/guest/about/components/organisms/HowItWorks";
import OurMission from "@/modules/guest/about/components/organisms/OurMission";
import TeamLeader from "@/modules/guest/about/components/organisms/TeamLeader";
import TreadingAction from "@/modules/guest/about/components/organisms/TreadingAction";

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
