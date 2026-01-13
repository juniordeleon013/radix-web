import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RADIX Formulations | Tratamientos Capilares de Grado Clínico",
  description: "Tratamientos capilares de grado clínico. Selección curada y validada científicamente. Productos 100% originales con disponibilidad inmediata.",
  keywords: "minoxidil, tratamiento capilar, kirkland, first botany, dermaroller, alopecia, caída del cabello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-radix-secondary text-slate-800">
        {children}
      </body>
    </html>
  );
}


