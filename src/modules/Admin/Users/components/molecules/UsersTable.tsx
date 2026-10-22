
"use client";

import { Trash2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/shared/components/molecules/Table";

import type { AdminUser } from "../../types/UsersTypes";
import UserCell from "./UserCell";
import VerifiedBadge from "./VerifiedBadge";
import RoleSelect from "./RoleSelect";

interface UsersTableProps {
  users: AdminUser[];
  /** Number of rows on previous pages, used for the ID column. */
  startIndex: number;
  /** Id of the user whose role is being saved. */
  updatingId?: string;
  /** Id of the user being deleted. */
  deletingId?: string;
  /** Disable role change / delete for the signed-in admin. */
  currentUserId?: string;
  onRoleChange: (user: AdminUser, role: string) => void;
  onDelete: (user: AdminUser) => void;
}

export default function UsersTable({
  users,
  startIndex,
  updatingId,
  deletingId,
  currentUserId,
  onRoleChange,
  onDelete,
}: UsersTableProps) {
  const t = useTranslations("dashboard.users");
  const locale = useLocale();

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  if (users.length === 0) {
    return (
      <div
        className="ds-text-secondary flex min-h-32 items-center justify-center px-4 py-8 text-center text-sm"
        role="status"
      >
        {t("empty")}
      </div>
    );
  }

  return (
    <div className="w-full min-w-0">
      {/* Desktop and tablet: responsive data table */}
      <div className="hidden w-full min-w-0 overflow-x-auto md:block">
        <Table className="w-full min-w-170 text-start">
          <TableHeader>
            <TableRow className="ds-text-secondary ds-border-color text-xs">
              <TableHead>{t("columns.id")}</TableHead>
              <TableHead>{t("columns.user")}</TableHead>
              <TableHead>
                {t("columns.emailVerification")}
              </TableHead>
              <TableHead>{t("columns.role")}</TableHead>
              <TableHead>{t("columns.createdAt")}</TableHead>
              <TableHead>{t("columns.actions")}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user, index) => {
              const isSelf = user.id === currentUserId;
              const isBusy =
                updatingId === user.id || deletingId === user.id;
              const userIndex = startIndex + index + 1;

              return (
                <TableRow
                  key={user.id}
                  className="ds-border-color"
                >
                  <TableCell className="whitespace-nowrap">
                    {userIndex}
                  </TableCell>

                  <TableCell className="min-w-50">
                    <UserCell
                      name={user.name}
                      email={user.email}
                      image={user.image}
                    />
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    <VerifiedBadge
                      verified={user.isEmailVerified}
                    />
                  </TableCell>

                  <TableCell className="min-w-30">
                    <RoleSelect
                      value={user.role}
                      label={t("roleLabel", {
                        name: user.name,
                      })}
                      disabled={isBusy || isSelf}
                      onChange={(role) =>
                        onRoleChange(user, role)
                      }
                    />
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    {formatDate(user.createdAt)}
                  </TableCell>

                  <TableCell>
                    <button
                      type="button"
                      onClick={() => onDelete(user)}
                      disabled={isBusy || isSelf}
                      aria-label={`${t("delete.button")}: ${user.name}`}
                      className="
                        inline-flex min-h-10 items-center justify-center
                        gap-1.5 whitespace-nowrap rounded-md
                        border border-red-500 px-3 py-2
                        text-xs font-medium text-red-500
                        transition-colors hover:bg-red-500/10
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-red-500
                        focus-visible:ring-offset-2
                        disabled:cursor-not-allowed disabled:opacity-40
                      "
                    >
                      <Trash2
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t("delete.button")}
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Mobile: user cards */}
      <div className="grid min-w-0 grid-cols-1 gap-3 md:hidden">
        {users.map((user, index) => {
          const isSelf = user.id === currentUserId;
          const isBusy =
            updatingId === user.id || deletingId === user.id;
          const userIndex = startIndex + index + 1;

          return (
            <article
              key={user.id}
              className="
                ds-border-color min-w-0 rounded-xl border
                bg-background p-3 shadow-sm
                sm:p-4
              "
            >
              {/* User identity */}
              <div className="flex min-w-0 items-start gap-3">
                <div className="min-w-0 flex-1">
                  <UserCell
                    name={user.name}
                    email={user.email}
                    image={user.image}
                  />
                </div>

                <span
                  className="
                    ds-text-secondary shrink-0 rounded-md
                    bg-muted px-2 py-1 text-xs tabular-nums
                  "
                  aria-label={t("columns.id")}
                >
                  #{userIndex}
                </span>
              </div>

              {/* User details */}
              <div
                className="
                  ds-border-color mt-4 grid min-w-0
                  grid-cols-1 gap-4 border-t pt-4
                  sm:grid-cols-2
                "
              >
                <div className="flex min-w-0 flex-col gap-2">
                  <span className="ds-text-secondary text-xs font-medium">
                    {t("columns.emailVerification")}
                  </span>

                  <div className="min-w-0">
                    <VerifiedBadge
                      verified={user.isEmailVerified}
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                  <span className="ds-text-secondary text-xs font-medium">
                    {t("columns.role")}
                  </span>

                  <div className="min-w-0">
                    <RoleSelect
                      value={user.role}
                      label={t("roleLabel", {
                        name: user.name,
                      })}
                      disabled={isBusy || isSelf}
                      onChange={(role) =>
                        onRoleChange(user, role)
                      }
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-1 sm:col-span-2">
                  <span className="ds-text-secondary text-xs font-medium">
                    {t("columns.createdAt")}
                  </span>

                  <time
                    dateTime={user.createdAt}
                    className="text-sm"
                  >
                    {formatDate(user.createdAt)}
                  </time>
                </div>
              </div>

              {/* Actions */}
              <div className="ds-border-color mt-4 border-t pt-3">
                <button
                  type="button"
                  onClick={() => onDelete(user)}
                  disabled={isBusy || isSelf}
                  aria-label={`${t("delete.button")}: ${user.name}`}
                  className="
                    inline-flex min-h-11 w-full items-center
                    justify-center gap-2 rounded-lg
                    border border-red-500 px-4 py-2
                    text-sm font-medium text-red-500
                    transition-colors hover:bg-red-500/10
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-red-500
                    focus-visible:ring-offset-2
                    disabled:cursor-not-allowed disabled:opacity-40
                  "
                >
                  <Trash2
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                  {t("delete.button")}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
