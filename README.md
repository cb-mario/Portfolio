# Portfolio

Mi portfolio personal: https://cb-mario.github.io/Portfolio/

Lo hice con Astro y está en español e inglés, con modo claro y oscuro. Es un sitio estático, sin backend, que se publica en GitHub Pages cada vez que hago push a `main`.

## Arrancarlo en local

Hace falta Node 22.12 o superior.

```bash
npm install
npm run dev
```

Se abre en http://localhost:4321/Portfolio/. Lo de `/Portfolio/` es porque GitHub Pages lo sirve en ese subdirectorio (está configurado como `base` en `astro.config.mjs`).

Para generar la versión de producción:

```bash
npm run build     # genera dist/
npm run preview   # para verla antes de subirla
```

## Cómo está organizado

- `src/data/site.ts`: mis datos, enlaces, el stack y los idiomas.
- `src/data/projects.ts`: los proyectos. Para añadir uno nuevo basta con meter otro objeto en el array.
- `src/i18n/ui.ts`: todos los textos de la web en los dos idiomas.
- `src/styles/tokens.css`: colores y tipografía.
- `src/components/`: cada sección de la página es un componente. El orden se decide en `Home.astro`.
- `public/cv-mario-cerda.pdf`: el CV que se descarga desde la web.

## Despliegue

El workflow de `.github/workflows/deploy.yml` hace el build y lo publica en GitHub Pages. En el repo tiene que estar activado **Settings → Pages → Source: GitHub Actions**.

Si algún día cambio el nombre del repo, hay que actualizar `base` en `astro.config.mjs`.

## Contacto

- LinkedIn: https://www.linkedin.com/in/mario-cerd%C3%A1-5344b3427/
- Email: cerbano.m@gmail.com
