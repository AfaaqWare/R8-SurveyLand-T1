import PublicLayout from "@/shared/components/Layouts/PublicLayout";
import HeroSection from "@/shared/components/organisms/HeroSection";
import HowItWorks from "@/shared/components/organisms/HowItWorks";

export default function HomePage() {
  return (
    <PublicLayout>
      <HeroSection />
      <HowItWorks />
    </PublicLayout>
  );
}
