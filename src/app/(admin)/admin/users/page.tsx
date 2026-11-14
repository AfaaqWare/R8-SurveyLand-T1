import UsersSection from "@/modules/Admin/Users/components/organisms/UsersSection";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "AdminDashboard.items",
    titleKey: "allUsers",
    noIndex: true,
  });
}
const page = () => {
  return (
    <div>
      <UsersSection />
    </div>
  );
};

export default page;
