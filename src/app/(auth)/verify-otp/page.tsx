import React from "react";
import VerifyOtp from "@/modules/auth/verify-otp/components/organisms/VerifyForm";

import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "otp",
    titleKey: "title",
    descriptionKey: "description",
    noIndex: true,
  });
}
export default function VerifyOtpPage() {
  return <VerifyOtp />;
}
