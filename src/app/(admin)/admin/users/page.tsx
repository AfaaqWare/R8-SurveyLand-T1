import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import UsersSection from "@/modules/Admin/Users/components/organisms/UsersSection";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AdminDashboard.items" });

  return getSeoMetadata({
    title: `${t("allUsers")} | Survey Land`, 
    noIndex: true, 
  });
}
const page = () => {
  return (
    <div>
      <UsersSection />
    </div>
  );
};

export default page;
