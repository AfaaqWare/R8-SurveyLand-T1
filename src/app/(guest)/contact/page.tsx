import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ContactSection from "@/modules/guest/contact/components/organisms/ContactSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";


type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "publicPages.navbar" });
  const tContact = await getTranslations({ locale, namespace: "publicPages.contact" });

  return getSeoMetadata({
    title: `${tNav("contact")} | Survey Land`,
    description: tContact("description"),
  });
}

export default function page() {
  return (
    <div>
      <ContactSection />
    </div>
  )
}