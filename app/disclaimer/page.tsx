import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Descargo de Responsabilidad | RADIX Formulations",
  description: "Descargo de responsabilidad y aviso legal de RADIX Formulations",
};

export default function DisclaimerPage() {
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
          Descargo de Responsabilidad
        </h1>
        <p className="text-slate-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-slate max-w-none space-y-8">
          {/* Aviso Importante */}
          <section className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">⚠️ Aviso Importante</h2>
            <p className="text-slate-800 leading-relaxed font-medium">
              Los productos ofrecidos por RADIX Formulations son de uso tópico externo. La información proporcionada 
              en este sitio web tiene fines informativos y educativos únicamente. No sustituye el consejo, diagnóstico 
              o tratamiento médico profesional.
            </p>
          </section>

          {/* Naturaleza de los Productos */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">1. Naturaleza de los Productos</h2>
            <div className="bg-white rounded-lg p-6 border border-slate-200 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-radix-primary">RADIX Formulations</strong> actúa como curador y distribuidor de productos 
                dermatológicos de terceros. Los productos comercializados incluyen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Minoxidil Kirkland 5% (marca registrada de Costco Wholesale Corporation)</li>
                <li>First Botany Cosmeceuticals (marca registrada de sus respectivos fabricantes)</li>
                <li>Herramientas de micro-needling (Dermarollers)</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>RADIX no fabrica estos productos.</strong> Somos distribuidores autorizados que garantizamos 
                la autenticidad y originalidad de cada artículo.
              </p>
            </div>
          </section>

          {/* Marcas Registradas */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">2. Marcas Registradas de Terceros</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Las marcas mencionadas en este sitio web son propiedad de sus respectivos fabricantes:
            </p>
            <div className="bg-slate-50 rounded-lg p-6 space-y-3">
              <p className="text-slate-700">
                <strong>Kirkland Signature®</strong> es una marca registrada de Costco Wholesale Corporation.
              </p>
              <p className="text-slate-700">
                <strong>First Botany®</strong> es una marca registrada de First Botany Cosmeceuticals.
              </p>
              <p className="text-slate-700 mt-4">
                RADIX Formulations no está afiliado, respaldado o patrocinado por estas marcas. 
                Actuamos exclusivamente como distribuidores independientes de productos auténticos.
              </p>
            </div>
          </section>

          {/* No Somos Profesionales Médicos */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">3. No Somos Profesionales Médicos</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <p className="text-slate-800 leading-relaxed font-medium mb-4">
                <strong className="text-red-800">ADVERTENCIA MÉDICA:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>RADIX Formulations <strong>NO es una entidad médica</strong> ni ofrece servicios de salud</li>
                <li>Nuestro personal <strong>NO son médicos, dermatólogos ni profesionales de la salud</strong></li>
                <li>La información proporcionada <strong>NO constituye consejo médico</strong></li>
                <li><strong>NO diagnosticamos, tratamos ni curamos</strong> condiciones médicas</li>
              </ul>
              <p className="text-slate-800 leading-relaxed mt-4 font-semibold">
                Siempre consulte con un médico o dermatólogo certificado antes de iniciar cualquier tratamiento capilar.
              </p>
            </div>
          </section>

          {/* Resultados */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">4. Resultados No Garantizados</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Los resultados del uso de productos varían significativamente entre individuos debido a factores como:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold text-radix-primary mb-2">Factores Individuales</h3>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>Genética</li>
                  <li>Edad</li>
                  <li>Condición de salud general</li>
                  <li>Tipo y etapa de alopecia</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold text-radix-primary mb-2">Factores de Uso</h3>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  <li>Consistencia en la aplicación</li>
                  <li>Seguimiento de instrucciones</li>
                  <li>Tiempo de uso</li>
                  <li>Combinación con otros tratamientos</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mt-4 font-semibold">
              <strong className="text-radix-primary">No garantizamos resultados específicos.</strong> Los testimonios y casos de éxito 
              representan experiencias individuales y no deben considerarse como resultados típicos.
            </p>
          </section>

          {/* Riesgos y Efectos Secundarios */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">5. Riesgos y Efectos Secundarios</h2>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <p className="text-slate-800 leading-relaxed mb-4">
                <strong>IMPORTANTE:</strong> Todos los productos pueden causar efectos secundarios en algunas personas, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Irritación del cuero cabelludo</li>
                <li>Enrojecimiento o picazón</li>
                <li>Descamación temporal (shedding)</li>
                <li>Reacciones alérgicas</li>
                <li>Irritación cutánea por micro-needling (Dermaroller)</li>
              </ul>
              <p className="text-slate-800 leading-relaxed mt-4 font-semibold">
                Suspenda el uso inmediatamente y consulte a un médico si experimenta reacciones adversas.
              </p>
            </div>
          </section>

          {/* Uso Bajo Su Propio Riesgo */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">6. Uso Bajo Su Propio Riesgo</h2>
            <p className="text-slate-700 leading-relaxed">
              Al adquirir productos de RADIX Formulations, usted reconoce y acepta que:
            </p>
            <ul className="list-decimal list-inside space-y-3 text-slate-700 bg-white rounded-lg p-6 border-2 border-slate-300 mt-4">
              <li>Los productos se utilizan <strong>bajo su propio riesgo</strong></li>
              <li>Ha leído y comprendido las instrucciones de uso del fabricante</li>
              <li>Ha consultado o consultará con un profesional de la salud si tiene dudas</li>
              <li>RADIX no es responsable por mal uso o uso inadecuado de productos</li>
              <li>Los resultados individuales no están garantizados</li>
            </ul>
          </section>

          {/* Limitación de Responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong className="text-radix-primary">RADIX Formulations no será responsable por:</strong>
            </p>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-radix-primary">
                <p className="text-slate-700"><strong>1.</strong> Efectos secundarios o reacciones adversas al uso de productos</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-radix-primary">
                <p className="text-slate-700"><strong>2.</strong> Resultados insatisfactorios o falta de resultados</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-radix-primary">
                <p className="text-slate-700"><strong>3.</strong> Daños causados por uso inadecuado o contraindicado</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-radix-primary">
                <p className="text-slate-700"><strong>4.</strong> Pérdidas económicas o daños indirectos relacionados con el uso de productos</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-radix-primary">
                <p className="text-slate-700"><strong>5.</strong> Problemas de salud preexistentes agravados por el uso de productos</p>
              </div>
            </div>
          </section>

          {/* Contraindicaciones */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">8. Contraindicaciones Generales</h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
              <p className="text-slate-800 leading-relaxed mb-4">
                <strong className="text-red-800">NO USE estos productos si:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Está embarazada o en período de lactancia</li>
                <li>Tiene alergias conocidas a los ingredientes</li>
                <li>Sufre de condiciones del cuero cabelludo no diagnosticadas</li>
                <li>Tiene heridas abiertas, infecciones o irritación severa en el cuero cabelludo</li>
                <li>Tiene antecedentes de problemas cardiovasculares (para Minoxidil)</li>
                <li>Es menor de 18 años (sin supervisión médica)</li>
              </ul>
              <p className="text-slate-800 leading-relaxed mt-4 font-bold">
                Consulte con un médico antes de usar si tiene cualquier condición médica preexistente.
              </p>
            </div>
          </section>

          {/* Información del Sitio Web */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">9. Exactitud de la Información</h2>
            <p className="text-slate-700 leading-relaxed">
              Aunque nos esforzamos por mantener información precisa y actualizada en nuestro sitio web, 
              no garantizamos la exactitud, integridad o vigencia de toda la información proporcionada. 
              Los precios, disponibilidad y especificaciones de productos están sujetos a cambios sin previo aviso.
            </p>
          </section>

          {/* Enlaces Externos */}
          <section>
            <h2 className="text-2xl font-bold text-radix-primary mb-4">10. Enlaces a Sitios de Terceros</h2>
            <p className="text-slate-700 leading-relaxed">
              Nuestro sitio web puede contener enlaces a sitios web de terceros (ej: WhatsApp, Cloudinary). 
              No somos responsables del contenido, políticas de privacidad o prácticas de sitios web de terceros.
            </p>
          </section>

          {/* Recomendación Final */}
          <section className="bg-gradient-to-r from-radix-primary/10 to-radix-primary/5 rounded-lg p-8 border-2 border-radix-primary/30">
            <h2 className="text-2xl font-bold text-radix-primary mb-4">✓ Recomendación Final</h2>
            <p className="text-slate-800 leading-relaxed text-lg font-medium">
              Para obtener los mejores resultados y minimizar riesgos, le recomendamos encarecidamente:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 mt-4 ml-4">
              <li className="font-semibold">Consulte con un dermatólogo antes de iniciar cualquier tratamiento</li>
              <li className="font-semibold">Lea completamente las instrucciones del fabricante</li>
              <li className="font-semibold">Realice una prueba de parche para detectar alergias</li>
              <li className="font-semibold">Use los productos según las indicaciones</li>
              <li className="font-semibold">Monitoree su progreso y efectos secundarios</li>
              <li className="font-semibold">Mantenga expectativas realistas</li>
            </ol>
          </section>

          {/* Contacto */}
          <section className="bg-radix-primary/5 rounded-lg p-6 border-2 border-radix-primary/20">
            <h2 className="text-2xl font-bold text-radix-primary mb-4">11. Preguntas</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Si tiene preguntas sobre este Descargo de Responsabilidad o sobre nuestros productos:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li><strong>WhatsApp:</strong> +1 (809) 777-5861</li>
              <li><strong>Empresa:</strong> RADIX Formulations</li>
              <li><strong>Ubicación:</strong> República Dominicana</li>
            </ul>
            <p className="text-slate-600 text-sm mt-4 italic">
              Nota: No ofrecemos consultas médicas. Para preguntas médicas, consulte con un profesional de la salud.
            </p>
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

