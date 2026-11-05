
import type { ReactNode } from "react";

import AdminTemplate from "@/modules/Admin/components/template/AdminTemplate";

import AuthInitializer from "@/shared/guards/AuthInitializer";
import AdminRoute from "@/shared/guards/AdminRoute";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthInitializer>
      <AdminRoute>
        <AdminTemplate>{children}</AdminTemplate>
      </AdminRoute>
    </AuthInitializer>
  );
}
