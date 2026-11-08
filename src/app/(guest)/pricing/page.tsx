import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PricingContent from "@/modules/guest/pricing/pricingContent";


export async function generateMetadata(): Promise<Metadata> {
  const tNav = await getTranslations("publicPages.navbar");
  const tPricing = await getTranslations("pricing");
  return getSeoMetadata({ title: `${tNav("pricing")} | Survey Land`, description: tPricing("subtitle") });
}

export default function PricingPage() {
  return <PricingContent />;
}
 