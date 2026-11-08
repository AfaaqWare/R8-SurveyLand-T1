import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PricingContent from "@/modules/guest/pricing/pricingContent";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "publicPages.navbar" });
  const tPricing = await getTranslations({ locale, namespace: "pricing" });

  return getSeoMetadata({
    title: `${tNav("pricing")} | Survey Land`,
    description: tPricing("subtitle"),
  });
}

export default function PricingPage() {
  return <PricingContent />;
}
