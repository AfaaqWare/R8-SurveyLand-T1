import ContactSection from "@/modules/guest/contact/components/organisms/ContactSection";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "publicPages.contact",
    titleKey: "title",
    descriptionKey: "description",
  });
}

export default function page() {
  return (
    <div>
      <ContactSection />
    </div>
  )
}