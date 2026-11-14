import type { Metadata } from "next";
import PricingContent from "@/modules/guest/pricing/pricingContent";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "pricing",
    titleKey: "headingAccent",
    descriptionKey: "subtitle",
  });
}

export default function PricingPage() {
  return <PricingContent />;
}
 