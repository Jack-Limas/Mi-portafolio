'use client';
import data from '@/app/data/data.json';

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FAFBFC] min-h-[600px] flex items-center justify-center w-full py-12"
    >
      <div className="relative max-w-6xl w-full flex flex-col items-start">
        {/* Foto óvalo flotante, ajustado a lo pedido */}
        <span
          style={{
            width: '440px',
            height: '440px',
            position: 'absolute',
            top: '-0px',      
            left: '775px',      
            zIndex: 10,
            background: '#F9FBFD',
            boxShadow: '0 10px 32px 0 rgba(0,32,128,0.13)'
          }}
          className="rounded-full overflow-hidden border-4 border-blue-200 flex items-center justify-center shadow"
        >
          <img
            src={data.hero.profileImage}
            alt="Jack Limas"
            className="object-cover w-[420px] h-[420px] md:w-[440px] md:h-[440px] rounded-full"
          />
        </span>

        {/* Texto principal */}
        <div className="bg-[#F2F4F7] rounded-2xl shadow-lg p-10 flex flex-col min-h-[480px] justify-between max-w-[630px] w-full z-20">
          <h2 className="font-bold text-3xl mb-3 text-gray-900 text-left">Hola, soy {data.hero.name}</h2>
          <p className="mb-2 text-gray-800 text-lg font-semibold text-left">{data.hero.subtitle}</p>
          <p className="mb-5 text-gray-700 text-base whitespace-pre-line leading-relaxed text-left">
            {data.hero.description}
          </p>
          <h3 className="font-bold text-xl mb-4 mt-4 text-gray-900 text-left">Algunos de mis talentos</h3>
          <ul className="mb-7 text-gray-700 text-base flex flex-col gap-4">
            {data.hero.talents.map((talent, idx) => (
              <li key={idx} className="px-4 py-3 bg-[#F6FBFF] rounded-xl shadow font-medium text-lg text-left">
                {talent}
              </li>
            ))}
          </ul>
          {/* Botones 3cm (114px) separados y rodeados */}
          <div className="flex pt-6 justify-start" style={{ gap: '114px' }}>
            <a
              href="#projects"
              className="rounded-2xl bg-white border-2 border-blue-400 px-10 py-3 text-base text-blue-700 font-semibold shadow transition-all hover:bg-blue-50 hover:border-blue-600"
            >Ver Proyectos</a>
            <a
              href="#contact"
              className="rounded-2xl bg-white border-2 border-blue-400 px-10 py-3 text-base text-blue-700 font-semibold shadow transition-all hover:bg-blue-50 hover:border-blue-600"
            >Contáctame</a>
          </div>
        </div>
      </div>
    </section>
  );
}
