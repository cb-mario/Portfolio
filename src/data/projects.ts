import type { Lang } from '../i18n/ui';

export interface Project {
  title: string;
  description: Record<Lang, string>;
  /** Tecnologías usadas (se muestran como etiquetas). */
  tags: string[];
  /** URL del repositorio (opcional). */
  repo?: string;
  /** URL de la demo o web publicada (opcional). */
  demo?: string;
}

// Para añadir un proyecto, añade un objeto más a este array.
export const projects: Project[] = [
  {
    title: 'BikeTelemetry',
    description: {
      es: 'Proyecto personal en desarrollo: una alternativa gratuita a las apps de suscripción para seguir y analizar rutas en bici. Permite crear rutas y exportarlas al ciclocomputador, con login mediante OAuth 2.0 (Strava y Google) y los tokens sensibles cifrados con AES-256-GCM.',
      en: 'Personal project, work in progress: a free alternative to subscription apps for tracking and analysing bike rides. You can plan routes and export them to your bike computer, sign in with OAuth 2.0 (Strava and Google), and sensitive tokens are encrypted with AES-256-GCM.',
    },
    // TODO: añadir enlaces a repo/demo cuando estén listos
    tags: ['Node.js', 'Express', 'React', 'Prisma', 'SQLite', 'Tailwind CSS'],
  },
  {
    title: 'Portfolio',
    description: {
      es: 'Esta misma web. Bilingüe (ES/EN), con modo claro/oscuro, construida con Astro y desplegada en GitHub Pages con GitHub Actions.',
      en: 'This very site. Bilingual (ES/EN) with light/dark mode, built with Astro and deployed to GitHub Pages via GitHub Actions.',
    },
    tags: ['Astro', 'TypeScript', 'CSS'],
    repo: 'https://github.com/cb-mario/Porfolio',
  },
];
