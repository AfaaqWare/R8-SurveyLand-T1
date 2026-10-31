import React from "react";
import { Send } from "lucide-react";
import Button from "../../../../../shared/components/atoms/Button";
import Title from "../../../../../shared/components/atoms/Title";
import Text  from "../../../../../shared/components/atoms/Text";

export default function ContactForm() {
  return (
   

     <div className="ds-bg-card ds-rounded-2xl ds-shadow-sm p-8 md:p-10 border ds-border-muted h-full">
      
    
      <Title size="md" variant="primary" className="mb-8 font-bold">
        Get In Touch
      </Title>

      <div className="space-y-5">
        
  
        <div>
       
          <Text size="sm" variant="primary" className="block font-bold mb-2">
            Full Name
          </Text>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>

     
        <div>
          <Text size="sm" variant="primary" className="block font-bold mb-2">
            Email Address
          </Text>
          <input
            type="email"
            placeholder="Enter Your Email address"
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>

     
        <div>
          <Text size="sm" variant="primary" className="block font-bold mb-2">
            Subject
          </Text>
          <input
            type="text"
            placeholder="Enter Your subject"
            className="w-full ds-bg-form border ds-border-input ds-rounded-md px-4 py-3 ds-text-sm ds-text-primary placeholder:ds-text-disabled focus:outline-none focus:ds-border-focus focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
          />
        </div>

      
        <div>
          <Text size="sm" variant="primary" className="block font-bold mb-2">
            Message
          </Text>
          <textarea
            rows={4}
            placeholder="Type your Message here..."
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
          Send message
        </Button>

      </div>
    </div>
  );
}