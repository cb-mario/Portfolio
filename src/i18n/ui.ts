export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

// Los textos entre [corchetes] son placeholders pendientes de contenido real.
export const ui = {
  es: {
    'meta.title': 'Mario Cerdá — Full Stack Developer',
    'meta.description': 'Portfolio de Mario Cerdá, Full Stack Developer en Alicante, Comunidad Valenciana (España).',

    'nav.skip': 'Saltar al contenido',
    'nav.label': 'Navegación principal',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'lang.label': 'Idioma',
    'lang.switch': 'Cambiar idioma a',
    'theme.toggle': 'Cambiar tema claro/oscuro',

    'hero.greeting': 'Hola, soy',
    'hero.role': 'Full Stack Developer',
    'hero.location': 'Alicante, Comunidad Valenciana',
    'hero.tagline': 'Buscando mi primera oportunidad de prácticas.',
    'hero.photoAlt': 'Foto de Mario Cerdá',

    'about.title': 'Sobre mí',
    'about.p1':
      'Estoy cursando 2º de Desarrollo de Aplicaciones Web (DAW) en modalidad semipresencial en el IES San Vicente. Al no tener clase todos los días, buena parte del aprendizaje depende de mí: organizarme, tirar de documentación y sacar las prácticas adelante por mi cuenta.',
    'about.p2':
      'Donde más cómodo me siento es con Java y C#. También trabajo con PHP y SQL en la parte de servidor y bases de datos, y con HTML y CSS para maquetar y dejar las interfaces como tienen que quedar.',
    'about.p3':
      'Ahora mismo estoy aprendiendo TypeScript, Astro, Tailwind CSS y AWS, y cogiendo soltura con Node.js gracias a BikeTelemetry, un proyecto personal para rutas en bici. Busco mi primera oportunidad de prácticas: un equipo donde aportar lo que ya sé y seguir aprendiendo de gente con más experiencia.',
    'about.stack': 'Tecnologías que domino',
    'about.learning': 'Aprendiendo ahora',
    'about.languages': 'Idiomas',

    'projects.title': 'Proyectos',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.visit': 'Visitar web',

    'contact.title': 'Contacto',
    'contact.body': '¿Hablamos? Puedes encontrarme en estos canales.',

    'cta.cv': 'Descargar CV',
    'footer.built': 'Hecho con Astro.',
  },
  en: {
    'meta.title': 'Mario Cerdá — Full Stack Developer',
    'meta.description': 'Portfolio of Mario Cerdá, Full Stack Developer based in Alicante, Valencian Community (Spain).',

    'nav.skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'lang.label': 'Language',
    'lang.switch': 'Switch language to',
    'theme.toggle': 'Toggle light/dark theme',

    'hero.greeting': "Hi, I'm",
    'hero.role': 'Full Stack Developer',
    'hero.location': 'Alicante, Valencian Community, Spain',
    'hero.tagline': 'Looking for my first internship.',
    'hero.photoAlt': 'Photo of Mario Cerdá',

    'about.title': 'About me',
    'about.p1':
      "I'm in my second year of Web Application Development (DAW), a blended-learning vocational programme at IES San Vicente. With fewer days in the classroom, a lot of the learning is on me: staying organised, reading the docs and getting assignments done on my own.",
    'about.p2':
      "I'm most comfortable with Java and C#. I also work with PHP and SQL on the server and database side, and with HTML and CSS to build interfaces that look the way they should.",
    'about.p3':
      "Right now I'm learning TypeScript, Astro, Tailwind CSS and AWS, and getting hands-on with Node.js through BikeTelemetry, a personal project for cycling routes. I'm looking for my first internship: a team where I can put what I know to use and keep learning from people with more experience.",
    'about.stack': 'What I work with',
    'about.learning': 'Currently learning',
    'about.languages': 'Languages',

    'projects.title': 'Projects',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.visit': 'Visit site',

    'contact.title': 'Contact',
    'contact.body': "Let's talk. You can find me here.",

    'cta.cv': 'Download CV',
    'footer.built': 'Built with Astro.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
