// components/sections/Hero.tsx
'use client';

export default function Hero({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <section id="home" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-4 py-8 mt-6">
      {/* Texto */}
      <div className="bg-gray-100 rounded-xl p-6 flex flex-col shadow">
        <h2 className="font-bold text-xl md:text-2xl mb-2">Hola, soy Jack Anderson Limas Solarte</h2>
        <p className="mb-2 text-gray-700">Construyo software que resuelve problemas reales</p>
        <p className="mb-4 text-gray-700 text-sm">
          Soy estudiante de Ingeniería de Software en 5º semestre, apasionado por el desarrollo web y la creación de soluciones digitales. Me destaco por mi atención al detalle, el aprendizaje constante y la capacidad de transformar ideas en proyectos funcionales.
        </p>
        <h3 className="font-bold text-lg mb-2">Algunos de mis talentos</h3>
        <ul className="mb-4 text-gray-700 text-sm ps-2 flex flex-col gap-1">
          <li>Pensamiento lógico y resolución de problemas <span>💡</span></li>
          <li>Aprendizaje autónomo y disciplina <span>📚</span></li>
          <li>Sinceridad y humildad <span>🤝</span></li>
        </ul>
        <div className="flex gap-3 pt-2">
          <a
            href="#projects"
            className="btn-primary border border-blue-400 px-4 py-2 text-sm rounded-xl bg-white text-blue-700 font-medium shadow hover:bg-blue-50 transition"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="btn-primary border border-blue-400 px-4 py-2 text-sm rounded-xl bg-white text-blue-700 font-medium shadow hover:bg-blue-50 transition"
          >
            Contáctame
          </a>
        </div>
      </div>
      {/* Foto */}
      <div className="flex justify-center items-center bg-gray-100 rounded-xl shadow p-4">
        <img
          src="/ruta/a/tu/foto.jpg"
          alt="Jack"
          className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-200 shadow" />
      </div>
    </section>
  );
}
