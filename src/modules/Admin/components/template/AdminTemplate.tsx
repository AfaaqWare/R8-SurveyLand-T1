import AdminSidebar from "@/shared/components/organisms/AdminSidebar";
import React from "react";

const AdminTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ds-bg flex min-h-screen w-full">
      <AdminSidebar />
      <main className="min-w-0 flex-1 p-4 pt-16 md:p-6 lg:ms-85 lg:pe-12 lg:pt-6">{children}</main>
    </div>
  );
};

export default AdminTemplate;
