"use client";
import React, { useState } from "react";
import UserInfoCard from "../molecules/UserInfoCard";
import RoleManagementCard from "../molecules/RoleManagementCard";
import FormActions from "../molecules/FormActions";
import { useTranslations } from "next-intl";
import { UserRole } from "../../utils/RoleType";
import DashboardTitle from "../molecules/DashboardTitle";
import { UserInfo } from "../../utils/RoleData";
const EditRole = () => {
  const [role, setRole] = useState<UserRole>("USER");
  const t = useTranslations("dashboard.editRole");

  return (
    <form className="flex w-full max-w-225 flex-col gap-8">
      <DashboardTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <UserInfoCard user={UserInfo} />
        <RoleManagementCard role={role} onRoleChange={setRole} />
      </div>

      <FormActions />
    </form>
  );
};

export default EditRole;
