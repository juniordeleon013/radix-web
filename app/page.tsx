"use client";

import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, Zap, Microscope, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ==================== HOOK PARA ANIMACIONES DE SCROLL ====================
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ==================== DATOS DE PRODUCTOS ====================
const allProducts = [
  // PRODUCTOS INDIVIDUALES
  {
    id: 1,
    name: "Minoxidil Kirkland 5%",
    price: "550",
    description: "El estándar de oro clínico (USP) para reactivar el folículo piloso y detener la caída. Fórmula probada y efectiva.",
    badge: "Minoxidil 5%",
    category: "producto",
    image: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066842/Gemini_Generated_Image_rrbutvrrbutvrrbu_gv8gba.png",
  },
  {
    id: 2,
    name: "Solo Shampoo con Biotin",
    price: "1,250",
    description: "Limpieza profunda con Biotina y extractos botánicos. Fortalece cada hebra desde la raíz y bloquea DHT naturalmente.",
    badge: "Solo Shampoo First Botany",
    category: "producto",
    image: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066843/Gemini_Generated_Image_sxun9psxun9psxun_imjuhd.png",
  },
  {
    id: 3,
    name: "Shampoo y Acondicionador Con Biotina",
    price: "2,350",
    description: "Sistema completo de cuidado capilar. Biotina, Aceite de Argán y bloqueadores naturales de DHT en sinergia.",
    badge: "Linea First Botany",
    category: "producto",
    image: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066839/Gemini_Generated_Image_521l13521l13521l_gkzp6b.png",
  },
  {
    id: 4,
    name: "Dermaroller 0.5mm",
    price: "400",
    description: "Herramienta profesional de micro-needling para maximizar la absorción tópica y estimular colágeno en el cuero cabelludo.",
    badge: "Microneedling 0.5mm",
    category: "producto",
    image: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066846/Gemini_Generated_Image_2p3ykl2p3ykl2p3y_b1spuh.png",
  },
  // TRATAMIENTOS / KITS
  {
    id: 5,
    name: "Suministro de Solución Tópica",
    price: "800",
    description: "Combo esencial: Minoxidil 5% + Dermaroller 0.5mm. Reactivación folicular con micro-needling para absorción óptima.",
    badge: "El mas Vendido",
    category: "tratamiento",
    includes: ["x1 Minoxidil Kirkland 5%", "x1 Dermaroller 0.5mm"],
    image: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066847/Gemini_Generated_Image_qhzfbmqhzfbmqhzf_fqycti.png",
  },
  {
    id: 6,
    name: "Sistema Integral de Densidad Capilar",
    price: "1,950",
    description: "Kit completo: Minoxidil 5% + Dermaroller 0.5mm + Shampoo Biotina. Máxima eficacia con protocolo integrado.",
    category: "tratamiento",
    includes: ["x1 Minoxidil Kirkland 5%", "x1 Dermaroller 0.5mm", "x1 Shampoo Biotina"],
    image: "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066907/KIT_SHAMPOO_crftqi.png",
  },
  
];

// ==================== NAVBAR COMPONENT ====================
function Navbar() {
  const scrollToProducts = () => {
    const element = document.getElementById("productos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative h-12 w-56 sm:h-14 sm:w-64 md:h-16 md:w-72 lg:h-[72px] lg:w-80 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/images/radix-logo.png"
                alt="RADIX Formulations Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="bg-radix-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base hover:bg-[#0a2f22] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl animate-fade-in"
          >
            Iniciar Protocolo
          </button>
        </div>
      </div>
    </nav>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById("productos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-radix-primary via-[#0a3526] to-radix-primary text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle pattern overlay with animation */}
      <div className="absolute inset-0 opacity-5 animate-pulse-slow">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating circles decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in-down">
          La raíz de tu confianza.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Tratamientos capilares de grado clínico. Selección curada y validada científicamente.
        </p>
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-radix-primary hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl animate-scale-in"
          style={{ animationDelay: '0.4s' }}
        >
          Ver Productos y Kits
          <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </section>
  );
}

// ==================== VALUE SECTION ====================
function ValueSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  const values = [
    {
      icon: ShieldCheck,
      title: "Autenticidad Garantizada",
      description: "Productos 100% originales directamente de fabricantes certificados.",
    },
    {
      icon: Zap,
      title: "Disponibilidad Inmediata",
      description: "Envío local sin esperas. Recibe tu tratamiento cuando lo necesitas.",
    },
    {
      icon: Microscope,
      title: "Ciencia + Naturaleza",
      description: "Selección basada en eficacia comprobada y principios activos naturales.",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold text-radix-primary mb-4">
            ¿Por qué Radix?
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Más que una tienda. Somos curadores de soluciones capilares respaldadas por ciencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-radix-primary/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                <value.icon className="w-8 h-8 md:w-10 md:h-10 text-radix-primary" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-radix-primary mb-3">
                {value.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== PRODUCT CARD COMPONENT ====================
interface ProductCardProps {
  product: typeof allProducts[0];
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  
  // Crear mensaje personalizado para kits
  let message = `Hola Radix, me interesa: ${product.name}`;
  
  if (product.includes && product.includes.length > 0) {
    message += `\n\nIncluye:\n${product.includes.map(item => `• ${item}`).join('\n')}`;
  }
  
  const whatsappMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/18097775861?text=${whatsappMessage}`;

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 h-full flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-radix-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-fade-in-down">
          {product.badge}
        </div>
        {/* Selected by Radix Badge */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-radix-primary px-3 py-1.5 rounded-full text-xs font-medium shadow-md transition-opacity duration-300">
          Selected by Radix
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-radix-primary mb-2 line-clamp-2 transition-colors duration-300">
          {product.name}
        </h5>
        <p className="text-2xl font-bold text-slate-800 mb-3">
          RD$ {product.price}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Includes section for kits */}
        {product.includes && product.includes.length > 0 && (
          <div className="mb-4 bg-slate-50 rounded-lg p-3 border border-slate-200 transition-colors duration-300">
            <p className="text-xs font-semibold text-radix-primary mb-2">Incluye:</p>
            <ul className="text-xs text-slate-600 space-y-1">
              {product.includes.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-radix-primary text-white text-center py-3 rounded-xl font-semibold hover:bg-[#0a2f22] transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
        >
          Ordenar por WhatsApp
        </a>
      </div>
    </div>
  );
}

// ==================== PRODUCTS SECTION ====================
function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = React.useState<"todos" | "producto" | "tratamiento">("todos");
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProducts = React.useMemo(() => {
    if (activeFilter === "todos") return allProducts;
    return allProducts.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: "todos" | "producto" | "tratamiento") => {
    setIsAnimating(true);
    setActiveFilter(filter);
    setTimeout(() => setIsAnimating(false), 100);
  };

  return (
    <section ref={ref} id="productos" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold text-radix-primary mb-4">
            Nuestros Productos y Tratamientos
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Cada producto ha sido seleccionado bajo criterios estrictos de eficacia clínica y calidad.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex justify-center mb-10 md:mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <button
              onClick={() => handleFilterChange("todos")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-500 ${
                activeFilter === "todos"
                  ? "bg-radix-primary text-white shadow-lg scale-105"
                  : "text-slate-600 hover:text-radix-primary hover:bg-slate-50"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => handleFilterChange("producto")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-500 ${
                activeFilter === "producto"
                  ? "bg-radix-primary text-white shadow-lg scale-105"
                  : "text-slate-600 hover:text-radix-primary hover:bg-slate-50"
              }`}
            >
              Productos
            </button>
            <button
              onClick={() => handleFilterChange("tratamiento")}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-500 ${
                activeFilter === "tratamiento"
                  ? "bg-radix-primary text-white shadow-lg scale-105"
                  : "text-slate-600 hover:text-radix-primary hover:bg-slate-50"
              }`}
            >
              Kits
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-300 ${
          isAnimating ? "opacity-50" : "opacity-100"
        }`}>
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-slate-500 text-lg">No hay productos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// ==================== LOCATION SECTION ====================
function LocationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold text-radix-primary mb-4">
            Nuestra Ubicación
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Visítanos en nuestro almacén principal en Santo Domingo Este
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`} style={{ transitionDelay: '200ms' }}>
          {/* Mapa de Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=18.4976,-69.8566&hl=es&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación RADIX Formulations"
            ></iframe>
          </div>

          {/* Información de Contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-radix-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-radix-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-radix-primary mb-2">Dirección</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Región Ozama<br />
                    Santo Domingo Este<br />
                    República Dominicana
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-radix-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-radix-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-radix-primary mb-2">Contáctanos</h4>
                  <p className="text-slate-700 mb-3">
                    WhatsApp: <strong>+1 (809) 777-5861</strong>
                  </p>
                  <a
                    href="https://wa.me/18097775861?text=Hola%20Radix,%20quisiera%20más%20información"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-radix-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0a2f22] transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                  >
                    Enviar Mensaje
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-radix-primary to-[#0a3526] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Horario de Atención</h4>
                  <p className="text-slate-100 text-sm leading-relaxed">
                    Lunes a Sábado: 10:00 AM - 6:00 PM<br />
                    Domingo: 10:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nota Adicional */}
        <div className={`mt-12 text-center transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} style={{ transitionDelay: '400ms' }}>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            <strong className="text-radix-primary">Nota:</strong> Por tu comodidad, realizamos entregas a domicilio en toda República Dominicana. 
            Contáctanos por WhatsApp para coordinar tu pedido.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <footer ref={ref} className="bg-radix-primary text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex justify-center mb-4">
            <div className="relative h-20 w-80 sm:h-24 sm:w-96 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/radix-logo.png"
                alt="RADIX Formulations Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
          <p className="text-slate-300 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            La raíz de tu confianza.
          </p>
          
          {/* Enlaces Legales */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link 
              href="/privacidad"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Política de Privacidad
            </Link>
            <span className="text-slate-500">•</span>
            <Link 
              href="/terminos"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Términos y Condiciones
            </Link>
            <span className="text-slate-500">•</span>
            <Link 
              href="/disclaimer"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Descargo de Responsabilidad
            </Link>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-sm text-slate-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
              © {new Date().getFullYear()} Radix Formulations. Todos los derechos reservados.
            </p>
            <p className="text-xs text-slate-400 mt-3 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
              <strong>Disclaimer:</strong> Productos de terceros son marcas registradas de sus respectivos fabricantes. Radix actúa como curador y distribuidor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN PAGE ====================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <ProductsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}


