import PublicLayout from "@/shared/components/Layouts/PublicLayout";
import HeroSection from "@/modules/guest/home/components/organisms/HeroSection";
import HowItWorks from "@/modules/guest/home/components/organisms/HowItWorks";
import SectionPlan from "@/modules/guest/home/components/organisms/SectionPlan";
import SectionPopular from "@/modules/guest/home/components/organisms/SectionPopular";

export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <HowItWorks />
      <SectionPopular />
      <SectionPlan />
    </PublicLayout>
  );
}
