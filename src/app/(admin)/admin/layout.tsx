import type { ReactNode } from "react";

import AdminTemplate from "@/modules/Admin/components/template/AdminTemplate";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AdminTemplate>{children}</AdminTemplate>;
}
