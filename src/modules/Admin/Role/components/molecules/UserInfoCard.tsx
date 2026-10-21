import { Card, CardContent, CardHeader } from "@/shared/components/atoms/Card";
import AppImage from "@/shared/components/atoms/Image";
import { useTranslations } from "next-intl";
import Title from "@/shared/components/atoms/Title";
import { UserInfoCardProps } from "../../../types/RoleType";
import InfoRow from "./InfoRow";
import { defaultAvatar } from "@/assets/images/images";


const UserInfoCard = ({ user }: UserInfoCardProps) => {
  const t = useTranslations("dashboard.editRole");
  return (
    <Card className="ds-border-card min-h-78.5 max-w-104.5 min-w-0 p-4 shadow-none">
      <CardHeader className="p-0">
        <Title size="sm">{t("userInfo")}</Title>
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex items-start gap-3">
          <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-full">
            <AppImage
              src={user.image ?? defaultAvatar}
              alt={user.name}
              fill
              sizes="40px"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <InfoRow label="Full Name" value={user.name} />
            <InfoRow label="Email" value={user.email} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
