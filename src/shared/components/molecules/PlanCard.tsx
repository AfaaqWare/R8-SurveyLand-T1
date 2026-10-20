
import Title from "../atoms/Title";
import Text from "../atoms/Text";
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
     
        "rounded-2xl flex flex-col items-center justify-between px-6 text-center transition-all duration-300 ease-in-out cursor-pointer",
        
       
        "hover:-translate-y-2 hover:shadow-lg",
        
    
        isPopular 
          ? "bg-[#e0f7fa] border-none shadow-md py-20 scale-105" 
          : "bg-white border border-gray-100 shadow-sm py-14",
          
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
              ? "text-lg text-gray-500 font-medium" 
              : "text-4xl text-gray-900 font-bold"  
          )}>
            {price}
          </span>
          
          {priceSubtext && (
            <span className="text-sm font-medium text-gray-600">
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
          "w-full py-3 px-4 rounded-full font-medium text-white transition-colors bg-teal-400 hover:bg-teal-500"
        )}
      >
        {buttonText}
      </button> */}

          <button 
        className={cn(
          "w-full py-3 px-4 rounded-full font-semibold transition-colors duration-300",
          isPopular 
            ? "bg-[#1ac1b8] text-white hover:bg-[#15a39b]" 
            : "bg-[#bdf3f0] text-gray-900 hover:bg-[#a6e6e2]" 
        )}
      >
        {buttonText}
      </button>
    </div>
  );
}