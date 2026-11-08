import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import CreateNewPassword from "@/modules/auth/create-new-password/components/organisms/createNewPassword";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "createNewPassword",
  });

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`,
    description: t("description"),
    noIndex: true, 
  });
}

export default function CreateNewPasswordPage() {
  return <CreateNewPassword />;
}