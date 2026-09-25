// Datos personales y enlaces — edita aquí y se actualiza en todo el sitio.

export const site = {
  name: 'Mario Cerdá',
  // TODO: pegar la URL real de LinkedIn
  linkedin: '[Tu LinkedIn]',
  github: 'https://github.com/cb-mario',
  // TODO: pegar el email real de contacto
  email: '[Tu email]',
  // TODO: subir el PDF real a public/cv-mario-cerda.pdf
  cvFile: 'cv-mario-cerda.pdf',
  stack: ['Java', 'C#', 'Astro', 'Node.js', 'JavaScript', 'SQL'],
};

/** true si el valor sigue siendo un placeholder del tipo "[...]". */
export const isPlaceholder = (value: string) => value.startsWith('[');
