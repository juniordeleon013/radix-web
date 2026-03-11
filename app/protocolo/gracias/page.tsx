"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, ShieldCheck, Truck } from "lucide-react";

export default function ProtocoloGraciasPage() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const parsedTotal = Number(params.get("total") ?? "0");
    setTotal(Number.isFinite(parsedTotal) ? parsedTotal : 0);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-4 py-1.5 text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" />
            Pedido recibido
          </div>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-radix-primary">
            Gracias por tu pedido
          </h1>

          <p className="mt-3 text-slate-700">
            Hemos registrado tu solicitud correctamente. En breve vamos a coordinar tu entrega
            por WhatsApp para confirmar detalles de ubicación, horario y disponibilidad.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-600">Total de tu pedido</p>
            <p className="text-2xl font-bold text-slate-900">
              {total > 0 ? `RD$ ${total.toLocaleString()}` : "RD$ -"}
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-radix-primary mt-0.5" />
              <p className="text-sm text-slate-700">
                Si elegiste envío express, el costo final de envío se confirma según zona.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShoppingCart className="w-5 h-5 text-radix-primary mt-0.5" />
              <p className="text-sm text-slate-700">
                Tu orden se procesa por orden de llegada. Mientras más rápido confirmes por WhatsApp,
                más rápido se agenda tu entrega.
              </p>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
