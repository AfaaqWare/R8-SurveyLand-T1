import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import PlanCard from "@/shared/components/molecules/PlanCard";
import { plansData } from "@/shared/utils/data";

export default function SectionPlan() {
  return (
    <div>
      <section className="ds-container py-20">



  
        <Title size="xl"   isCenter className="mb-4 ds-text-primary ">
          {"A Plan for Every Team's Journey"}
        </Title>

        <Text
          size="md"
          variant="secondary"
          isCenter
          className="mb-12 "
        >
          No hidden fees. Choose the plan that fits your needs
        </Text>

        <div className="mx-auto my-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plansData.map(plan => {
            return (
              <PlanCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                priceSubtext={plan.priceSubtext}
                features={plan.features}
                buttonText={plan.buttonText}
                isPopular={plan.isPopular}
             
              />
            );
          })}
        </div>

           <div className="flex justify-center">
        <Button variant="primary" size="lg" className="px-8">
          Not Sure? See All Pricing Options
        </Button>
      </div>
      </section>
    </div>
  );
}
