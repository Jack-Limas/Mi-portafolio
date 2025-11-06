'use client';
import data from '@/app/data/data.json';

export default function Experience() {
  const experience = data.experience;

  return (
    <section id="experience" className="w-full flex flex-col items-center px-2 py-5">
      <div className="max-w-6xl w-full">
        <h2 className="bg-[#2055ae] text-white py-4 px-8 text-3xl font-bold rounded-t-xl shadow mb-0 drop-shadow flex items-center">
          Experiencia
        </h2>
        <div className="bg-white shadow rounded-b-xl pt-6 pb-8 px-6">
          <h3 className="font-bold text-xl mb-2 mt-1">Experiencia</h3>
          <p className="text-gray-600 mb-4">
            Mi recorrido apenas empieza, pero cada paso ha permitido aprender y crecer, tanto en lo personal como en lo profesional. Estas son algunas de las experiencias más importantes:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-[#f5f6fa] rounded-xl shadow-md p-4 border border-gray-200">
                <div className="font-bold mb-1">{exp.title}</div>
                <div className="text-base">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
