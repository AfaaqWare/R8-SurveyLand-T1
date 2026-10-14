import React from "react";
import { InfoRowProps } from "../../types/RoleType";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <div className="flex items-start gap-6">
      <Title size="sm" variant="secondary" className="w-16 shrink-0">
        {label}
      </Title>
      <Text size="sm" className="min-w-0 font-medium wrap-break-word">
        {value}
      </Text>
    </div>
  );
};

export default InfoRow;
