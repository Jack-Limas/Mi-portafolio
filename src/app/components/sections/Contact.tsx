// components/sections/Contact.tsx
'use client';

export default function Contact({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <section id="contact" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-4 py-8 mt-6">
      {/* Formulario */}
      <div className="bg-gray-100 rounded-xl p-6 shadow flex flex-col justify-center">
        <h2 className="font-bold text-xl md:text-2xl mb-2">Contáctame</h2>
        <p className="mb-4 text-gray-700">Puedes escribirme para proyectos o preguntas</p>
        <form className="flex flex-col gap-3">
          <input className="bg-gray-200 rounded-md p-2" placeholder="Nombre" type="text" name="name" />
          <input className="bg-gray-200 rounded-md p-2" placeholder="Correo" type="email" name="email" />
          <textarea className="bg-gray-200 rounded-md p-2" placeholder="Mensaje" rows={3} name="message"></textarea>
          <button type="submit" className="border border-blue-400 rounded-lg py-1 text-blue-700 font-medium bg-white shadow hover:bg-blue-50 transition">
            Enviar
          </button>
        </form>
        {/* Íconos sociales */}
        <div className="mt-4 flex gap-4 justify-center">
          {/* Reemplaza los icons por imágenes/link a tus redes */}
          <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" /></a>
          <a href="#"><img src="/icons/another.svg" alt="Other" className="w-8 h-8" /></a>
          <a href="#"><img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" /></a>
        </div>
      </div>
      {/* Avatar/ilustración */}
      <div className="flex justify-center items-center bg-gray-100 rounded-xl shadow p-4">
        <img
          src="/ruta/a/tu/avatar_contacto.jpg"
          alt="Avatar"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-200 shadow"
        />
      </div>
    </section>
  );
}
