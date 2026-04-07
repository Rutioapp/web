# Rutio Web

Landing page modular para Rutio construida con Next.js App Router, TypeScript y Tailwind CSS.

## Scripts

```bash
npm install
npm run dev
```

## Estructura

- `src/app`: app shell, metadata global y rutas públicas
- `src/components/ui`: primitives reutilizables
- `src/components/layout`: navegación y footer
- `src/components/sections`: secciones desacopladas de la landing
- `src/content`: contenido editable y centralizado
- `src/config`: site config, SEO y navegación
- `src/lib`: utilidades, validaciones y futura integración con Supabase
- `src/styles`: tokens y utilidades del sistema visual
- `src/types`: contratos TypeScript del dominio de la landing

## Estado actual

Fase 1 lista con:

- layout global
- sistema visual base
- navbar responsive
- hero section
- contenido centralizado en `src/content/landing-content.ts`
- base reservada para sitemap, robots y Supabase
