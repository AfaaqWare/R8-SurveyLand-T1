import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import { useTranslations } from "next-intl";

const ForgetPasswordTitle = () => {
  const t = useTranslations("forgotPassword");
  return (
    <div className="create-survey-field w-full text-center">
      <Title size="xl" className="font-bold">
        {t("title")}
      </Title>
      <Text size="sm" variant="secondary" className="font-bold">
        {t("subtitle")}
      </Text>
    </div>
  );
};

export default ForgetPasswordTitle;
