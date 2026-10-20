import PublicLayout from "@/shared/components/Layouts/PublicLayout";
import HeroSection from "@/shared/components/organisms/HeroSection";
import HowItWorks from "@/shared/components/organisms/HowItWorks";
import SectionPopular from "@/shared/components/organisms/SectionPopular";
import SectionPlan from "@/shared/components/organisms/SectionPlan";

export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <HowItWorks />
      <SectionPopular />
      <SectionPlan/>
    </PublicLayout>
  );
}
