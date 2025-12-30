# RADIX Formulations - Landing Page

Landing page moderna y minimalista para RADIX Formulations, marca de productos dermatológicos curados.

## 🚀 Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Iconos)
- **Cloudinary** (Hosting de imágenes)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🎨 Características

- ✅ Diseño completamente responsive
- ✅ Estética "Lujo Farmacéutico"
- ✅ Integración directa con WhatsApp para pedidos
- ✅ Optimizado para conversión
- ✅ Tipografía Inter (Sans-serif)
- ✅ Colores de marca: Verde Esmeralda (#0E3F2E)
- ✅ Performance optimizado
- ✅ SEO friendly con metadata completa
- ✅ Favicon personalizado con logo RADIX
- ✅ PWA ready (manifest incluido)
- ✅ Open Graph y Twitter Cards configurados

## 📱 Secciones

1. **Navbar**: Logo + CTA "Iniciar Protocolo"
2. **Hero**: Propuesta de valor principal
3. **Why Radix**: 3 pilares de valor
4. **Productos**: Catálogo con 4 productos principales
5. **Footer**: Copyright y disclaimer

## 🛍️ Productos

1. Protocolo Integral de Restauración (Best Seller)
2. Minoxidil Kirkland 5%
3. Set First Botany (Shampoo + Acondicionador)
4. Dermaroller 0.5mm

## 📞 Contacto

Los botones de compra dirigen a WhatsApp: +1-829-000-0000

## 📝 Personalización

### Agregar tu Logo Real

1. Guarda tu logo en formato PNG en: `public/images/radix-logo.png`
2. Para el footer (opcional): `public/images/radix-logo-white.png` (versión blanca)
3. Reinicia el servidor
4. **Nota:** Actualmente usa un logo SVG temporal. Reemplázalo con tu PNG real.

Ver instrucciones detalladas en: `public/images/INSTRUCCIONES.md`

### Cambiar Precios

Edita el array `allProducts` en `app/page.tsx`:

```typescript
const allProducts = [
  {
    id: 1,
    name: "Nombre del Producto",
    price: "1,500", // Cambia aquí
    // ...
  },
];
```

### Cambiar Número de WhatsApp

Edita la función `whatsappLink` en el componente `ProductCard` (línea ~226):

```typescript
const whatsappLink = `https://wa.me/18290000000?text=${whatsappMessage}`;
// Cambia "18290000000" por tu número real (con código de país)
```

## 🎯 Próximos Pasos

- [ ] Agregar imágenes reales de productos
- [ ] Implementar analytics
- [ ] Agregar testimonios de clientes
- [ ] Implementar sistema de FAQ

---

Desarrollado con ❤️ por el equipo de RADIX


