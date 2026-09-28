import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import apuntaImg from '../assets/projects/apunta.png';
import bikeTelemetryImg from '../assets/projects/biketelemetry.png';

export interface Project {
  title: string;
  description: Record<Lang, string>;
  /** Tecnologías usadas (se muestran como etiquetas). */
  tags: string[];
  /** URL del repositorio (opcional). */
  repo?: string;
  /** URL de la demo o web publicada (opcional). */
  demo?: string;
  /** Captura o imagen de portada; enlaza a la demo (o al repo si no hay demo). */
  image?: { src: ImageMetadata; alt: Record<Lang, string> };
  /** Marca el proyecto como en desarrollo (se muestra una etiqueta junto al título). */
  wip?: boolean;
}

// Para añadir un proyecto, añade un objeto más a este array.
export const projects: Project[] = [
  {
    title: 'Apunta',
    description: {
      es: 'Gestor de tareas web: creas, editas, completas y borras tareas, las filtras por estado y ves un resumen de cuántas hay de cada tipo, con aviso de las que ya han vencido. Lo hice para centrarme en el backend con .NET: MVC, base de datos Code First con migraciones, consultas LINQ (el resumen sale de un único GroupBy) y algo de seguridad básica, como tokens anti-CSRF, Bind contra overposting y nada que modifique datos por GET.',
      en: 'A web task manager: create, edit, complete and delete tasks, filter them by status and see a summary of how many there are of each, with overdue ones flagged. I built it to focus on the backend side of .NET: MVC, a Code First database with migrations, LINQ queries (the summary comes from a single GroupBy) and some basic security, like anti-CSRF tokens, Bind against overposting and nothing that changes data over GET.',
    },
    tags: ['C#', 'ASP.NET Core MVC', 'Entity Framework Core', 'MySQL', 'Razor', 'Bootstrap 5'],
    repo: 'https://github.com/cb-mario/Apunta',
    image: {
      src: apuntaImg,
      alt: {
        es: 'Captura de Apunta: listado de tareas con el resumen por estado y una tarea marcada como vencida',
        en: 'Apunta screenshot: task list with the per-status summary and one task flagged as overdue',
      },
    },
  },
  {
    title: 'BikeTelemetry',
    wip: true,
    description: {
      es: 'Aplicación web para registrar salidas en bici y planificar rutas. Importa GPX o sincroniza con Strava, calcula estadísticas y zonas de pulso, y traza rutas sobre el mapa para exportarlas al ciclocomputador. Acceso con email, Strava o Google (OAuth 2.0) y tokens cifrados con AES-256-GCM.',
      en: 'Web app to log bike rides and plan routes. Import GPX files or sync with Strava, get stats and heart-rate zones, and draw routes on the map to export to your bike computer. Sign in with email, Strava or Google (OAuth 2.0), with tokens encrypted using AES-256-GCM.',
    },
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Leaflet', 'Vercel', 'Supabase'],
    repo: 'https://github.com/cb-mario/bike-telemetry',
    demo: 'https://bike-telemetry.vercel.app',
    image: {
      src: bikeTelemetryImg,
      alt: {
        es: 'Portada de BikeTelemetry: «Cada kilómetro, medido.»',
        en: 'BikeTelemetry cover: “Every kilometre, measured.”',
      },
    },
  },
  {
    title: 'Portfolio',
    description: {
      es: 'Esta misma web. Bilingüe (ES/EN), con modo claro/oscuro, construida con Astro y desplegada en GitHub Pages con GitHub Actions.',
      en: 'This very site. Bilingual (ES/EN) with light/dark mode, built with Astro and deployed to GitHub Pages via GitHub Actions.',
    },
    tags: ['Astro', 'TypeScript', 'CSS'],
    repo: 'https://github.com/cb-mario/Portfolio',
  },
];
