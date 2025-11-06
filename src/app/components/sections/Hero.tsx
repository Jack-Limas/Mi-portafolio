'use client';
import data from '@/app/data/data.json';

export default function Hero() {
  const hero = data.hero;

  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-2 pt-6 pb-10">
      <div className="flex flex-col md:flex-row max-w-5xl w-full gap-8 items-center justify-between bg-[#f5f6fa] rounded-2xl shadow-lg border border-[#e3e7ed] p-8 mt-4">
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <h1 className="text-4xl font-bold text-[#2055ae] leading-tight mb-1 text-left">Mi Portafolio</h1>
          <nav className="mb-4 w-full flex flex-wrap gap-2">
            {/* Usar tu Navbar aquí, si quieres puedes hacer una barra fija aparte */}
          </nav>
          <div className="bg-white rounded-xl shadow px-4 py-4 mb-2">
            <h2 className="font-bold text-lg mb-1 leading-tight">Hola, soy Jack Anderson Limas Solarte</h2>
            <p className="text-[15px] mb-1 text-gray-800">
              Construyo software que resuelve problemas reales
            </p>
            <p className="text-[14px] text-gray-700 mb-3">
              Soy estudiante de Ingeniería de Software en 5° semestre, apasionado por el desarrollo web y la creación de soluciones digitales. Me destaco por mi atención al detalle, el aprendizaje constante y la capacidad de transformar ideas en proyectos funcionales.
            </p>
            <h3 className="font-bold mb-2 mt-2 text-base">Algunos de mis talentos</h3>
            <ul className="mb-2 text-gray-900 text-sm pl-3 space-y-1">
              <li>Pensamiento lógico y resolución de problemas 💡</li>
              <li>Aprendizaje autónomo y disciplina 📚</li>
              <li>Sinceridad y humildad 🤝</li>
            </ul>
            <div className="flex gap-4 mt-3">
              <a href="#projects" className="px-4 py-2 rounded-[14px] bg-transparent border border-blue-600 text-blue-700 font-semibold shadow hover:bg-blue-600 hover:text-white transition text-sm">Ver Proyectos</a>
              <a href="#contact" className="px-4 py-2 rounded-[14px] bg-transparent border border-blue-600 text-blue-700 font-semibold shadow hover:bg-blue-600 hover:text-white transition text-sm">Contáctame</a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="rounded-full border-4 border-[#c1d4ed] bg-white shadow-lg overflow-hidden w-64 h-64 flex items-center justify-center">
            <img src={hero.profileImage} alt="Perfil" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
