import basicPlan from "../basicPlan.svg";
import premiumPlan from "../premiumPlan.svg";
import proPlan from "../proPlan.svg";

export const plansData = [
  {
    icon: basicPlan,
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of exercises",
      "Free consultation to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: premiumPlan,
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hour of exercises",
      "Free consultation of Coaches",
      "Access to minibar",
    ],
  },
  {
    icon: proPlan,
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of exercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
