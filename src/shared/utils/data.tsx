/**
 * data.tsx — static data used by shared components (e.g. landing cards).
 *
 * TODO: define and export your data arrays here, then import them
 * from "@/shared/utils/data".
 *
 * Example:
 *   export const dataCards = [
 *     { id: 1, img: card1, alt: "Card", title: "Title", text: "Text" },
 *   ];
 */

export type PlanId = "basic" | "plus" | "business";
export type BillingCycle = "monthly" | "yearly";

export const BILLING_CYCLES: BillingCycle[] = ["monthly", "yearly"];

export interface Plan {
  id: PlanId;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "basic",
    monthlyPrice: 25,
    yearlyPrice: 20,
    features: ["responses100", "user1", "unlimitedSurveys", "unlimitedQuestions"],
  },
  {
    id: "plus",
    monthlyPrice: 50,
    yearlyPrice: 40,
    features: ["responses1000", "users3", "everythingBasic", "dropOffRates"],
  },
  {
    id: "business",
    monthlyPrice: 83,
    yearlyPrice: 66,
    features: ["responses10000", "users5", "everythingPlus", "conversionTracking"],
  },
];
