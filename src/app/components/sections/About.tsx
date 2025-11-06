'use client';
import data from '@/app/data/data.json';

export default function About() {
  const about = data.about;

  return (
    <section id="about" className="w-full flex flex-col items-center px-2 py-5">
      <div className="max-w-6xl w-full">
        <h2 className="bg-[#2055ae] text-white py-4 px-8 text-3xl font-bold rounded-t-xl shadow mb-0 drop-shadow flex items-center">
          Acerca de mi
        </h2>
        <div className="bg-white shadow px-8 py-7 flex flex-col xl:flex-row gap-8 rounded-b-lg">
          <div className="flex-1 flex flex-col items-center">
            <img src={about.photo} alt="Perfil" className="w-40 h-40 rounded-full object-cover mb-2 border-4 border-blue-200" />
          </div>
          <div className="flex-[2]">
            <p className="mb-3 text-gray-700 text-base">{about.description}</p>
            <p className="text-sm mb-2 text-gray-500">{about.story}</p>
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-white shadow rounded-xl mt-6 px-4 pb-4 pt-2">
          <h3 className="text-lg font-bold mt-4 mb-2 pl-1">Mis Hobbies</h3>
          <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {about.hobbies.map((hob, i) => (
              <div className="rounded-lg bg-[#f7f8fa] shadow-md flex flex-col items-center px-3 py-2" key={i}>
                <img src={hob.image} alt="hobbie" className="h-20 w-24 object-cover rounded mb-1 border border-gray-200" />
                <p className="text-xs text-center text-gray-700">{hob.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
