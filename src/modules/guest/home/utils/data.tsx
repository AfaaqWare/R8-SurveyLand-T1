import {card1 , card2 , card3 , card4 , card5 , card6 , card7 , card8 , card9 , card10 , card13 , card14 , card15 , card16 , card17} from "@/assets/images/images";

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
export const plansData = [
  {
    id: "basic",
    title: "Basic",
    price: "Free forever",
    features: "100 responses",
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    id: "plus",
    title: "Plus",
    price: "$50",
    priceSubtext: "/month",
    features: "1,000 responses",
    buttonText: "Choose Plus",
    isPopular: true,
  },
  {
    id: "business",
    title: "Business",
    price: "$83",
    priceSubtext: "/month",
    features: "10,000 responses",
    buttonText: "Go Business",
    isPopular: false,
  },
];