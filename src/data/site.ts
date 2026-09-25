// Datos personales y enlaces — edita aquí y se actualiza en todo el sitio.

export const site = {
  name: 'Mario Cerdá',
  linkedin: 'https://www.linkedin.com/in/mario-cerd%C3%A1-5344b3427/',
  github: 'https://github.com/cb-mario',
  // TODO: pegar el email real de contacto
  email: '[Tu email]',
  // TODO: subir el PDF real a public/cv-mario-cerda.pdf
  cvFile: 'cv-mario-cerda.pdf',
  stack: ['Java', 'C#', 'Node.js', 'JavaScript', 'TypeScript', 'Astro', 'Tailwind', 'SQL'],
};

/** true si el valor sigue siendo un placeholder del tipo "[...]". */
export const isPlaceholder = (value: string) => value.startsWith('[');
