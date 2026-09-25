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
    title: 'Rutas de la Bici',
    description: {
      // TODO: descripción real del proyecto (una línea)
      es: '[Descripción del proyecto en una línea]',
      en: '[One-line project description]',
    },
    // TODO: añadir tecnologías y enlaces (repo/demo) cuando estén listos
    tags: [],
  },
];
