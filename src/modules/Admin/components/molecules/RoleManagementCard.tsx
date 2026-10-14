"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import type { UserRole } from "../../utils/RoleType";
import { ROLE_OPTIONS } from "../../utils/RoleData";
import Button from "@/shared/components/atoms/Button";
import RoleOptionItem from "./RoleOptionItem";

interface RoleManagementCardProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const RoleManagementCard = ({ role, onRoleChange }: RoleManagementCardProps) => {
  const t = useTranslations("dashboard.editRole");
  const [open, setOpen] = useState(false);
  const currentRole = ROLE_OPTIONS.find(option => option.value === role) ?? ROLE_OPTIONS[0];
  const CurrentIcon = currentRole.icon;

  return (
    <Card className="ds-border-card flex min-h-78.5 w-full max-w-104.5 min-w-0 flex-col gap-3 overflow-hidden p-4 shadow-none">
      <CardHeader className="p-0">
        <Title size="sm">{t("roleManagement")}</Title>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 p-0">
        <Text size="sm" className="font-medium">
          {t("currentRole")}
        </Text>

        {/* Select */}
        <div className="relative">
          <Button
            onClick={() => setOpen(!open)}
            className="ds-bg-form flex h-10 w-full items-center gap-2 border px-3 text-start"
          >
            <div
              className={`ds-rounded-md flex size-8 shrink-0 items-center justify-center ${currentRole.bgColor}`}
            >
              <CurrentIcon className="ds-text-alt size-4" />
            </div>

            <Text size="sm" className="flex-1 font-medium">
              {t(`roles.${currentRole.value}.title`)}
            </Text>

            <ChevronDown
              className={`ds-text-secondary size-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </Button>

          {open && (
            <div className="ds-bg-card ds-rounded-md absolute inset-x-0 top-full z-20 mt-1 flex flex-col gap-1 border border-gray-200 p-1">
              {ROLE_OPTIONS.map(option => {
                return (
                  <RoleOptionItem
                    key={option.value}
                    option={option}
                    selected={option.value === role}
                    onSelect={() => {
                      onRoleChange(option.value);
                      setOpen(false);
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleManagementCard;
