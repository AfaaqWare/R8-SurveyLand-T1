import SignUpForm from "@/modules/auth/components/organisms/SignUpForm";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "publicPages.navbar",
    titleKey: "signup",
    noIndex: true,
  });
}

export default function SignUpPage() {
  return <SignUpForm />;
}
