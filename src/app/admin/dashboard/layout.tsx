import AdminTemplate from "@/modules/Admin/components/template/AdminTemplate";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <AdminTemplate>{children}</AdminTemplate>;
};

export default layout;
