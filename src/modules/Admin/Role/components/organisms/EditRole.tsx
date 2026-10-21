"use client";
import React from "react";
import UserInfoCard from "../molecules/UserInfoCard";
import RoleManagementCard from "../molecules/RoleManagementCard";
import { useTranslations } from "next-intl";
import DashboardTitle from "../../../components/molecules/DashboardTitle";
import useGetProfile from "@/modules/Admin/hooks/useGetProfile";
import { ErrorState } from "@/core/ui-states";
const EditRole = () => {
  const t = useTranslations("dashboard.editRole");
  const { data, isError, isPending, refetch } = useGetProfile();

  if (isPending) return <>no</>;
  if (isError || !data) return <ErrorState onRetry={refetch} />;
  return (
    <section className="flex w-full max-w-225 flex-col gap-8">
      <DashboardTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <UserInfoCard user={data} />
        <RoleManagementCard role={data.role} />
      </div>
    </section>
  );
};

export default EditRole;
