import type { Lang } from '../i18n/ui';

// Datos personales y enlaces — edita aquí y se actualiza en todo el sitio.

export const site = {
  name: 'Mario Cerdá',
  linkedin: 'https://www.linkedin.com/in/mario-cerd%C3%A1-5344b3427/',
  github: 'https://github.com/cb-mario',
  email: 'cerbano.m@gmail.com',
  // TODO: subir el PDF real a public/cv-mario-cerda.pdf
  cvFile: 'cv-mario-cerda.pdf',
  spokenLanguages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'Avanzado', en: 'Advanced' } },
  ] satisfies { name: Record<Lang, string>; level: Record<Lang, string> }[],
  stack: ['Java', 'C#', 'PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  learning: ['Node.js', 'TypeScript', 'Astro', 'Tailwind CSS'],
};

/** true si el valor sigue siendo un placeholder del tipo "[...]". */
export const isPlaceholder = (value: string) => value.startsWith('[');
