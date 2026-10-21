
import {card1 , card2 , card3 , card4 , card5 , card6 , card7 , card8 , card9 , card10 , card13 , card14 , card15 , card16 , card17} from "@/assets/images/images";

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


export const feedbackCards = [
  {
    id: 1,
    btn: "Use Template",
    titletext: "Course Evaluation Survey",
    title: "Course Evaluation Survey",
    text: "Assesses course content and delivery.",
    image:card1,
  },
  {
    id: 2,
    btn: "Use Template",
    title: "Learning Outcomes Survey",

    text: "Gathers feedback on pricing acceptability.",
    image: card2,
  },
  {
    id: 3,
    btn: "Use Template",
    title: "Student Satisfaction Survey",
    text: "Measures overall educational experience",
    image: card7,
  },
  {
    id: 4,
    btn: "Use Template",
    title: "Instructor Feedback",
    text: "Evaluates teacher or trainer performance",
    image: card8,
  },
];


export const marketCards = [
  {
    id: 5,
    btn: "Use Template",
    title: "Brand Awareness Survey",
    text: "Measures how familiar people are with your brand",
    image:card10,
  },
  {
    id: 6,
    btn: "Use Template",
    title: "Product Pricing Survey",
    text: "Gathers feedback on pricing acceptability",
    image: card9,
  },
  {
    id: 7,
    btn: "Use Template",
    title: "Consumer Preferences Survey",
    text: "Identifies customer needs and wants",
    image: card3 ,
  },
  {
    id: 8,
    btn: "Use Template",
    title: "Competitor Analysis Survey",
    text: "Compares your brand to competitors",
    image:card17,
  },
];


export const Education = [
  {
    id: 9,
    btn: "Use Template",
    title: "Course Evaluation Survey",
    text: "Assesses course content...",
    image: card10,
  },
  {
    id: 10,
    btn: "Use Template",
    title: "Learning Outcomes Survey",
    text: "Gathers feedback on pricing...",
    image: card9,
  },
  {
    id: 11,
    btn: "Use Template",
    title: "Student Satisfaction Survey",
    text: "Measures overall...",
    image: card3,
  },
  {
    id: 12,
    btn: "Use Template",
    title: "Instructor Feedback",
    text: "Evaluates teacher...",
    image: card4,
  },
];


export const eventFeedback = [
  {
    id: 13,
    btn: "Use Template",
    title: "Course Evaluation Survey",
    text: "Assesses course content...",
    image: card13,
  },
  {
    id: 14,
    btn: "Use Template",
    title: "Learning Outcomes Survey",
    text: "Gathers feedback on pricing...",
    image: card14,
  },
  {
    id: 15,
    btn: "Use Template",
    title: "Student Satisfaction Survey",
    text: "Measures overall...",
    image: card15,
  },
  {
    id: 16,
    btn: "Use Template",
    title: "Instructor Feedback",
    text: "Evaluates teacher...",
    image: card16,
  },
];
export const dataCard = [
  {
    id: 1,
    title: "1. Customer Feedback",
    highlightWord: "Surveys",
    cards: feedbackCards, 
  },
  {
    id: 2,
    title: "2. Market",
    highlightWord: "Research",
    cards: marketCards,
  },
   {
    id: 3,
    title: "3. Education",
    highlightWord: "Training",
    cards: Education,
  },
    {
    id: 4,
    title: "4.Event",
    highlightWord: "Feedback",
    cards: eventFeedback,
  }


 
];
