// components/sections/Projects.tsx
'use client';

const PROJECTS = [
  {
    img: '/ruta/a/proyecto1.jpg',
    title: 'Sistema automático de expedición de billetes de tren',
    desc: 'Proyecto académico en el que diseñé un sistema para la gestión automática de boletos de tren. Incluye diagramas de clases, historias de usuario y el planteamiento de la arquitectura de software. El objetivo fue aplicar principios de diseño orientado a objetos y patrones de desarrollo.',
    demo: '#',
  },
  {
    img: '/ruta/a/proyecto2.jpg',
    title: 'Configurador de PC Gaming (Angular + TypeScript)',
    desc: 'Desarrollo de una aplicación interactiva que permite al usuario configurar los componentes de un PC gamer. Utiliza Angular, TypeScript, CSS y HTML, aplicando el patrón de Decorator. Este proyecto refuerza la práctica en interfaces dinámicas y arquitectura modular.',
    demo: '#',
  },
  {
    img: '/ruta/a/proyecto3.jpg',
    title: 'Lista de reproducción estilo Spotify (TypeScript)',
    desc: 'Aplicación de escritorio/web desarrollada en TypeScript con listas doblemente enlazadas. Permite gestionar canciones con una interfaz inspirada en Spotify, sin depender de la consola. Proyecto enfocado en estructuras de datos y diseño de interfaces.',
    demo: '#',
  },
];

export default function Projects({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-4">Mi Proyectos</h2>
      <p className="text-center text-gray-700 mb-8">Algunos trabajos destacados</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <div key={i} className="bg-gray-100 rounded-xl shadow p-4 flex flex-col">
            <img src={p.img} alt={p.title} className="rounded-lg object-cover w-full h-44 mb-3" />
            <h3 className="font-bold text-md text-gray-900 mb-2">{p.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{p.desc}</p>
            <a
              href={p.demo}
              className="mx-auto border border-blue-400 px-4 py-1 text-sm rounded-xl bg-white text-blue-700 font-medium shadow hover:bg-blue-50 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              DEMO
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
