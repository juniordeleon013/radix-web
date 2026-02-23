"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function ProtocoloLanding() {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [extraMinoxidilUnits, setExtraMinoxidilUnits] = useState(0);
  const kitPrice = 1450;
  const shampooRegularPrice = 1250;
  const shampooOfferDiscount = 100;
  const shampooOfferPrice = shampooRegularPrice - shampooOfferDiscount;
  const shippingAverage = 350;
  const dermarollerPrice = 700;
  const minoxidilPrice = 800;
  const minoxidilExtraDiscount = 100;
  const minoxidilExtraOfferPrice = minoxidilPrice - minoxidilExtraDiscount;
  const protocolReminderValue = 600;
  const extraMinoxidilCost = extraMinoxidilUnits * minoxidilExtraOfferPrice;
  const extraMinoxidilSavings = extraMinoxidilUnits * minoxidilExtraDiscount;
  const kitCurrentTotal = kitPrice + extraMinoxidilCost;
  const comboTotal = kitCurrentTotal + shampooOfferPrice;
  const comboDiscountTotal = shampooOfferDiscount + extraMinoxidilSavings;

  const baseTotalWithoutDiscounts =
    dermarollerPrice + minoxidilPrice + shippingAverage + protocolReminderValue;
  const totalWithoutDiscounts = baseTotalWithoutDiscounts + extraMinoxidilUnits * minoxidilPrice;
  const totalSavings = totalWithoutDiscounts - kitCurrentTotal;
  const comboTotalWithoutDiscounts = totalWithoutDiscounts + shampooRegularPrice;
  const comboSavingsTotal = comboTotalWithoutDiscounts - comboTotal;
  const kitWhatsappText =
    extraMinoxidilUnits > 0
      ? `Hola Radix, quiero pedir el Kit Recuperación Capilar + ${extraMinoxidilUnits} Minoxidil adicional(es) con descuento. Total: RD$ ${kitCurrentTotal.toLocaleString()}.`
      : "Hola Radix, quiero pedir el Kit Recuperación Capilar (Minoxidil + Dermaroller).";
  const comboWhatsappText =
    extraMinoxidilUnits > 0
      ? `Hola Radix, quiero pedir el Kit Recuperación Capilar + Shampoo Biotin + ${extraMinoxidilUnits} Minoxidil adicional(es) con descuento. Total de la oferta: RD$ ${comboTotal.toLocaleString()}.`
      : `Hola Radix, quiero pedir el Kit Recuperación Capilar + Shampoo Biotin. Total de la oferta: RD$ ${comboTotal.toLocaleString()}.`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="bg-white text-slate-900 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-radix-primary/30 text-radix-primary px-3 py-1 text-xs tracking-wide uppercase mb-6">
              Protocolo Oficial Radix
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-radix-primary">
              ¿Caída de cabello o zonas con poca densidad?
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              Recupera tu densidad con el Kit de Recuperación Capilar: Minoxidil + Dermaroller.
            </p>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-black">
            <video
              className="w-full h-[250px] sm:h-[360px] md:h-[460px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.22.30_PM_edggz2.jpg"
            >
              <source src="/videos/protocolo-hero.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#solucion"
              className="inline-flex items-center justify-center rounded-full bg-radix-primary text-white px-7 py-3.5 font-semibold hover:bg-[#0a2f22] transition-colors"
            >
              Quiero empezar mi recuperación
            </a>
          </div>
        </div>
      </section>

      {/* DUDAS / OBJECIONES */}
      <section id="dudas" className="bg-white text-slate-900 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-radix-primary mb-10">
            Resolvamos tus dudas antes de empezar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                q: "¿Funciona si ya probé otros productos?",
                a: "Sí. Muchos clientes llegan después de probar opciones sueltas sin constancia. Aquí trabajas con un protocolo estructurado: Minoxidil para estimulación diaria + Dermaroller para mejorar absorción + guía paso a paso. Esa combinación suele ser más efectiva que usar productos aislados sin un plan claro.",
              },
              {
                q: "¿En cuánto tiempo se ven cambios?",
                a: "Con uso correcto y constancia, normalmente se observan primeras señales entre 8 y 12 semanas (menos caída y aparición de vello fino). Los cambios más visibles en densidad suelen consolidarse entre el mes 3 y 6. La clave es mantener la rutina y no interrumpirla.",
              },
              {
                q: "¿Es complicado usarlo?",
                a: "No es complicado. Recibes una guía práctica con frecuencia de uso, orden recomendado y cuidados básicos para evitar errores comunes. Además, tendrás recordatorio diario por mensaje para ayudarte a cumplir el protocolo sin olvidar aplicaciones.",
              },
              {
                q: "¿El envío tiene costo?",
                a: "Dentro del Distrito Nacional y Santo Domingo Este el envío es gratuito en zonas aplicables. Los pedidos salen los domingos y se coordinan previamente por WhatsApp. El beneficio aplica con transferencia bancaria; no aplica para envíos contra entrega.",
              },
            ].map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-radix-primary hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-radix-primary">{item.q}</h3>
                <p className="mt-2 text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-slate-100 text-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-radix-primary mb-10">
            ¿Cómo trabaja el protocolo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Minoxidil para estimular el crecimiento capilar.",
              "Dermaroller para mejorar la absorción y activar la zona.",
              "Constancia con protocolo guiado para mantener resultados.",
            ].map((step, idx) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-radix-primary uppercase">Paso {idx + 1}</p>
                <p className="mt-3 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white text-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-radix-primary mb-10">
            Beneficios del Kit de Recuperación Capilar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Ayuda a reducir la caída progresiva del cabello.",
              "Aumenta la densidad en zonas despobladas.",
              "Mejora la absorción del tratamiento con dermaroller.",
              "Incluye guía de uso clara para no improvisar.",
              "Recibe un mensaje diario de seguimiento para recordar aplicarte el protocolo (valor: RD$ 600).",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-radix-primary mt-0.5" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA PRINCIPAL */}
      <section id="solucion" className="bg-slate-100 text-slate-900 py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-radix-primary mb-10">
            Tu oferta final
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="relative min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <Image
                src="https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.22.30_PM_edggz2.jpg"
                alt="Kit Recuperación Capilar"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-7 md:p-9 shadow-sm">
              <p className="text-sm uppercase tracking-wider text-radix-primary font-semibold mb-2">Producto principal</p>
              <h3 className="text-3xl font-bold text-radix-primary">Kit Recuperación Capilar</h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex flex-wrap items-center gap-2">
                  <span>• x1 Minoxidil Kirkland</span>
                  <button
                    onClick={() => setExtraMinoxidilUnits((prev) => prev + 1)}
                    className="text-xs rounded-full border border-radix-primary px-2.5 py-1 text-radix-primary hover:bg-radix-primary/5 transition-colors"
                  >
                    + pedir más (descuento)
                  </button>
                </li>
                {extraMinoxidilUnits > 0 && (
                  <li className="text-sm text-radix-primary font-medium">
                    + x{extraMinoxidilUnits} Minoxidil extra (RD$ {minoxidilExtraOfferPrice.toLocaleString()} c/u)
                    <button
                      onClick={() => setExtraMinoxidilUnits((prev) => Math.max(0, prev - 1))}
                      className="ml-2 text-xs rounded-full border border-slate-300 px-2 py-0.5 text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      quitar 1
                    </button>
                  </li>
                )}
                <li>• x1 Dermaroller Premium</li>
                <li>• x1 Guía de protocolo Radix</li>
              </ul>

              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-emerald-800 font-semibold">Envío gratuito</p>
                <p className="text-emerald-700 text-sm mt-1">
                  Distrito Nacional y Santo Domingo Este.
                </p>
                <Link
                  href="/protocolo/envios"
                  className="inline-block mt-2 text-sm text-emerald-800 underline underline-offset-2 hover:text-emerald-900 transition-colors"
                >
                  Ciertas restricciones aplican
                </Link>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <p className="text-3xl font-bold text-slate-900">RD$ {kitCurrentTotal.toLocaleString()}</p>
                <p className="text-lg text-slate-500 line-through">RD$ {totalWithoutDiscounts.toLocaleString()}</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-radix-primary">
                Ahorro estimado actual: RD$ {totalSavings.toLocaleString()}
              </p>

              <div className="mt-5 rounded-xl border border-radix-primary/20 bg-radix-primary/5 p-4">
                <p className="text-radix-primary font-bold">Recuento sin descuentos</p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Dermaroller Premium: RD$ {dermarollerPrice.toLocaleString()}</li>
                  <li>• Minoxidil Kirkland: RD$ {minoxidilPrice.toLocaleString()}</li>
                  {extraMinoxidilUnits > 0 && (
                    <li>
                      • {extraMinoxidilUnits} Minoxidil adicional(es): RD$ {(extraMinoxidilUnits * minoxidilPrice).toLocaleString()} (regular)
                    </li>
                  )}
                  <li>• Envío promedio: RD$ {shippingAverage.toLocaleString()}</li>
                  <li>• Recordatorio diario por mensaje: RD$ {protocolReminderValue.toLocaleString()}</li>
                  <li>• Guía de uso Radix: Incluida sin costo</li>
                </ul>
                <p className="mt-3 text-base font-bold text-slate-900">
                  Total sin descuentos: RD$ {totalWithoutDiscounts.toLocaleString()}
                </p>
                {extraMinoxidilUnits > 0 && (
                  <p className="mt-1 text-sm font-medium text-radix-primary">
                    Ahorro por Minoxidil adicional: RD$ {extraMinoxidilSavings.toLocaleString()}
                  </p>
                )}
              </div>

              <p className="mt-6 text-sm text-slate-600">
                Antes de finalizar, tendrás una oferta especial para agregar Shampoo Biotin con descuento.
              </p>
              <button
                onClick={() => setShowOfferModal(true)}
                className="mt-6 inline-flex w-full md:w-auto justify-center items-center rounded-full bg-radix-primary text-white px-7 py-3 font-semibold hover:bg-[#0a2f22] transition-colors"
              >
                Quiero este pedido
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="bg-slate-100 text-slate-900 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-radix-primary mb-10">
            Lo que dicen clientes reales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["“Ya veo pelusas!”", "“Cerré el hueco”", "“Llegó a tiempo”"].map((quote) => (
              <article key={quote} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                  Screenshot / Antes-Después
                </div>
                <p className="p-4 font-medium text-slate-800">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-radix-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a href="#dudas" className="inline-block font-bold text-lg mb-3 hover:underline underline-offset-2">
                FAQ
              </a>
              <ul className="space-y-1 text-slate-200 text-sm">
                <li>• ¿En cuánto tiempo veo resultados?</li>
                <li>• ¿Cómo uso el dermaroller?</li>
                <li>• ¿Qué pasa si ya usé minoxidil?</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Envíos</h3>
              <ul className="space-y-1 text-slate-200 text-sm">
                <li>• Gratis en Distrito Nacional y Santo Domingo Este</li>
                <li>• Entrega coordinada por WhatsApp</li>
                <li>• Seguimiento de pedido</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Contacto</h3>
              <p className="text-slate-200 text-sm">WhatsApp: +1 (849) 340-8364</p>
              <a
                href="https://wa.me/18493408364?text=Hola%20Radix,%20necesito%20ayuda%20con%20el%20protocolo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm rounded-full bg-white text-radix-primary px-4 py-2 font-semibold hover:bg-slate-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chatear ahora
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm text-slate-200">© {new Date().getFullYear()} Radix Formulations</p>
            <Link
              href="/"
              className="text-sm inline-flex items-center gap-2 border border-white/40 rounded-full px-4 py-2 hover:bg-white hover:text-radix-primary transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE */}
      <a
        href="https://wa.me/18493408364?text=Hola%20Radix,%20quiero%20informaci%C3%B3n%20del%20protocolo"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 font-semibold shadow-2xl hover:brightness-95 transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>

      {showOfferModal && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowOfferModal(false)}
        >
          <div
            className="w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-radix-primary text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Oferta especial antes de finalizar</h3>
              <button
                onClick={() => setShowOfferModal(false)}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
                aria-label="Cerrar oferta"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                <div className="relative h-60 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.26.39_PM_vemzhg.jpg"
                    alt="Shampoo Biotin"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase text-radix-primary font-semibold">
                    Solo por esta oferta
                  </p>
                  <h4 className="text-2xl font-bold mt-1">Agrega Shampoo Biotin</h4>
                  <p className="text-slate-600 mt-2">
                    Complementa tu protocolo con un descuento exclusivo de cierre.
                  </p>
                  <ul className="mt-3 text-sm text-slate-700 space-y-1">
                    <li>• Fortalece la hebra capilar</li>
                    <li>• Limpieza profunda sin maltratar</li>
                    <li>• Apoyo ideal para mantenimiento</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-bold text-radix-primary">Desglose del total con oferta</p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Kit Recuperación Capilar: RD$ {kitPrice.toLocaleString()}</li>
                  {extraMinoxidilUnits > 0 && (
                    <li>
                      • {extraMinoxidilUnits} Minoxidil adicional(es) con descuento: RD$ {extraMinoxidilCost.toLocaleString()}
                    </li>
                  )}
                  <li>• Shampoo Biotin (precio regular): RD$ {shampooRegularPrice.toLocaleString()}</li>
                  <li>• Descuento de esta oferta: -RD$ {shampooOfferDiscount.toLocaleString()}</li>
                  {extraMinoxidilUnits > 0 && (
                    <li>
                      • Descuento por Minoxidil adicional: -RD$ {extraMinoxidilSavings.toLocaleString()}
                    </li>
                  )}
                </ul>
                <p className="mt-2 text-sm font-semibold text-radix-primary">
                  Descuento comercial directo: -RD$ {comboDiscountTotal.toLocaleString()}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Total sin beneficios/desc.: RD$ {comboTotalWithoutDiscounts.toLocaleString()}
                </p>
                <p className="mt-1 text-sm font-semibold text-radix-primary">
                  Ahorro total aplicado: -RD$ {comboSavingsTotal.toLocaleString()}
                </p>
                <p className="mt-3 text-xl font-bold text-slate-900">
                  Total con shampoo: RD$ {comboTotal.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/18493408364?text=${encodeURIComponent(comboWhatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center rounded-full bg-radix-primary text-white px-6 py-3 font-semibold hover:bg-[#0a2f22] transition-colors"
                >
                  Sí, agregar shampoo
                </a>
                <a
                  href={`https://wa.me/18493408364?text=${encodeURIComponent(kitWhatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center rounded-full border border-slate-300 text-slate-700 px-6 py-3 font-semibold hover:bg-slate-100 transition-colors"
                >
                  Continuar solo con kit
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
