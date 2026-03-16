import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restricciones de Envio Gratis | Protocolo Radix",
  description:
    "Consulta zonas aplicables y condiciones del envio gratuito para el Protocolo Radix.",
};

export default function EnviosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-xs uppercase tracking-wider font-semibold text-radix-primary">
            Protocolo Radix
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-radix-primary">
            Restricciones de envio gratuito
          </h1>
          <p className="mt-4 text-slate-600">
            El envio gratis aplica solo en zonas seleccionadas del Distrito Nacional y Santo
            Domingo Este. Esta politica puede variar segun disponibilidad operativa.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">Zonas donde aplica envio gratis</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-radix-primary">Distrito Nacional</h3>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">El Poligono Central</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Naco</li>
                  <li>• Piantini</li>
                  <li>• Serralles</li>
                  <li>• Paraiso</li>
                  <li>• Ensanche Julieta</li>
                </ul>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">Zona oeste y residencial</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Evaristo Morales</li>
                  <li>• Ensanche Quisqueya</li>
                  <li>• Bella Vista</li>
                  <li>• Los Cacicazgos</li>
                  <li>• Mirador Norte y Mirador Sur</li>
                  <li>• El Millon y Los Restauradores</li>
                </ul>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">Zona historica y tradicional</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Ciudad Colonial</li>
                  <li>• Gazcue</li>
                  <li>• Ciudad Nueva</li>
                  <li>• Ensanche Lugo y San Carlos</li>
                </ul>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">Zona norte (Distrito)</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Arroyo Hondo</li>
                  <li>• Cuesta Hermosa</li>
                  <li>• Ensanche La Fe</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-radix-primary">Santo Domingo Este (SDE)</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Municipio al otro lado del Rio Ozama (puentes Juan Bosch, Duarte y Flotante).
                </p>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">Sectores tradicionales y centricos</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Ensanche Ozama</li>
                  <li>• Alma Rosa I y II</li>
                  <li>• Los Mameyes</li>
                </ul>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">Zona oriental</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Lucerna</li>
                  <li>• Cancino I y II</li>
                  <li>• Prado Oriental</li>
                  <li>• Corales del Sur</li>
                  <li>• Tropical del Este</li>
                </ul>

                <h4 className="mt-3 text-sm font-semibold text-slate-900">Eje Autopista San Isidro y Av. Ecologica</h4>
                <ul className="mt-1 text-sm text-slate-700 space-y-1">
                  <li>• Residencial Amalia</li>
                  <li>• El Bonito</li>
                  <li>• Brisa Oriental</li>
                  <li>• Ciudad Juan Bosch</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Nota: Si tu sector no aparece en el listado, escríbenos por WhatsApp para confirmar
              cobertura.
            </p>
          </section>

          <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h2 className="text-lg font-bold text-amber-900">Condiciones de pago y entrega</h2>
            <ul className="mt-2 text-sm text-amber-900 space-y-1">
              <li>• Puedes apartar tu pedido sin pago previo.</li>
              <li>• El pago se realiza al momento de la entrega.</li>
              <li>• Los pedidos salen los sábados y se coordinan previamente por WhatsApp.</li>
              <li>• Tambien contamos con envio express disponible con costo adicional (segun zona y horario).</li>
            </ul>
          </section>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/18493408364?text=Hola%20Radix,%20quiero%20confirmar%20si%20mi%20sector%20aplica%20para%20envio%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-radix-primary text-white px-6 py-3 font-semibold hover:bg-[#0a2f22] transition-colors"
            >
              Confirmar mi sector por WhatsApp
            </a>
            <Link
              href="/protocolo"
              className="inline-flex items-center justify-center rounded-full border border-radix-primary text-radix-primary px-6 py-3 font-semibold hover:bg-radix-primary hover:text-white transition-colors"
            >
              Volver a la oferta
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
