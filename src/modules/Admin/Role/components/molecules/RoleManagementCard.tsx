"use client";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import Button from "@/shared/components/atoms/Button";
import Icon from "@/shared/components/atoms/Icon";
import { User } from "@/assets/icons/icons";
import { UserRole } from "@/modules/Admin/types/RoleType";

const RoleManagementCard = ({ role }: { role: UserRole }) => {
  const t = useTranslations("dashboard.editRole");

  return (
    <Card className="ds-border-card flex min-h-78.5 w-full max-w-104.5 min-w-0 flex-col gap-3 overflow-hidden p-4 shadow-none">
      <CardHeader className="p-0">
        <Title size="sm">{t("roleManagement")}</Title>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 p-0">
        <Text size="sm" className="font-medium">
          {t("currentRole")}
        </Text>

        <div className="relative">
          <Button className="ds-bg-form flex h-10 w-full items-center gap-2 border px-3 text-start">
            <div className="ds-rounded-md ds-bg-green-soft flex size-8 shrink-0 items-center justify-center">
              <Icon IconComponent={User} className="ds-text-alt" />
            </div>
            <Text size="sm" className="flex-1 font-medium">
              {role}
            </Text>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleManagementCard;
