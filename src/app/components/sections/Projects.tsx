'use client';
import data from '@/app/data/data.json';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FAFBFC] max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-1">Mis Proyectos</h2>
      <p className="text-center mb-8 text-md text-gray-700">Algunos trabajos destacados</p>
      {/* WRAPPER: overflow-x-auto + flex-nowrap => horizontal en desktop */}
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row flex-nowrap gap-[76px] justify-center items-stretch min-w-[900px] md:min-w-0">
          {data.projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md flex flex-col items-center border border-gray-200 px-3 py-5 min-w-[210px] max-w-[230px] w-full"
            >
              <div className="w-full h-36 mb-3 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                <img src={p.image || ""} alt={p.title} className="object-cover w-full h-full rounded-xl" />
              </div>
              <h3 className="font-semibold text-base text-gray-900 w-full text-left mb-2 mt-1">
                {p.title}
              </h3>
              <p className="text-[14px] text-gray-700 w-full text-left mb-4 leading-relaxed whitespace-pre-line">
                {p.description}
              </p>
              <div className="w-full flex justify-center">
                <a
                  href={p.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-400 bg-white px-5 py-1 text-sm rounded-full text-blue-600 font-semibold shadow hover:bg-blue-50 transition-all"
                >
                  DEMO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
