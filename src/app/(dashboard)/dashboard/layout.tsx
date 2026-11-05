
import type { ReactNode } from "react";

import UserTemplate from "@/modules/dashboard/components/template/UserTemplate";

import AuthInitializer from "@/shared/guards/AuthInitializer";
import ProtectedRoute from "@/shared/guards/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <AuthInitializer>
      <ProtectedRoute>
        <UserTemplate>{children}</UserTemplate>
      </ProtectedRoute>
    </AuthInitializer>
  );
}
