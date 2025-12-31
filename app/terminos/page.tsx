import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | RADIX Formulations",
  description: "Términos y condiciones de uso de RADIX Formulations",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-radix-secondary">
      {/* Header Simple */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-radix-primary hover:opacity-80 transition-opacity">
            RADIX FORMULATIONS
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-radix-primary mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-slate-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">1. Aceptación de los Términos</h2>
            <p className="text-slate-700 leading-relaxed">
              Al acceder y utilizar el sitio web de RADIX Formulations, usted acepta cumplir con estos Términos y Condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          {/* Sobre Nosotros */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">2. Sobre RADIX Formulations</h2>
            <p className="text-slate-700 leading-relaxed">
              RADIX Formulations es un curador y distribuidor de productos dermatológicos de grado clínico en República Dominicana. 
              Ofrecemos productos seleccionados bajo criterios estrictos de eficacia clínica y calidad.
            </p>
          </section>

          {/* Productos y Servicios */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">3. Productos y Servicios</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-radix-primary mb-3">3.1 Catálogo de Productos</h3>
                <p className="text-slate-700 leading-relaxed">
                  Ofrecemos tratamientos capilares que incluyen Minoxidil Kirkland 5%, productos First Botany, 
                  Dermarollers y kits de tratamiento integral. Todos los productos son 100% originales.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="font-semibold text-radix-primary mb-3">3.2 Disponibilidad</h3>
                <p className="text-slate-700 leading-relaxed">
                  Nos reservamos el derecho de modificar o descontinuar productos sin previo aviso. 
                  Los precios están sujetos a cambios.
                </p>
              </div>
            </div>
          </section>

          {/* Proceso de Compra */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">4. Proceso de Compra</h2>
            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-radix-primary mb-2">4.1 Pedidos</h3>
                <p className="text-slate-700 leading-relaxed">
                  Los pedidos se realizan exclusivamente a través de WhatsApp al +1 (809) 777-5861. 
                  Al realizar un pedido, usted se compromete a proporcionar información veraz y completa.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-radix-primary mb-2">4.2 Confirmación</h3>
                <p className="text-slate-700 leading-relaxed">
                  Una vez recibido su pedido, le confirmaremos la disponibilidad, precio total y tiempo estimado de entrega.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-radix-primary mb-2">4.3 Pago</h3>
                <p className="text-slate-700 leading-relaxed">
                  Los métodos de pago aceptados serán comunicados al momento de la confirmación del pedido. 
                  El pago debe completarse antes de la entrega del producto.
                </p>
              </div>
            </div>
          </section>

          {/* Envíos y Entregas */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">5. Envíos y Entregas</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              <li>Las entregas se realizan únicamente en República Dominicana</li>
              <li>Los tiempos de entrega son estimados y pueden variar</li>
              <li>Los costos de envío serán informados al momento del pedido</li>
              <li>Es responsabilidad del cliente proporcionar una dirección de entrega válida</li>
              <li>No nos hacemos responsables por retrasos causados por información incorrecta</li>
            </ul>
          </section>

          {/* Devoluciones y Reembolsos */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">6. Devoluciones y Reembolsos</h2>
            <div className="bg-white rounded-lg p-6 border-2 border-radix-primary/20">
              <h3 className="font-semibold text-radix-primary mb-3">6.1 Política de Devoluciones</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Debido a la naturaleza de nuestros productos (dermocosméticos), solo aceptamos devoluciones en los siguientes casos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Producto defectuoso o dañado al momento de la entrega</li>
                <li>Producto incorrecto enviado</li>
                <li>Empaque sellado violado o alterado</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>Plazo:</strong> Las devoluciones deben solicitarse dentro de las 48 horas posteriores a la recepción del producto.
              </p>
            </div>
          </section>

          {/* Uso Adecuado */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">7. Uso Adecuado de Productos</h2>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-amber-800">IMPORTANTE:</strong> Los productos que ofrecemos son de uso tópico y deben usarse según 
                las indicaciones del fabricante. Recomendamos consultar con un profesional de la salud antes de usar cualquier 
                tratamiento capilar, especialmente si tiene condiciones médicas preexistentes.
              </p>
            </div>
          </section>

          {/* Propiedad Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">8. Propiedad Intelectual</h2>
            <p className="text-slate-700 leading-relaxed">
              Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y diseño, es propiedad de RADIX Formulations 
              o sus licenciantes. Está prohibida su reproducción sin autorización expresa.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              <strong>Marcas de Terceros:</strong> Kirkland, First Botany y otras marcas mencionadas son propiedad de sus respectivos fabricantes. 
              RADIX actúa como curador y distribuidor autorizado.
            </p>
          </section>

          {/* Limitación de Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">9. Limitación de Responsabilidad</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              RADIX Formulations no será responsable por:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 bg-white rounded-lg p-6 border border-slate-200">
              <li>Reacciones alérgicas o efectos secundarios al uso de productos</li>
              <li>Uso inadecuado o no autorizado de los productos</li>
              <li>Resultados no deseados por mal uso</li>
              <li>Daños indirectos, incidentales o consecuentes</li>
              <li>Interrupción del servicio del sitio web</li>
            </ul>
          </section>

          {/* Privacidad */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">10. Privacidad y Datos Personales</h2>
            <p className="text-slate-700 leading-relaxed">
              El tratamiento de sus datos personales se rige por nuestra{" "}
              <Link href="/privacidad" className="text-radix-primary underline hover:text-[#0a2f22]">
                Política de Privacidad
              </Link>
              . Al utilizar nuestros servicios, acepta el procesamiento de sus datos según lo establecido.
            </p>
          </section>

          {/* Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">11. Modificaciones</h2>
            <p className="text-slate-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              Los cambios serán efectivos inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          {/* Ley Aplicable */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">12. Ley Aplicable</h2>
            <p className="text-slate-700 leading-relaxed">
              Estos Términos y Condiciones se rigen por las leyes de la República Dominicana. 
              Cualquier disputa será resuelta en los tribunales competentes de República Dominicana.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-radix-primary/5 rounded-lg p-6 border-2 border-radix-primary/20">
            <h2 className="text-2xl font-bold text-radix-primary mb-4">13. Contacto</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Para preguntas sobre estos Términos y Condiciones:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li><strong>WhatsApp:</strong> +1 (809) 777-5861</li>
              <li><strong>Empresa:</strong> RADIX Formulations</li>
              <li><strong>Ubicación:</strong> República Dominicana</li>
            </ul>
          </section>
        </div>

        {/* Botón Volver */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-block bg-radix-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0a2f22] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

