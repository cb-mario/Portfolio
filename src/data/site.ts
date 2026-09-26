import type { Lang } from '../i18n/ui';

// Datos personales y enlaces — edita aquí y se actualiza en todo el sitio.

export const site = {
  name: 'Mario Cerdá',
  linkedin: 'https://www.linkedin.com/in/mario-cerd%C3%A1-5344b3427/',
  github: 'https://github.com/cb-mario',
  email: 'cerbano.m@gmail.com',
  cvFile: 'cv-mario-cerda.pdf',
  spokenLanguages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'C1', en: 'C1' } },
  ] satisfies { name: Record<Lang, string>; level: Record<Lang, string> }[],
  stack: ['Java', 'C#', 'PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  learning: ['Node.js', 'TypeScript', 'Astro', 'Tailwind CSS', 'AWS'],
};

/** true si el valor sigue siendo un placeholder del tipo "[...]". */
export const isPlaceholder = (value: string) => value.startsWith('[');
