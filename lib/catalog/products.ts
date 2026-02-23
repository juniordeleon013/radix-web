import type { Product } from "@/lib/catalog/types";

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Minoxidil Kirkland 5%",
    price: "800",
    description:
      "El estándar de oro clínico (USP) para reactivar el folículo piloso y detener la caída. Fórmula probada y efectiva.",
    badge: "Minoxidil 5%",
    category: "producto",
    image:
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882652/WhatsApp_Image_2026-02-23_at_5.37.10_PM_uruzso.jpg",
    images: [
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882652/WhatsApp_Image_2026-02-23_at_5.37.10_PM_uruzso.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.29.22_PM_qpughz.jpg",
    ],
    detailedInfo: {
      ingredients: "Minoxidil 5%, Propilenglicol, Alcohol, Agua purificada",
      benefits: [
        "Estimula el crecimiento capilar",
        "Revitaliza folículos pilosos inactivos",
        "Aumenta el grosor del cabello",
        "Resultados visibles en 3-4 meses",
        "Aprobado por FDA",
      ],
      usage:
        "Aplicar 1ml dos veces al día sobre cuero cabelludo seco. Masajear suavemente y dejar actuar.",
      presentation: "Frasco de 60ml (suministro para 1 mes)",
      warnings: "Solo para uso externo. No aplicar en cuero cabelludo irritado.",
    },
  },
  {
    id: 2,
    name: "Solo Shampoo con Biotin",
    price: "1,250",
    description:
      "Limpieza profunda con Biotina y extractos botánicos. Fortalece cada hebra desde la raíz y bloquea DHT naturalmente.",
    badge: "Solo Shampoo First Botany",
    category: "producto",
    image:
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.26.39_PM_vemzhg.jpg",
    images: [
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.26.39_PM_vemzhg.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.24.58_PM_ktghhc.jpg",
    ],
    detailedInfo: {
      ingredients: "Biotina, Extracto de Saw Palmetto, Aceite de Argán, Zinc, Extracto de Romero",
      benefits: [
        "Fortalece el cabello desde la raíz",
        "Bloquea DHT naturalmente",
        "Aumenta volumen y brillo",
        "Reduce la caída del cabello",
        "Libre de sulfatos y parabenos",
      ],
      usage:
        "Aplicar sobre cabello húmedo, masajear suavemente el cuero cabelludo durante 2-3 minutos. Enjuagar completamente.",
      presentation: "Botella de 500ml",
      warnings: "Para uso externo. Evitar contacto con ojos.",
    },
  },
  {
    id: 3,
    name: "Shampoo y Acondicionador Con Biotina",
    price: "2,350",
    description:
      "Sistema completo de cuidado capilar. Biotina, Aceite de Argán y bloqueadores naturales de DHT en sinergia.",
    badge: "Linea First Botany",
    category: "producto",
    image:
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066839/Gemini_Generated_Image_521l13521l13521l_gkzp6b.png",
    images: [
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1767066839/Gemini_Generated_Image_521l13521l13521l_gkzp6b.png",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.26.39_PM_vemzhg.jpg",
    ],
    detailedInfo: {
      ingredients:
        "Biotina, Aceite de Argán, Extracto de Saw Palmetto, Zinc, Proteínas de Queratina, Extractos botánicos",
      benefits: [
        "Sistema completo 2 en 1",
        "Máxima hidratación y nutrición",
        "Fortalece y previene quiebres",
        "Protección térmica natural",
        "Cabello suave y manejable",
        "Resultados superiores en combo",
      ],
      usage:
        "Shampoo: Aplicar, masajear y enjuagar. Acondicionador: Aplicar de medios a puntas, dejar actuar 2-3 minutos y enjuagar.",
      presentation: "2 botellas de 500ml cada una",
      warnings: "Para uso externo. Evitar contacto con ojos.",
    },
  },
  {
    id: 4,
    name: "Dermaroller 0.5mm",
    price: "700",
    description:
      "Herramienta profesional de micro-needling para maximizar la absorción tópica y estimular colágeno en el cuero cabelludo.",
    badge: "Microneedling 0.5mm",
    category: "producto",
    image:
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.21.29_PM_xocuft.jpg",
    images: [
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.21.29_PM_xocuft.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.26.04_PM_qhjpyz.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.29.44_PM_fylnqo.jpg",
    ],
    detailedInfo: {
      ingredients: "Acero inoxidable quirúrgico, 540 micro-agujas de 0.5mm",
      benefits: [
        "Aumenta absorción de tratamientos hasta 300%",
        "Estimula producción de colágeno",
        "Mejora circulación del cuero cabelludo",
        "Activa factores de crecimiento",
        "Resultados clínicamente comprobados",
      ],
      usage:
        "Usar 1-2 veces por semana sobre cuero cabelludo limpio. Rodar en 4 direcciones (horizontal, vertical, diagonal) 4-5 veces cada una. Aplicar tratamiento después.",
      presentation: "1 Dermaroller 0.5mm con estuche protector",
      warnings:
        "Desinfectar antes y después de usar. No compartir. No usar sobre cuero cabelludo irritado o con heridas.",
    },
  },
  {
    id: 5,
    name: "Protocolo de Recuperación Capilar",
    price: "1,450",
    description:
      "Combo esencial: Minoxidil 5% + Dermaroller 0.5mm. Reactivación folicular con micro-needling para absorción óptima.",
    badge: "El mas Vendido",
    category: "tratamiento",
    includes: ["x1 Minoxidil Kirkland 5%", "x1 Dermaroller 0.5mm"],
    image:
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.22.30_PM_edggz2.jpg",
    images: [
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.22.30_PM_edggz2.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882652/WhatsApp_Image_2026-02-23_at_5.37.10_PM_uruzso.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.21.29_PM_xocuft.jpg",
    ],
    detailedInfo: {
      ingredients: "Combo: Minoxidil 5% + Dermaroller profesional 0.5mm",
      benefits: [
        "Envio Gratuito dentro de Santo Domingo este y Distrito Nacional (Los domingos)",
        "Máxima efectividad comprobada",
        "Absorción optimizada con micro-needling",
        "Protocolo usado por dermatólogos",
        "Resultados acelerados",
      ],
      usage:
        "Protocolo semanal: Día 1-6: Aplicar Minoxidil 2 veces al día. Día 7: Dermaroller 2 veces por semana, esperar 24h antes de aplicar Minoxidil.",
      presentation: "Kit completo con protocolo de uso incluido",
      warnings:
        "Seguir protocolo de uso. No aplicar Minoxidil hasta pasadas 24 horas después del Dermaroller.",
    },
  },
  {
    id: 6,
    name: "Protocolo de Recuperación Capilar Plus",
    price: "2,600",
    description:
      "Kit completo: Minoxidil 5% + Dermaroller 0.5mm + Shampoo Biotina. Máxima eficacia con protocolo integrado.",
    category: "tratamiento",
    includes: ["x1 Minoxidil Kirkland 5%", "x1 Dermaroller 0.5mm", "x1 Shampoo Biotina"],
    image:
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882480/WhatsApp_Image_2026-02-21_at_11.50.57_AM_uzsktt.jpg",
    images: [
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882480/WhatsApp_Image_2026-02-21_at_11.50.57_AM_uzsktt.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882652/WhatsApp_Image_2026-02-23_at_5.37.10_PM_uruzso.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882478/WhatsApp_Image_2026-02-23_at_5.26.39_PM_vemzhg.jpg",
      "https://res.cloudinary.com/db1pgmsnn/image/upload/v1771882479/WhatsApp_Image_2026-02-23_at_5.21.29_PM_xocuft.jpg",
    ],
    detailedInfo: {
      ingredients: "Sistema completo: Minoxidil 5% + Dermaroller 0.5mm + Shampoo con Biotina",
      benefits: [
        "Envio Gratuito dentro de Santo Domingo este y Distrito Nacional (Los domingos)",
        "Tratamiento 360° más efectivo",
        "Ataca la caída desde múltiples ángulos",
        "Limpieza + Estimulación + Nutrición",
        "Resultados superiores documentados",
      ],
      usage:
        "Rutina completa: Lavar con Shampoo de Biotina 3-4 veces/semana. Aplicar Minoxidil 2 veces/día. Usar Dermaroller 2 vez/semana.",
      presentation: "Kit completo con guía de protocolo profesional",
      warnings: "Constancia es clave. Resultados visibles en 3-4 meses de uso continuo.",
    },
  },
];
