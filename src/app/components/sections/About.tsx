'use client';
import data from '@/app/data/data.json';
export default function About({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const aboutText = data.about.description;
  const hobbies = data.about.hobbies;
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-[auto_1fr] items-center gap-6">
      {/* Foto pequeña a la izquierda */}
      <div className="flex justify-center md:justify-start">
        <img
          src={data.about.photo} // ejemplo: '/images/about.jpg'
          alt="Jack"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow"
        />
      </div>
      {/* Texto y hobbies */}
      <div>
        <h2 className="text-center md:text-left font-bold text-2xl md:text-3xl mb-4">
          {lang === 'en' ? 'About Me' : 'Acerca de mí'}
        </h2>
        <p className="mb-4 text-gray-700 text-center md:text-left">
          {aboutText}
        </p>
        <h3 className="text-lg font-semibold mb-2 text-center md:text-left">{lang === 'en' ? 'Hobbies' : 'Hobbies'}</h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center md:justify-start">
          {hobbies.map((hobbie: { image: string; description: string }, i: number) =>
            <span key={i} className="bg-gray-200 rounded-full px-4 py-1 text-sm">{hobbie.description}</span>
          )}
        </div>
      </div>
    </section>
  );
}
