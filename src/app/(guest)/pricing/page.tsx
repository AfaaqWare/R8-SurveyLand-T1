"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import PublicLayout from "@/shared/components/Layouts/PublicLayout";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";
import Button from "@/shared/components/atoms/Button";
import { cn } from "@/lib/cn";
import { plans, BILLING_CYCLES, type BillingCycle, type PlanId } from "@/shared/utils/data";

export default function PricingPage() {
  const t = useTranslations("pricing");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);

  return (
    <PublicLayout>
      <section
        aria-labelledby="pricing-title"
        className="ds-bg min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 lg:py-16"
      >
        <div className="mx-auto w-full max-w-6xl">

          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

            <h1 id="pricing-title" className="ds-text-xl ds-text-primary ds-font-bold">
              {t("headingPrefix")} <span className="ds-text-alt">{t("headingAccent")}</span>
            </h1>

            <Text variant="secondary" size="lg" isCenter className="mx-auto mt-3 max-w-xl sm:mt-4">
              {t("subtitle")}
            </Text>

            <div
              className="ds-bg-card ds-border-card ds-rounded-md mt-8 inline-flex items-center gap-1 border p-1.5"
              role="group"
              aria-label={t("billingLabel")}
            >
              {BILLING_CYCLES.map(cycle => (
                <Button
                  key={cycle}
                  variant={billingCycle === cycle ? "primary" : "ghost"}
                  size="md"
                  onClick={() => setBillingCycle(cycle)}
                  aria-pressed={billingCycle === cycle}
                  className="min-w-28"
                >
                  {t(cycle)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plans.map(plan => {
              const featured = plan.id === "plus";
              const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const selected = selectedPlan === plan.id;

              return (
                <article
                  key={plan.id}
                  className={cn(
                    "ds-rounded-md relative flex min-w-0 flex-col border transition-all duration-300",
                    featured
                      ? "ds-bg-primary ds-border-primary ds-shadow-card xl:-translate-y-3"
                      : "ds-bg-card ds-border-card ds-shadow-card",
                    selected && "ring-var(--color-primary) ring-2 ring-offset-2"
                  )}
                >
                  <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                    <Title size="md" variant={featured ? "white" : "primary"} className="font-bold">
                      {t(`plans.${plan.id}.name`)}
                    </Title>

                    <Text size="base" variant={featured ? "white" : "secondary"} className="mt-8">
                      {t(`plans.${plan.id}.description`)}
                    </Text>

                    <div
                      className={cn(
                        "mt-6 flex items-baseline gap-2 border-b pb-6",
                        featured ? "border-white/30" : "ds-border-muted"
                      )}
                    >
                      <span
                        className={cn(
                          "ds-text-xl ds-font-bold",
                          featured ? "text-white" : "ds-text-primary"
                        )}
                      >
                        ${price}
                      </span>
                      <span
                        className={cn("ds-text-sm", featured ? "text-white" : "ds-text-secondary")}
                      >
                        {billingCycle === "monthly" ? t("perMonth") : t("perYear")}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "ds-text-sm ds-font-bold mt-6",
                        featured ? "text-white" : "ds-text-primary"
                      )}
                    >
                      {t("includedTitle")}
                    </h3>

                    <ul className="mt-4 flex-1 space-y-4">
                      {plan.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                          <span
                            className={cn(
                              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                              featured ? "ds-text-alt bg-white" : "ds-bg-primary ds-text-white"
                            )}
                            aria-hidden="true"
                          >
                            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                              <path
                                d="m3.5 8.2 2.8 2.7 6.2-6.1"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <Text size="sm" variant={featured ? "white" : "secondary"}>
                            {t(`features.${feature}`)}
                          </Text>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={featured ? "white" : "primary"}
                      size="md"
                      isFullWidth
                      onClick={() => setSelectedPlan(plan.id)}
                      aria-pressed={selected}
                      className="mt-8 font-bold"
                    >
                      {selected ? t("selected") : t("choosePlan")}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
