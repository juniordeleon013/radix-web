import type { LandingDefinition } from "@/lib/landings/types";

// Central registry for all conversion-focused pages.
// Keeps route planning in one place as new funnels are added.
export const landingRegistry: LandingDefinition[] = [
  {
    key: "protocolo",
    route: "/protocolo",
    title: "Protocolo de Recuperacion Capilar",
    description: "Landing dedicada a conversion para protocolo capilar.",
    status: "draft",
  },
];
