# Portfolio — Mario Cerdá

Portfolio personal (ES/EN, modo claro/oscuro) construido con [Astro](https://astro.build) y desplegado en GitHub Pages.

🌐 https://cb-mario.github.io/Portfolio/

## Desarrollo local

Requisitos: **Node.js ≥ 22.12** y npm.

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo → http://localhost:4321/Portfolio/
npm run build      # build de producción en dist/
npm run preview    # sirve dist/ localmente → http://localhost:4321/Portfolio/
```

> Las URLs incluyen `/Portfolio/` porque el sitio se publica en un subdirectorio de GitHub Pages (`base` en `astro.config.mjs`).

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Enlaces (LinkedIn, GitHub, email), CV, stack, idiomas | `src/data/site.ts` |
| Foto de perfil (se sustituye reemplazando el archivo) | `src/assets/profile.jpg` |
| Proyectos (añadir = un objeto más en el array) | `src/data/projects.ts` |
| Textos de la interfaz en ES / EN | `src/i18n/ui.ts` |
| Colores y tipografía (design tokens) | `src/styles/tokens.css` |
| Orden de las secciones de la home | `src/components/Home.astro` |

### Pendiente (placeholders)

Los textos entre `[corchetes]` son placeholders y aparecen marcados en la web:

- [ ] Descripción, tecnologías y enlaces de "Rutas de la Bici" → `src/data/projects.ts`
- [ ] CV: reemplazar `public/cv-mario-cerda.pdf` por el PDF real

## Estructura

```
public/            archivos estáticos (CV, favicon)
src/
  assets/          imágenes optimizadas por Astro (foto de perfil)
  components/      secciones y componentes de UI
  data/            datos del sitio y de proyectos
  i18n/            diccionarios ES/EN y utilidades
  layouts/         layout base (head, header, footer)
  pages/           rutas: / (ES) y /en/ (EN)
  styles/          tokens y estilos globales
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que hace el build y publica en GitHub Pages.

Configuración inicial (una sola vez): en GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Si cambia el nombre del repositorio, actualiza `base` en `astro.config.mjs`.
