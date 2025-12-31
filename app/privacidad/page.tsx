import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | RADIX Formulations",
  description: "Política de privacidad y protección de datos de RADIX Formulations",
};

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-slate-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">1. Introducción</h2>
            <p className="text-slate-700 leading-relaxed">
              En RADIX Formulations, nos comprometemos a proteger su privacidad y garantizar la seguridad de su información personal. 
              Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza 
              nuestro sitio web y servicios.
            </p>
          </section>

          {/* Información que Recopilamos */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">2. Información que Recopilamos</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Recopilamos información de las siguientes formas:
            </p>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="font-semibold text-radix-primary mb-3">2.1 Información que Usted Proporciona</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Nombre completo</li>
                <li>Número de teléfono (WhatsApp)</li>
                <li>Información sobre los productos que solicita</li>
                <li>Dirección de entrega (cuando realiza un pedido)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200 mt-4">
              <h3 className="font-semibold text-radix-primary mb-3">2.2 Información Recopilada Automáticamente</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </div>
          </section>

          {/* Uso de la Información */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">3. Cómo Usamos Su Información</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 bg-white rounded-lg p-6 border border-slate-200">
              <li>Procesar y gestionar sus pedidos</li>
              <li>Comunicarnos con usted a través de WhatsApp</li>
              <li>Coordinar entregas de productos</li>
              <li>Mejorar nuestros productos y servicios</li>
              <li>Enviar información sobre promociones (con su consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          {/* Compartir Información */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">4. Compartir Su Información</h2>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-radix-primary">No vendemos</strong> su información personal a terceros. 
              Podemos compartir su información únicamente con:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4">
              <li><strong>Servicios de mensajería:</strong> WhatsApp (Meta) para procesar sus pedidos</li>
              <li><strong>Servicios de entrega:</strong> Empresas de courier para entregar productos</li>
              <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley</li>
            </ul>
          </section>

          {/* Protección de Datos */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">5. Protección de Datos</h2>
            <p className="text-slate-700 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra 
              acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, ninguna transmisión por Internet 
              es 100% segura.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">6. Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador 
              para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          {/* Derechos del Usuario */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">7. Sus Derechos</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 bg-slate-50 rounded-lg p-6">
              <li>Acceder a su información personal</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          {/* Menores de Edad */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">8. Menores de Edad</h2>
            <p className="text-slate-700 leading-relaxed">
              Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente 
              información de menores de edad.
            </p>
          </section>

          {/* Cambios a la Política */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">9. Cambios a Esta Política</h2>
            <p className="text-slate-700 leading-relaxed">
              Nos reservamos el derecho de actualizar esta Política de Privacidad. Los cambios serán publicados 
              en esta página con la fecha de actualización correspondiente.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-radix-primary/5 rounded-lg p-6 border-2 border-radix-primary/20">
            <h2 className="text-2xl font-bold text-radix-primary mb-4">10. Contacto</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si tiene preguntas sobre esta Política de Privacidad, contáctenos:
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

