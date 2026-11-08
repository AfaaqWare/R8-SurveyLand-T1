import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ProfileContent from "@/modules/dashboard/profile/components/organisms/ProfileContent";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DashboardProfile" });

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`, 
    noIndex: true,
  });
}

export default function ProfilePage() {
  return <ProfileContent />;
}