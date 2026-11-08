import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ContactSection from "@/modules/guest/contact/components/organisms/ContactSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";



export async function generateMetadata(): Promise<Metadata> {
  const tNav = await getTranslations("publicPages.navbar");
  const tContact = await getTranslations("publicPages.contact");
  return getSeoMetadata({ title: `${tNav("contact")} | Survey Land`, description: tContact("description") });
}

export default function page() {
  return (
    <div>
      <ContactSection />
    </div>
  )
}