
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import { cn } from "@/lib/cn";

interface Props {
  title: string;
  price: string;
  priceSubtext?: string;
  features: string;
  buttonText: string;
  className?: string;
  isPopular?: boolean;
}

export default function PlanCard({ 
  title, 
  price, 
  priceSubtext,
  features, 
  buttonText,
  className,
  isPopular 
}: Props) {
  

  const isFree = price.includes("Free");

  return (
    <div
      className={cn(
     
        "flex flex-col items-center justify-between px-6 ds-rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:ds-shadow-md",
        
    
        isPopular 
          ? "ds-bg-teal-soft ds-shadow-sm py-16 scale-105 border-none" 
          : "ds-bg-alt ds-shadow-sm py-14 ds-border-sm",
          
        className
      )}
    >
      <Title variant="alt" size="md" isCenter className="font-semibold text-xl text-gray-900 mb-6">
        {title}
      </Title>

      <div className="flex flex-col items-center mb-8 w-full">
        <div className="flex items-baseline gap-1 justify-center h-12">
          
       
          <span className={cn(
            isFree 
              ? "ds-text-secondary ds-text-lg ds-font-regular" 
              : "ds-text-primary ds-title-sm ds-font-bold"  
          )}>
            {price}
          </span>
          
          {priceSubtext && (
            <span className="ds-text-secondary ds-text-sm ds-font-regular">
              {priceSubtext}
            </span>
          )}
        </div>
        
        <Text variant="secondary" size="sm" className="mt-2 text-gray-600">
          {features}
        </Text>
      </div>

    

          {/* <button 
        className={cn(
          "w-full py-3 px-4 rounded-full font-semibold transition-colors duration-300",
          isPopular 
            ? "bg-[#1ac1b8] text-white hover:bg-[#15a39b]" 
            : "bg-[#bdf3f0] text-gray-900 hover:bg-[#a6e6e2]" 
        )}
      >
        {buttonText}
      </button> */}

      <Button variant="primary" size="md" isRounded className="px-8">
        {buttonText}
      </Button>
    </div>
  );
}