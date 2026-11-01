import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "../../../../../shared/components/atoms/Image";
import Image2 from "../../../../../assets/images/ChatGPT Image Jun 11, 2026, 07_37_19 AM 2.png"; 
import Title from "../../../../../shared/components/atoms/Title";
import Text  from "../../../../../shared/components/atoms/Text";
import { useTranslations } from "next-intl";


export default function ContactInfoCard() {
  const t = useTranslations("publicPages.contact");
  return (
  
 <div className="ds-bg-primary-300 ds-rounded-2xl p-8 md:p-10 flex flex-col relative overflow-hidden h-full min-h-[550px]">
      
    
      <div className="absolute bottom-0 left-0 w-64 h-32 pointer-events-none opacity-90">
        <Image 
          src={Image2} 
          alt="decorative plane" 
          className="object-contain object-bottom-left" 
        />
      </div>

      <div className="relative z-10">
   
        <Title size="md" variant="primary" className="mb-8 font-bold">
          {t("infoTitle")}
        </Title>

        <div className="space-y-6">
          
      
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full ds-bg-alt flex items-center justify-center shrink-0 shadow-sm ds-text-alt">
              <Mail className="w-6 h-6" />
            </div>
            <div>
         
              <Title size="sm" variant="primary" className="font-bold capitalize">
              {t("infoEmail")}
              </Title>
          
              <Text size="sm" variant="secondary" className="mt-1">
                Support@surveyland.com
              </Text>
            </div>
          </div>

      
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full ds-bg-alt flex items-center justify-center shrink-0 shadow-sm ds-text-alt">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <Title size="sm" variant="primary" className="font-bold capitalize">
               {t("infoPhone")}
              </Title>
              <Text size="sm" variant="secondary" className="mt-1">
                +20100123565
              </Text>
            </div>
          </div>

   
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full ds-bg-alt flex items-center justify-center shrink-0 shadow-sm ds-text-alt">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <Title size="sm" variant="primary" className="font-bold capitalize">
             {t("infoLocation")}
              </Title>
              <Text size="sm" variant="secondary" className="mt-1">
                Mansoura, Egypt
              </Text>
            </div>
          </div>

        
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full ds-bg-alt flex items-center justify-center shrink-0 shadow-sm ds-text-alt">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <Title size="sm" variant="primary" className="font-bold capitalize">
               {t("infoHours")}
              </Title>
              <Text size="sm" variant="secondary" className="mt-1">
                Sun - Thu
              </Text>
              <Text size="sm" variant="secondary">
                9:00 AM - 5:00 PM
              </Text>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}