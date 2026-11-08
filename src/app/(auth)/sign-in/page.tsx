import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import SignInSection from "@/modules/auth/components/organisms/SignInSection";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const t = await getTranslations({ locale, namespace: "publicPages.sign-in" });
 

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`,
    description: t("subtitle"),
    noIndex: true,
  });
}

export default function SignInPage() {
  return <SignInSection />;
}
