import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ForgetPassword from "@/modules/auth/forget-password/components/organisms/ForgetPassword";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "forgotPassword" });

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`,
    description: t("subtitle"),
    noIndex: true, 
  });
}
const page = () => {
  return <ForgetPassword />;
};

export default page;
