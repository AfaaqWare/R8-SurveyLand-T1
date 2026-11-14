import EditRole from "@/modules/Admin/Role/components/organisms/EditRole";
import type { Metadata } from "next";
import { resolvePageSeoMetadata, type LocaleParamsProps } from "@/core/seo/pageSeo";

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  return resolvePageSeoMetadata({
    params,
    namespace: "AdminDashboard.items",
    titleKey: "roles",
    noIndex: true,
  });
}

const page = () => {
  return (
    <div>
      <EditRole />
    </div>
  );
};

export default page;
