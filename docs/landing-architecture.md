# Arquitectura para landings

Esta base permite mantener la home y escalar nuevas paginas de conversion sin mezclar logica.

## Estructura recomendada

- `app/page.tsx`: home principal del sitio.
- `app/<landing>/page.tsx`: cada landing/funnel (ej. `/protocolo`).
- `lib/catalog/*`: datos y tipos del catalogo de productos.
- `lib/landings/*`: registro central de landings activas/draft.
- `components/<landing>/*`: componentes especificos por landing (cuando crezca el proyecto).

## Convenciones

1. Mantener textos/datos grandes fuera de `page.tsx`.
2. Reusar tipos compartidos desde `lib/*/types.ts`.
3. Registrar cada nueva landing en `lib/landings/registry.ts`.
4. Evitar acoplar componentes de home con funnels de conversion.

## Flujo sugerido para nueva landing

1. Crear ruta: `app/nueva-landing/page.tsx`.
2. Crear componentes: `components/nueva-landing/*`.
3. Agregar metadatos SEO propios de la landing.
4. Registrar estado (`draft`/`active`) en `lib/landings/registry.ts`.
