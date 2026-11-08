import { getSeoMetadata } from "@/core/seo/getSeoMetadata";
import ResponsesSection from "@/modules/responses/components/organisms/ResponsesSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "responses" });

  return getSeoMetadata({
    title: `${t("title")} | Survey Land`,
    noIndex: true,
  });
}
export default function page() {
  return (
    <>
      <ResponsesSection />
    </>
  );
}
