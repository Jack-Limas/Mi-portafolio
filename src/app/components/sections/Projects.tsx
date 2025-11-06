'use client';
import data from '@/app/data/data.json';

export default function Projects() {
  const projects = data.projects;

  return (
    <section id="projects" className="w-full flex flex-col items-center px-2 py-5">
      <div className="max-w-6xl w-full">
        <h2 className="bg-[#2055ae] text-white py-4 px-8 text-3xl font-bold rounded-t-xl shadow mb-0 drop-shadow flex items-center">
          Proyectos
        </h2>
        <div className="bg-white shadow rounded-b-xl pt-6 pb-8 px-6">
          <h3 className="font-bold text-xl mb-2">Mi Proyectos</h3>
          <p className="text-gray-600 mb-4">Algunos trabajos destacados</p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-[#f7f8fa] rounded-xl shadow-lg p-4 border border-gray-200 flex flex-col items-center">
                <img src={proj.image} alt={proj.title} className="rounded-md shadow mb-2 h-32 w-full object-cover" />
                <h4 className="font-semibold mb-1 text-center">{proj.title}</h4>
                <p className="text-gray-600 mb-3 text-center text-sm">{proj.description}</p>
                <a href={proj.demo} target="_blank" rel="noopener noreferrer"
                  className="border-2 border-blue-700 px-5 py-1.5 bg-white rounded-lg text-blue-700 hover:bg-blue-700 hover:text-white transition text-sm font-semibold shadow mt-1">DEMO</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
