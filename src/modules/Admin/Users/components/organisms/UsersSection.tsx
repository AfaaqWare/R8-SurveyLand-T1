"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import { Card } from "@/shared/components/atoms/Card";
import Skeleton from "@/shared/components/atoms/Skeleton";
import { ErrorState } from "@/core/ui-states";
import useGetUsers from "../../hooks/useGetUsers";
import { useUpdateUserRole } from "../../hooks/useUpdateUserRole";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { useConfirmDelete } from "../../hooks/Useconfirmdelete";
import { AdminUser } from "../../types/UsersTypes";
import UsersTable from "../molecules/UsersTable";
import UsersPagination from "../molecules/UsersPagination";


const PAGE_SIZE = 5;

export default function UsersSection() {
  const t = useTranslations("dashboard.users");
  const tState = useTranslations("ui-state");
  const [page, setPage] = useState(1);

  const { users, isPending, isError, refetch } = useGetUsers();
  const updateRole = useUpdateUserRole();
  const removeUser = useDeleteUser();
  const confirmDelete = useConfirmDelete();

  // Client-side pagination. Clamp so deleting the last row of a page
  // doesn't leave the admin on an empty page.
  const pageCount = Math.max(1, Math.ceil(users.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleUsers = users.slice(startIndex, startIndex + PAGE_SIZE);
  const showingTo = startIndex + visibleUsers.length;

  const handleRoleChange = (user: AdminUser, role: string) => {
    if (role === user.role.toUpperCase()) return;
    updateRole.mutate({ id: user.id, role });
  };

  const handleDelete = async (user: AdminUser) => {
    if (await confirmDelete(user.name)) removeUser.mutate(user.id);
  };

  const renderContent = () => {
    if (isPending) {
      return (
        <div className="flex flex-col gap-3" aria-busy="true">
          {Array.from({ length: PAGE_SIZE }, (_, index) => (
            <Skeleton key={index} className="h-16 w-full" />
          ))}
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex min-h-72 w-full items-center justify-center">
          <ErrorState onRetry={() => refetch()} className="min-h-0 w-full" />
        </div>
      );
    }

    if (users.length === 0) {
      return (
        <p className="ds-text-secondary py-12 text-center text-sm">{tState("empty.default")}</p>
      );
    }

    return (
      <>
        <UsersTable
          users={visibleUsers}
          startIndex={startIndex}
          updatingId={updateRole.isPending ? updateRole.variables?.id : undefined}
          deletingId={removeUser.isPending ? removeUser.variables : undefined}
          onRoleChange={handleRoleChange}
          onDelete={handleDelete}
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Text variant="secondary" size="sm">
            {t("showing", { from: startIndex + 1, to: showingTo, total: users.length })}
          </Text>
          <UsersPagination page={currentPage} pageCount={pageCount} onChange={setPage} />
        </div>
      </>
    );
  };

  return (
    <section className="flex min-w-0 flex-col gap-6 p-4 sm:p-8">
      <header className="flex flex-col gap-2">
        <Title size="xl">{t("title")}</Title>
        <Text variant="secondary">{t("subtitle")}</Text>
      </header>

      <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-4 p-4 shadow-none">
        {renderContent()}
      </Card>
    </section>
  );
}
