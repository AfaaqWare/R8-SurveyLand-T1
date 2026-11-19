// 

import React from 'react';
import { useTranslations } from 'next-intl';
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import CardFaqs from "@/modules/guest/faqs/components/molecules/CardFaqs";
import CardQuestion from "@/modules/guest/faqs/components/molecules/CardQuestion";
import { Card } from "@/shared/components/atoms/Card";
import { ChevronRight } from "@/assets/icons/icons";

export default function FaqsSection() {
  const t = useTranslations('publicPages.faqsPage');
  
  const features = t.raw('features') as string[];
  const faqs = t.raw('faqs') as { question: string; answer: string }[];

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 py-8">
      
      <Card className="border-[var(--border-color)]">
        <div className="p-6 md:p-8">
          <Title 
            size="md" 
            variant="alt" 
            className="mb-4 text-[var(--color-primary)]"
          >
            {t('title')}
          </Title>

          <Text 
            size="sm" 
            variant="secondary" 
            className="mb-8 max-w-4xl leading-relaxed"
          >
            {t('description')}
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <CardFaqs
                key={index} 
                label={feature} 
                icon={ChevronRight} 
              />
            ))}
          </div>
        </div>
      </Card>

      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <CardQuestion 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>

    </div>
  )
}