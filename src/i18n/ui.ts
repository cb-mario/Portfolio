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
    'meta.description': 'Portfolio de Mario Cerdá, Full Stack Developer en Alicante/Valencia, España.',

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
    'hero.location': 'Alicante/Valencia, España',
    'hero.tagline': '[Tu frase de presentación]',
    'hero.photoAlt': 'Foto de Mario Cerdá',

    'about.title': 'Sobre mí',
    'about.body': '[Párrafo breve sobre tu trayectoria: qué haces, qué te interesa y qué buscas.]',
    'about.stack': 'Stack técnico',

    'projects.title': 'Proyectos',
    'projects.code': 'Código',
    'projects.demo': 'Demo',

    'contact.title': 'Contacto',
    'contact.body': '¿Hablamos? Puedes encontrarme en estos canales.',

    'cta.cv': 'Descargar CV',
    'footer.built': 'Hecho con Astro.',
  },
  en: {
    'meta.title': 'Mario Cerdá — Full Stack Developer',
    'meta.description': 'Portfolio of Mario Cerdá, Full Stack Developer based in Alicante/Valencia, Spain.',

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
    'hero.location': 'Alicante/Valencia, Spain',
    'hero.tagline': '[Your short intro sentence]',
    'hero.photoAlt': 'Photo of Mario Cerdá',

    'about.title': 'About me',
    'about.body': '[Short paragraph about your background: what you do, what interests you and what you are looking for.]',
    'about.stack': 'Tech stack',

    'projects.title': 'Projects',
    'projects.code': 'Code',
    'projects.demo': 'Demo',

    'contact.title': 'Contact',
    'contact.body': "Let's talk. You can find me here.",

    'cta.cv': 'Download CV',
    'footer.built': 'Built with Astro.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
