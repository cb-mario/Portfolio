# CLAUDE.md — Portfolio de Mario Cerdá

Este archivo da contexto persistente a Claude Code para trabajar en este repositorio. Léelo antes de tocar cualquier archivo.

## Qué es este proyecto

Portfolio personal para búsqueda de empleo como desarrollador full stack. Sitio estático, bilingüe (ES/EN), con modo claro/oscuro, construido con Astro y desplegado en GitHub Pages.

## Sobre mí (contenido a usar en el sitio)

- **Nombre:** Mario Cerdá
- **Rol:** Full Stack Developer
- **Ubicación:** Alicante, Comunidad Valenciana (España)
- **Idiomas:** español (nativo), inglés (avanzado)
- **Stack principal:** Java, C#, Node.js, JavaScript, TypeScript, Astro, Tailwind, SQL
- **LinkedIn:** https://www.linkedin.com/in/mario-cerd%C3%A1-5344b3427/
- **GitHub:** https://github.com/cb-mario
- **Email de contacto:** cerbano.m@gmail.com
- **Foto:** `src/assets/profile.jpg`

> Nota para Claude Code: cuando falte un dato real, usa un placeholder visualmente claro (ej. `[Tu email]`) en vez de inventar información falsa. Nunca inventes empresas, fechas ni logros que no estén en este documento.

## Secciones del sitio

1. **Hero** — nombre, rol, frase corta de presentación, foto, botones a LinkedIn/GitHub y "Descargar CV".
2. **Sobre mí** — párrafo breve de trayectoria y stack técnico (lista de tecnologías, con iconos si es sencillo de implementar).
3. **Proyectos** — grid de tarjetas. De momento solo un proyecto real:
   - **Rutas de la Bici** — descripción pendiente de una línea (usar placeholder editable mientras tanto).
   - Diseñar el grid para que añadir proyectos futuros sea trivial: un array de datos en un único archivo (ej. `src/data/projects.ts`), no hardcodeado en el HTML/componentes.
4. **Contacto** — enlaces a LinkedIn, GitHub, email, y botón de descarga del CV en PDF.

No incluir sección de "experiencia laboral" por ahora (no hay contenido todavía). Dejar la estructura preparada para añadirla más adelante sin rehacer el layout.

## Idiomas (ES/EN)

- Todo el contenido de texto debe existir en español e inglés.
- Selector de idioma visible en el header (ES/EN), que recuerde la elección del usuario (localStorage).
- Usar el sistema de i18n nativo de Astro (rutas `/en/...` + diccionarios en `src/i18n/`), sin librerías externas pesadas.
- Español como idioma por defecto.

## Modo claro / oscuro

- Toggle visible en el header, con persistencia en localStorage y `prefers-color-scheme` como valor inicial.
- Sin parpadeo al cargar (aplicar el tema antes del render, con un script inline pequeño en el `<head>`).

## Diseño

- Estilo **minimalista**: mucho espacio en blanco, pocos elementos por pantalla, tipografía como protagonista.
- **Color de acento: naranja**, tanto en modo claro como en oscuro (ajustar tono/saturación entre ambos fondos para que funcione en los dos).
- Tipografía moderna (ej. Inter, Space Grotesk o Sora, vía Google Fonts o self-hosted).
- Antes de fijar la paleta definitiva, generar los tokens de color (claro + oscuro) a partir del naranja base, cuidando el contraste (WCAG AA mínimo).
- Diseño responsive mobile-first.

## Descarga de CV

- Debe existir un PDF real del CV en `public/cv-mario-cerda.pdf` (lo subiré yo; mientras tanto placeholder + TODO visible en el código).
- Botón "Descargar CV" en Hero y en Contacto, enlazando directo al PDF con atributo `download`.

## Stack técnico del propio sitio

- **Framework:** Astro
- **Estilos:** CSS con variables custom (design tokens) — evitar frameworks pesados tipo Tailwind salvo que se decida lo contrario más adelante.
- **Sin backend:** sitio 100% estático.
- **Despliegue:** GitHub Pages, vía GitHub Actions (`astro build` + deploy automático al hacer push a `main`). Configurar `astro.config.mjs` con `site` y `base` correctos para GitHub Pages.

## Estructura de carpetas esperada

```
/
├── public/
│   └── cv-mario-cerda.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   │   └── en/
│   └── styles/
├── astro.config.mjs
├── CLAUDE.md
└── README.md
```

## Flujo de trabajo para Claude Code

1. Configurar el proyecto Astro desde cero (o revisar lo existente si ya hay algo).
2. Montar el sistema de diseño (tokens de color claro/oscuro + tipografía) antes de construir componentes.
3. Construir layout base + header (selector idioma + toggle tema) + footer.
4. Construir sección Hero.
5. Construir sección Sobre mí.
6. Construir sección Proyectos (con el array de datos preparado para crecer).
7. Construir sección Contacto + botón descarga CV.
8. Revisar responsive y accesibilidad básica (contraste, alt en imágenes, focus visible).
9. Configurar GitHub Actions para deploy a GitHub Pages.
10. Actualizar el README con instrucciones de desarrollo local.

Trabaja en pasos pequeños y haz commits atómicos y descriptivos por cada avance funcional (ej. "add hero section", "add dark mode toggle", "add i18n for about section"), en vez de un único commit gigante al final. Mensajes de commit en inglés, estilo convencional (`feat:`, `fix:`, `style:`, `chore:`).

## Cosas que NO hacer

- No inventar proyectos, empresas ni logros que no estén en este archivo.
- No añadir sección de experiencia laboral todavía.
- No usar librerías pesadas innecesarias para algo que se puede hacer con CSS/JS nativo.
- No dejar el sitio sin versión responsive.
