import ProfileContent from "@/modules/dashboard/profile/components/organisms/ProfileContent";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "DashboardProfile",
    titleKey: "title",
    noIndex: true,
  });
}

export default function ProfilePage() {
  return <ProfileContent />;
}