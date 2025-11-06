'use client';
import data from '@/app/data/data.json';

export default function Testimonials() {
  const testimonials = data.testimonials;

  return (
    <section id="testimonials" className="w-full flex flex-col items-center px-2 py-5">
      <div className="max-w-6xl w-full">
        <h2 className="bg-[#2055ae] text-white py-4 px-8 text-3xl font-bold rounded-t-xl shadow mb-0 drop-shadow flex items-center">
          Testimonios
        </h2>
        <div className="bg-white shadow rounded-b-xl pt-6 pb-8 px-6">
          <h3 className="font-bold text-xl mb-2 text-center">Testimonios</h3>
          <p className="mb-7 text-center text-gray-600 max-w-3xl mx-auto">Estas son algunas palabras de personas con las que he trabajado y que han sido parte de mi camino en la ingeniería y tecnología.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#f7f8fa] rounded-xl shadow-lg p-5 flex flex-col items-center border border-gray-200">
                <span className="text-4xl mb-2 text-blue-800 font-bold">“</span>
                <p className="text-gray-800 mb-3 text-center text-sm">{t.quote}</p>
                <div className="flex flex-col items-center mt-2 gap-1">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border" />
                  <span className="font-bold text-sm">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer style block */}
        <div className="bg-[#2055ae] text-white rounded-b-xl px-6 py-3 flex flex-wrap justify-between items-center mt-2 shadow">
          <div className="flex-1 text-xs font-medium">Sobre mi<br /> Soy un apasionado por el desarrollo de software y la innovación tecnológica. Me encanta aprender cosas nuevas y aplicarlas en mis proyectos.</div>
          <div className="flex flex-col md:items-center md:flex-row gap-2 font-mono">
            <span>📧 jacklimassolarte456@gmail.com</span>
            <span>📱 +57 3193379372</span>
            <span className="flex gap-2 mt-2 md:mt-0">
              {/* Socials aquí */}
            </span>
          </div>
          <div className="w-full text-center mt-2 text-xs opacity-80">
            © 2025 Jack Limas – Todos los derechos reservados
          </div>
        </div>
      </div>
    </section>
  );
}
