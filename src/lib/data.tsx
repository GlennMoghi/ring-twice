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
    description:
      "Petits travaux, peinture, électricité, plomberie, reparations",
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
    name: "Transport",
    description:
      "Petits travaux, peinture, électricité, plomberie, reparations",
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
      {
        name: "Jardinier",
        services: [
          "Tonte",
          "Taille de haie",
          "Ramassage de feuilles",
          "Nettoyage gouttières",
          "Autres",
        ],
      },
      {
        name: "Gros travaux de jardinage",
        services: ["Jardinage", "Plantes", "Arrosage", "Nettoyage"],
      },
    ],
  },
  {
    name: "Jardinage",
    description:
      "Petits travaux, peinture, électricité, plomberie, reparations",
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
      {
        name: "Jardinier",
        services: [
          "Tonte",
          "Taille de haie",
          "Ramassage de feuilles",
          "Nettoyage gouttières",
          "Autres",
        ],
      },
      {
        name: "Gros travaux de jardinage",
        services: ["Jardinage", "Plantes", "Arrosage", "Nettoyage"],
      },
    ],
  },
  {
    name: "Animaux",
    description:
      "Petits travaux, peinture, électricité, plomberie, reparations",
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
      {
        name: "Jardinier",
        services: [
          "Tonte",
          "Taille de haie",
          "Ramassage de feuilles",
          "Nettoyage gouttières",
          "Autres",
        ],
      },
      {
        name: "Gros travaux de jardinage",
        services: ["Jardinage", "Plantes", "Arrosage", "Nettoyage"],
      },
    ],
  },
];
