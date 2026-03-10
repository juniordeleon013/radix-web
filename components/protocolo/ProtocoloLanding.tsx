"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

type SocialProofCase = {
  id: string;
  quote: string;
  customer: string;
  beforeImage?: string;
  afterImage?: string;
};

export default function ProtocoloLanding() {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [extraMinoxidilUnits, setExtraMinoxidilUnits] = useState(0);
  const [activeHeroItem, setActiveHeroItem] = useState(0);
  const kitPrice = 1450;
  const shampooRegularPrice = 1500;
  const shampooOfferDiscount = 350;
  const shampooOfferPrice = shampooRegularPrice - shampooOfferDiscount;
  const shippingAverage = 350;
  const dermarollerPrice = 700;
  const minoxidilPrice = 800;
  const minoxidilExtraDiscount = 100;
  const minoxidilExtraOfferPrice = minoxidilPrice - minoxidilExtraDiscount;
  const protocolReminderValue = 200;
  const personalizedAdvisoryValue = 600;
  const extraMinoxidilCost = extraMinoxidilUnits * minoxidilExtraOfferPrice;
  const extraMinoxidilRegularCost = extraMinoxidilUnits * minoxidilPrice;
  const extraMinoxidilSavings = extraMinoxidilUnits * minoxidilExtraDiscount;
  const kitCurrentTotal = kitPrice + extraMinoxidilCost;
  const comboTotal = kitCurrentTotal + shampooOfferPrice;
  const comboDiscountTotal = shampooOfferDiscount + extraMinoxidilSavings;

  const baseTotalWithoutDiscounts =
    dermarollerPrice +
    minoxidilPrice +
    shippingAverage +
    protocolReminderValue +
    personalizedAdvisoryValue;
  const totalWithoutDiscounts = baseTotalWithoutDiscounts + extraMinoxidilUnits * minoxidilPrice;
  const totalSavings = totalWithoutDiscounts - kitCurrentTotal;
  const comboRegularSubtotal = kitPrice + extraMinoxidilRegularCost + shampooRegularPrice;
  const kitWhatsappText =
    extraMinoxidilUnits > 0
      ? `Hola Radix, quiero pedir el Kit Recuperación Capilar + ${extraMinoxidilUnits} Minoxidil adicional(es) con descuento. Total: RD$ ${kitCurrentTotal.toLocaleString()}.`
      : "Hola Radix, quiero pedir el Kit Recuperación Capilar (Minoxidil + Dermaroller).";
  const comboWhatsappText =
    extraMinoxidilUnits > 0
      ? `Hola Radix, quiero pedir el Kit Recuperación Capilar + Shampoo Biotin + ${extraMinoxidilUnits} Minoxidil adicional(es) con descuento. Total de la oferta: RD$ ${comboTotal.toLocaleString()}.`
      : `Hola Radix, quiero pedir el Kit Recuperación Capilar + Shampoo Biotin. Total de la oferta: RD$ ${comboTotal.toLocaleString()}.`;
  const kitWhatsappUrl = `https://wa.me/18493408364?text=${encodeURIComponent(kitWhatsappText)}`;
  const comboWhatsappUrl = `https://wa.me/18493408364?text=${encodeURIComponent(comboWhatsappText)}`;

  const handleCloseModalToWhatsapp = () => {
    setShowOfferModal(false);
    window.open(kitWhatsappUrl, "_blank", "noopener,noreferrer");
  };
  const socialProofCases: SocialProofCase[] = [
    {
      id: "caso-1",
      quote: "“Llevo un mes sin fallo, y realmente estoy impresionado con el cambio que he dado, ya que yo soy una persona que no es de salir mucho bello facial.”",
      customer: "Cliente Radix - Mes 1",
      beforeImage: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1772412949/WhatsApp_Image_2026-03-01_at_8.39.50_PM_pz6ric.jpg",
      afterImage: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1772413091/WhatsApp_Image_2026-03-01_at_8.40.02_PM_twjfms.jpg",
    },
    {
      id: "caso-2",
      quote: "“Las cejas me han crecido bastante, es lo que buscaba ya que las tenia desplobladas ahora si me gusta como me quedan.”",
      customer: "Cliente Radix - Mes 1",
      beforeImage: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1772413209/WhatsApp_Image_2026-03-01_at_8.47.37_PM_sliecw.jpg",
      afterImage: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1772413208/WhatsApp_Image_2026-03-01_at_8.47.45_PM_lsd3iz.jpg",
    },
    {
      id: "caso-3",
      quote: "“Lo he usado el protocolo por casi 5 meses, y los resultados son notables, mi unico miedo es volver a perderlo por mi edad.”",
      customer: "Cliente Radix - Mes 5",
      beforeImage: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1772413506/Screenshot_42_fkda30.png",
      afterImage: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1772413506/Screenshot_43_sjda8l.png",
    },
  ];
  const heroItems = [
    "Productos 100% original y sellados.",
    "Envío totalmente gratis.",
    "Oferta por tiempo limitado.",
  ];
  const handlePrevHeroItem = () => {
    setActiveHeroItem((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };
  const handleNextHeroItem = () => {
    setActiveHeroItem((prev) => (prev + 1) % heroItems.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroItem((prev) => (prev + 1) % heroItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [heroItems.length]);

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* HERO */}
      <section className="bg-white text-slate-900">
        <div className="w-full border-b border-[#0f221a] bg-[#1A3026]">
          <div className="relative flex h-12 items-center justify-center px-12">
            <button
              onClick={handlePrevHeroItem}
              aria-label="Item anterior"
              className="absolute left-3 inline-flex h-8 w-8 items-center justify-center text-white/90 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-center text-sm font-semibold text-white">
              {heroItems[activeHeroItem]}
            </p>
            <button
              onClick={handleNextHeroItem}
              aria-label="Siguiente item"
              className="absolute right-3 inline-flex h-8 w-8 items-center justify-center text-white/90 hover:text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-radix-primary">
              ¿Caída de cabello, zonas con poca densidad o no te crece la Barba?
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              Activa tu crecimiento con el protocolo de recuperación capilar más eficaz del mercado:{" "}
              <strong>Minoxidil + Dermaroller.</strong> Ciencia y naturaleza desde la raíz.
              <br />
              <span className="mt-3 inline-flex items-center rounded-full bg-[#1A3026] text-white border border-[#1A3026] px-3 py-1 text-xs font-semibold">
                Envío Gratis Paga al Recibir
              </span>
            </p>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 md:p-10 flex flex-col justify-center bg-slate-50">
                <p className="text-sm uppercase tracking-wider text-radix-primary font-semibold">
                  ¿Para quién es este kit?
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-radix-primary leading-tight">
                  Diseñado para hombres que quieren recuperar su imagen y su confianza
                </h3>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {[
                    "Hombres que quieren detener la caída.",
                    "Hombres que desean recuperar su pelo.",
                    "Hombres que desean crecer la barba.",
                    "Hombres que quieren una barba más densa y uniforme.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-radix-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[320px] md:min-h-[460px] bg-black">
                <Image
                  src="https://res.cloudinary.com/db1pgmsnn/image/upload/v1772409699/WhatsApp_Image_2026-03-01_at_3.56.44_PM_rooq1f.jpg"
                  alt="Kit Recuperación Capilar Radix"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#producto-principal"
              className="inline-flex items-center justify-center rounded-full bg-radix-primary text-white px-7 py-3.5 font-semibold hover:bg-[#0a2f22] transition-colors"
            >
              Quiero Empezar el Protocolo Ahora!
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
                q: "¿En cuánto tiempo se ven cambios?",
                a: "Con uso correcto y constancia, normalmente se observan primeras señales entre 4 y 8 semanas (menos caída y aparición de vello fino). Los cambios más visibles en densidad suelen consolidarse entre el mes 3 y 6. La clave es mantener la rutina y no interrumpirla.",
              },
              {
                q: "¿El envío tiene costo?",
                a: "Dentro del Distrito Nacional y Santo Domingo Este el envío es gratuito en zonas aplicables. Los pedidos salen los domingos y se coordinan previamente por WhatsApp. Puedes apartar sin pago previo y pagar al momento de la entrega.",
              },
              {
                q: "¿Funciona si ya probé otros productos?",
                a: "Sí. Muchos clientes llegan después de probar opciones sueltas sin constancia. Aquí trabajas con un protocolo estructurado: Minoxidil para estimulación diaria + Dermaroller para mejorar absorción + guía paso a paso. Esa combinación suele ser más efectiva que usar productos aislados sin un plan claro.",
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
            ¿Por qué este protocolo sí da resultados?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-radix-primary uppercase">Paso 1</p>
              <div className="mt-3 w-12 h-12 rounded-full bg-radix-primary/10 text-radix-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4h6m-6 0v3h6V4m-7 3h8a2 2 0 012 2v9a3 3 0 01-3 3H9a3 3 0 01-3-3V9a2 2 0 012-2z" />
                </svg>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Funciona porque el Minoxidil actúa sobre folículos debilitados y prolonga su fase de
                crecimiento. Eso se traduce en menos caída progresiva y en la aparición de nuevo
                vello donde antes había baja densidad.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-radix-primary uppercase">Paso 2</p>
              <div className="mt-3 w-12 h-12 rounded-full bg-radix-primary/10 text-radix-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M7 8h10M7 16h10M10 5h4M10 19h4" />
                </svg>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Funciona porque el Dermaroller mejora la microcirculación y crea microcanales de
                absorción. Así, el activo penetra mejor y llega donde debe trabajar, aumentando la
                efectividad real del protocolo frente a usar solo un producto aislado.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-radix-primary uppercase">Paso 3</p>
              <div className="mt-3 w-12 h-12 rounded-full bg-radix-primary/10 text-radix-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Funciona porque hay método y seguimiento: una guía clara + aplicación constante.
                Esa combinación evita errores comunes, acelera la transición de vello fino a cabello
                terminal y hace que los resultados sean más estables en el tiempo.
              </p>
            </div>
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
              "Asesoramiento Personalizado 24/7.",
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
                src="https://res.cloudinary.com/db1pgmsnn/image/upload/v1772409699/WhatsApp_Image_2026-03-01_at_3.56.44_PM_rooq1f.jpg"
                alt="Kit Recuperación Capilar"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-7 md:p-9 shadow-sm">
              <p className="text-sm uppercase tracking-wider text-radix-primary font-semibold mb-2">Producto principal</p>
              <h3 id="producto-principal" className="scroll-mt-24 text-3xl font-bold text-radix-primary">
                Kit Recuperación Capilar
              </h3>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <span>• x1 Minoxidil Kirkland</span>
                  <button
                    onClick={() => setExtraMinoxidilUnits((prev) => prev + 1)}
                    className="shrink-0 text-xs rounded-full bg-radix-primary text-white px-2.5 py-1 font-semibold hover:bg-[#0a2f22] transition-colors"
                  >
                    + Añadir más
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
                <li>• Asesoriamiento personalizado</li>
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
                  <li>• Asesoriamiento personalizado: RD$ {personalizedAdvisoryValue.toLocaleString()}</li>
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
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ordenar y Paga al recibir
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialProofCases.map((item) => (
              <article key={item.id} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 pb-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Antes</p>
                      <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                        {item.beforeImage ? (
                          <Image src={item.beforeImage} alt={`Antes ${item.customer}`} fill className="object-cover" />
                        ) : (
                          <div className="h-full flex items-center justify-center text-xs text-slate-500">Foto antes</div>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-emerald-600 mb-1">Después</p>
                      <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden border border-emerald-200 bg-emerald-50">
                        {item.afterImage ? (
                          <Image src={item.afterImage} alt={`Despues ${item.customer}`} fill className="object-cover" />
                        ) : (
                          <div className="h-full flex items-center justify-center text-xs text-emerald-700">Foto después</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="font-medium text-slate-800">{item.quote}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.customer}</p>
                </div>
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

      {/* BARRA CTA FIJA */}
      <a
        href="#producto-principal"
        className="fixed bottom-0 left-0 right-0 z-50 inline-flex w-full items-center justify-center gap-2 rounded-none bg-radix-primary text-white px-6 py-4 font-semibold shadow-2xl hover:bg-[#0a2f22] transition-colors"
      >
        <ShoppingCart className="w-5 h-5" />
        Ordenar y Paga al recibir
      </a>

      {showOfferModal && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseModalToWhatsapp}
        >
          <div
            className="w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-radix-primary text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Oferta especial antes de finalizar</h3>
              <button
                onClick={handleCloseModalToWhatsapp}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"
                aria-label="Cerrar oferta"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto">
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
                    Solo por esta oferta (opcional)
                  </p>
                  <h4 className="text-2xl font-bold mt-1">Agregar Shampoo Biotin (OPCIONAL)</h4>
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
                      • {extraMinoxidilUnits} Minoxidil adicional(es) regular: RD$ {extraMinoxidilRegularCost.toLocaleString()}
                    </li>
                  )}
                  <li>• Shampoo Biotin (precio regular): RD$ {shampooRegularPrice.toLocaleString()}</li>
                </ul>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Subtotal regular: RD$ {comboRegularSubtotal.toLocaleString()}
                </p>

                <p className="mt-3 text-sm font-semibold text-radix-primary">Descuentos aplicados hoy</p>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Descuento Shampoo: -RD$ {shampooOfferDiscount.toLocaleString()}</li>
                  {extraMinoxidilUnits > 0 && (
                    <li>
                      • Descuento Minoxidil adicional: -RD$ {extraMinoxidilSavings.toLocaleString()}
                    </li>
                  )}
                </ul>
                <p className="mt-2 text-sm font-semibold text-radix-primary">
                  Descuento comercial directo: -RD$ {comboDiscountTotal.toLocaleString()}
                </p>
                <p className="mt-3 text-xl font-bold text-slate-900 border-t border-slate-200 pt-3">
                  Total con shampoo: RD$ {comboTotal.toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={comboWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center rounded-full bg-radix-primary text-white px-6 py-3 font-semibold hover:bg-[#0a2f22] transition-colors"
                >
                  Sí, agregar shampoo
                </a>
                <a
                  href={kitWhatsappUrl}
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
