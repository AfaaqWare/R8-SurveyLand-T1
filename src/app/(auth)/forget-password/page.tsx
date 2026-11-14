import ForgetPassword from "@/modules/auth/forget-password/components/organisms/ForgetPassword";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "forgotPassword",
    titleKey: "title",
    descriptionKey: "subtitle",
    noIndex: true,
  });
}
const page = () => {
  return <ForgetPassword />;
};

export default page;
