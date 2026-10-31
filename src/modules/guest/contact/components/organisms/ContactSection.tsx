import React from "react";
import Image from "../../../../../shared/components/atoms/Image";
import Image2 from "../../../../../assets/images/ChatGPT Image Jun 11, 2026, 07_37_19 AM 2.png";
import ContactInfoCard from "../molecules/ContactInfoCard";
import ContactForm from "../molecules/ContactForm";
import Button from "../../../../../shared/components/atoms/Button";
import Title from "../../../../../shared/components/atoms/Title";
import Text  from "../../../../../shared/components/atoms/Text";

export default function ContactSection() {
  return (

    <section className="ds-container ">
<div className="text-center pt-15" >

  <Title size="lg" variant="primary" className="mb-8 font-bold">
       Contact  <span className="ds-text-alt"> Us  </span>
        </Title>

  <Text size="base" variant="secondary" className="block font-bold mb-2">
         { `Need help? we'd love to hear from you. Get in touch and our team will respond within 24 hours.`}
          </Text>

        <Button
          variant="primary"
          size="md"
          className="mt-2"
        >
        
          Send message
        </Button>
</div>
    <div className="ds-bg py-16 font-sans relative overflow-hidden min-h-screen flex items-center justify-center">
      
    

      <div className="absolute top-0 right-0 w-[400px] md:w-[700px] -translate-y-10 translate-x-20 z-0 pointer-events-none">
        <Image
          src={Image2} 
          width={800}
          height={400}
          alt="Paper plane background"
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="ds-container relative z-10 w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
      
          <ContactInfoCard />

          <ContactForm />

        </div>
      </div>

    </div>
    </section>
  );
}
