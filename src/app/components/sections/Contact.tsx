'use client';

export default function Contact({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-10 mt-4">
      {/* Encabezado global */}
      <div className="w-full mb-10 flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-2 text-center">Contáctame</h2>
        <p className="text-gray-700 text-lg text-center">Puedes escribirme para proyectos o preguntas.</p>
      </div>
      {/* Fila horizontal */}
      <div className="flex flex-row gap-4 md:gap-14 items-start justify-center w-full">
        {/* Columna izquierda completa: Formulario + Iconos */}
        <div className="flex flex-col gap-6"
          style={{
            minWidth: '600px',
            maxWidth: '630px',
            minHeight: '620px'
          }}
        >
          {/* CUADRO ROJO: Formulario */}
          <div className="flex flex-col justify-center rounded-2xl bg-gray-100 p-8 shadow flex-grow">
            <form className="flex flex-col gap-5">
              <input
                className="bg-gray-200 rounded-lg py-4 px-5 text-lg shadow-sm"
                placeholder="Nombre" type="text" name="name"
              />
              <input
                className="bg-gray-200 rounded-lg py-4 px-5 text-lg shadow-sm"
                placeholder="Correo" type="email" name="email"
              />
              <textarea
                className="bg-gray-200 rounded-lg py-4 px-5 text-lg shadow-sm min-h-[200px] h-[220px] resize-none"
                placeholder="Mensaje" rows={9} name="message"
              />
              <button
                type="submit"
                className="border border-blue-400 rounded-lg py-3 text-blue-700 text-lg font-semibold bg-white shadow hover:bg-blue-50 transition"
              >
                Enviar
              </button>
            </form>
          </div>
          {/* CUADRO MORADO: Íconos de redes sociales abajo */}
          <div className="flex gap-10 justify-center items-center py-4 bg-gray-50 rounded-xl shadow">
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition" /></a>
            <a href="#"><img src="/icons/another.svg" alt="Other" className="w-10 h-10 hover:scale-110 transition" /></a>
            <a href="#"><img src="/icons/github.svg" alt="GitHub" className="w-10 h-10 hover:scale-110 transition" /></a>
          </div>
        </div>
        {/* Óvalo (avatar) - NO SE TOCA */}
        <div className="flex flex-1 items-center justify-center min-h-[420px]" style={{ marginTop: '-0px' }}>
          <span
            style={{
              width: '340px',
              height: '450px',
              background: '#F9FBFD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '46%/44%',
              boxShadow: '0 10px 32px 0 rgba(0,32,128,0.13)'
            }}
            className="overflow-hidden border-4 border-blue-200"
          >
            <img
              src="/ruta/a/tu/avatar_contacto.jpg"
              alt="Avatar"
              className="object-cover w-[310px] h-[390px]"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
