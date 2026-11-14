import SignInSection from "@/modules/auth/components/organisms/SignInSection";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "publicPages.sign-in",
    titleKey: "title",
    noIndex: true,
  });
}

export default function SignInPage() {
  return <SignInSection />;
}
