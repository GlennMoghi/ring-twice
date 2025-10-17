import type { JSX } from "react";

export type ServiceType = {
  name: string;
  services: string[];
};

export type Category = {
  name: string;
  description: string;
  icon: JSX.Element;
  types: ServiceType[];
};

export const data: Category[] = [
  {
    name: "Bricolage",
    description: "Handyman and DIY tasks for your home.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"
        />
      </svg>
    ),
    types: [
      {
        name: "Assembly",
        services: ["Fix a door", "Install shelves", "Assemble furniture"],
      },
      {
        name: "Painting",
        services: ["Paint walls", "Hang pictures", "Small repairs"],
      },
      {
        name: "Repairs",
        services: ["Install lighting", "Repair fixtures", "Other DIY tasks"],
      },
    ],
  },
  {
    name: "Cleaning",
    description: "Home and office cleaning services.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4h16v16H4V4z"
        />
      </svg>
    ),
    types: [
      { name: "Home Cleaning", services: ["Kitchen", "Bathroom", "Bedroom"] },
      { name: "Office Cleaning", services: ["Desks", "Floors", "Windows"] },
    ],
  },
  {
    name: "Plumbing",
    description: "Fix leaks and install plumbing fixtures.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
    types: [
      { name: "Repair", services: ["Fix leak", "Unclog drain"] },
      { name: "Installation", services: ["Install sink", "Install shower"] },
    ],
  },
  {
    name: "Electrical",
    description: "Electrical repairs and installations.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        />
      </svg>
    ),
    types: [
      { name: "Repair", services: ["Replace socket", "Fix wiring"] },
      { name: "Installation", services: ["Install light", "Install fan"] },
    ],
  },
];
