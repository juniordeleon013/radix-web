import type { Metadata } from "next";
import ProtocoloLanding from "@/components/protocolo/ProtocoloLanding";

export const metadata: Metadata = {
  title: "Protocolo Capilar | RADIX Formulations",
  description:
    "Landing dedicada para el Protocolo de Recuperación Capilar de RADIX Formulations.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProtocoloPage() {
  return <ProtocoloLanding />;
}
