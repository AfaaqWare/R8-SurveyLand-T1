import React from "react";
import { Send } from "lucide-react";
import Button from "../../../../../shared/components/atoms/Button";
import Title from "../../../../../shared/components/atoms/Title";
import Text  from "../../../../../shared/components/atoms/Text";
import { useTranslations } from "next-intl";

export default function ContactForm() {
   const t = useTranslations("publicPages.contact");
  return (
   

     <div className="ds-bg-card ds-rounded-2xl ds-shadow-sm p-8 md:p-10 border ds-border-muted h-full">
      
    
      <Title size="md" variant="primary" className="mb-8 font-bold">
        {t("formTitle")}
      </Title>

      <div className="space-y-5">
        
  
        <div>
       
          <Text size="sm" variant="primary" className="block font-bold mb-2">
         {t("fullName")}
          </Text>
          <input
            type="text"
            placeholder={t("fullNamePlaceholder")}
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>

     
        <div>
          <Text size="sm" variant="primary" className="block font-bold mb-2">
           {t("email")}
          </Text>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>

     
        <div>
          <Text size="sm" variant="primary" className="block font-bold mb-2">
          {t("subject")}
          </Text>
          <input
            type="text"
            placeholder={t("subjectPlaceholder")}
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>

      
        <div>
          <Text size="sm" variant="primary" className="block font-bold mb-2">
           {t("message")}
          </Text>
          <textarea
            rows={4}
            placeholder={t("messagePlaceholder")}
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
          ></textarea>
        </div>

      
        <Button
          variant="primary"
          size="md"
          isFullWidth={true}
          className="mt-2"
        >
          <Send className="w-5 h-5" />
         {t("sendMessage")}
        </Button>

      </div>
    </div>
  );
}