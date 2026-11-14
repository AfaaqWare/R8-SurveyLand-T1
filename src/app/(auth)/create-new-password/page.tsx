import CreateNewPassword from "@/modules/auth/create-new-password/components/organisms/createNewPassword";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "createNewPassword",
    titleKey: "title",
    descriptionKey: "description",
    noIndex: true,
  });
}

export default function CreateNewPasswordPage() {
  return <CreateNewPassword />;
}