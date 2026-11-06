"use client";

import type { ReactNode } from "react";

import AdminTemplate from "@/modules/Admin/components/template/AdminTemplate";
import UserTemplate from "@/modules/dashboard/components/template/UserTemplate";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";

import AuthInitializer from "@/shared/guards/AuthInitializer";
import ProtectedRoute from "@/shared/guards/ProtectedRoute";

function DashboardChrome({ children }: { children: ReactNode }) {
  const { data } = useGetProfile();
  const role = data?.role?.trim().toUpperCase();

  if (role === "ADMIN") {
    return <AdminTemplate>{children}</AdminTemplate>;
  }

  return <UserTemplate>{children}</UserTemplate>;
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AuthInitializer>
      <ProtectedRoute>
        <DashboardChrome>{children}</DashboardChrome>
      </ProtectedRoute>
    </AuthInitializer>
  );
}
