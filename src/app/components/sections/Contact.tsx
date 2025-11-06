'use client';
import data from '@/app/data/data.json';
import { useState } from 'react';

type ContactForm = {
  Name: string;
  Email: string;
  Message: string;
};

export default function Contact() {
  const contact = data.contact;
  const [form, setForm] = useState<ContactForm>({ Name: '', Email: '', Message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form enviado!');
    setForm({ Name: '', Email: '', Message: '' });
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center px-2 py-5">
      <div className="max-w-6xl w-full">
        <h2 className="bg-[#2055ae] text-white py-4 px-8 text-3xl font-bold rounded-t-xl shadow mb-0 drop-shadow flex items-center">
          Contacto
        </h2>
        <div className="bg-white shadow rounded-b-xl pt-8 pb-8 px-6 flex flex-col md:flex-row gap-8 items-center">
          <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
            <h3 className="font-bold mb-1 text-lg">Contáctame</h3>
            <p className="text-gray-700 mb-3 text-sm">{contact.description}</p>
            {contact.fields.map((field, idx) => (
              field.type === 'textarea' ?
                <textarea
                  key={idx}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof ContactForm]}
                  required
                  className="rounded-lg px-3 py-2 border border-gray-300 shadow-inner mb-1 w-full resize-none"
                  onChange={handleChange}
                /> :
                <input
                  key={idx}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof ContactForm]}
                  required
                  className="rounded-lg px-3 py-2 border border-gray-300 shadow-inner mb-1 w-full"
                  onChange={handleChange}
                />
            ))}
            <button type="submit" className="w-fit px-6 py-2 mt-2 bg-blue-100 border border-blue-700 rounded-[15px] text-blue-700 font-bold shadow hover:bg-blue-700 hover:text-white text-sm">Enviar</button>
            <div className="flex gap-6 mt-4">
              {contact.socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="p-2 rounded bg-white border transition hover:bg-blue-50"
                >
                  <img src={soc.icon} alt={soc.name} className="w-9 h-9" />
                </a>
              ))}
            </div>
          </form>
          <div className="flex-1 flex items-center justify-center">
            <div className="rounded-full border-4 border-[#c1d4ed] bg-white shadow-lg overflow-hidden w-56 h-56 flex items-center justify-center">
              <img src={contact.photo} alt="Avatar" className="object-cover w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
