import ResponsesSection from "@/modules/responses/components/organisms/ResponsesSection";
import React from "react";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "responses",
    titleKey: "title",
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
