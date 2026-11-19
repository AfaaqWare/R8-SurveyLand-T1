import React from 'react'
import Icon from "@/shared/components/atoms/Icon";
import Text  from "@/shared/components/atoms/Text";

interface FeatureCardProps {
  label: string;
  icon: React.ElementType;
}

export default function CardFaqs({ label, icon: IconComponent }: FeatureCardProps) {
  return (
    // <div className="flex items-center gap-3 bg-[var(--color-primary-200)] px-4 py-3 rounded-lg w-full">
    
    //   <Icon name={icon} size="sm" variant="alt" />
      
      
    //   <Text size="sm" variant="primary" className="font-medium">
    //     {label}
    //   </Text>
    // </div>

       <div className="flex items-center gap-3 bg-[var(--color-primary-200)] px-4 py-3 rounded-lg w-full">
      
    
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)] text-white shrink-0">
        <IconComponent size={12} strokeWidth={3} />
      </span>
      
      <Text size="sm" variant="primary" className="font-medium">
        {label}
      </Text>
    </div>
  )
}
