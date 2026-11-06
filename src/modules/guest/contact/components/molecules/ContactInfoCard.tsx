import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import Image from "../../../../../shared/components/atoms/Image";
import Image2 from "../../../../../assets/images/ChatGPT Image Jun 11, 2026, 07_37_19 AM 2.png";
import Title from "../../../../../shared/components/atoms/Title";
import Text from "../../../../../shared/components/atoms/Text";
import Icon from "../../../../../shared/components/atoms/Icon";
import { useTranslations } from "next-intl";

/* Shared layout for each contact info row */
const ROW_CLASS = "flex items-start gap-4";
const CIRCLE_CLASS = "ds-bg-primary flex size-12 shrink-0 items-center justify-center rounded-full shadow-sm";
const ICON_SIZE = "size-6";
const LABEL_CLASS = "font-bold capitalize";
const VALUE_CLASS = "mt-1";

export default function ContactInfoCard() {
  const t = useTranslations("publicPages.contact");

  const infoItems = [
    { id: "email", icon: Mail, value: "Support@surveyland.com" },
    { id: "phone", icon: Phone, value: "+20100123565" },
    { id: "location", icon: MapPin, value: "Mansoura, Egypt" },
  ];

  return (
    <div className="ds-primary-300 ds-rounded-2xl relative flex h-full min-h-[550px] flex-col overflow-hidden p-8 md:p-10">
      {/* Decorative plane, bottom center */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 opacity-90">
        <Image src={Image2} alt="decorative plane" className="object-contain object-bottom-left" />
      </div>

      <div className="relative z-10 space-y-6">
        <Title size="md" variant="primary" className="mb-8 font-bold">
          {t("infoTitle")}
        </Title>

        <div className="space-y-6">
          {infoItems.map(({ id, icon: IconComponent, value }) => (
            <div key={id} className={ROW_CLASS}>
              <div className={CIRCLE_CLASS}>
                <Icon IconComponent={IconComponent} size={24} variant="white" className={ICON_SIZE} />
              </div>
              <div>
                <Title size="sm" variant="primary" className={LABEL_CLASS}>
                  {t(`info${id.charAt(0).toUpperCase()}${id.slice(1)}`)}
                </Title>
                <Text size="sm" variant="secondary" className={VALUE_CLASS}>
                  {value}
                </Text>
              </div>
            </div>
          ))}

          {/* Working hours has two lines, so it stays outside the mapped list */}
          <div className={ROW_CLASS}>
            <div className={CIRCLE_CLASS}>
              <Icon IconComponent={Clock} size={24} variant="white" className={ICON_SIZE} />
            </div>
            <div>
              <Title size="sm" variant="primary" className={LABEL_CLASS}>
                {t("infoHours")}
              </Title>
              <Text size="sm" variant="secondary" className={VALUE_CLASS}>
                Sun - Thu
              </Text>
              <Text size="sm" variant="secondary">9:00 AM - 5:00 PM</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
