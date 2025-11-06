// components/layout/Navbar.tsx
'use client';

const SECTIONS = [
  {
    label: { en: 'Home', es: 'Inicio' },
    link: '#home',
  },
  {
    label: { en: 'Projects', es: 'Proyectos' },
    link: '#projects',
  },
  {
    label: { en: 'Contact', es: 'Contacto' },
    link: '#contact',
  },
  {
    label: { en: 'About Me', es: 'Acerca de mí' },
    link: '#about',
  },
  {
    label: { en: 'What I Offer', es: 'Lo que ofrezco' },
    link: '#offer',
  },
  {
    label: { en: 'Experience', es: 'Experiencia' },
    link: '#experience',
  },
  {
    label: { en: 'Testimonials', es: 'Testimonios' },
    link: '#testimonials',
  },
];

export default function Navbar({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <header className="bg-blue-700 text-white shadow ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-2">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight w-full md:w-auto">Mi Portafolio</h1>
        <nav className="flex-1 flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base font-medium mt-2 md:mt-0">
          {SECTIONS.map((section) => (
            <a
              key={section.link}
              href={section.link}
              className="hover:underline underline-offset-4 px-2 transition-colors"
            >
              {section.label[lang]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
