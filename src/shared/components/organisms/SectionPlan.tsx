import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import PlanCard from "@/shared/components/molecules/PlanCard";
import { plansData } from "@/shared/utils/data";

export default function SectionPlan() {
  return (
    <div>
      <section className="my-15">
        <Title size="xl" className="mb-4 text-center font-extrabold text-gray-800">
          {"A Plan for Every Team's Journey"}
        </Title>

        <Text
          size="md"
          variant="secondary"
          isCenter
          className="mb-12 leading-relaxed text-gray-500"
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
                className={
                  plan.id === "plus"
                    ? "scale-105 transform border-cyan-200 bg-cyan-100 shadow-md"
                    : "bg-white"
                }
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
