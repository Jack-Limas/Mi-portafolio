"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";
import data from "@/app/data/data.json";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { locale } = useLocale();
  const { mode, setMode } = useThemeMode();
  const [status, setStatus] = useState<string>("");

  // Prevención hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const t = data[locale as "es" | "en"].contact;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus(locale === "es" ? "Mensaje enviado con éxito ✅" : "Message sent successfully ✅");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus(locale === "es" ? "Error al enviar ❌" : "Error sending ❌");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-2">{t.title}</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">{t.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl items-center">
        {/* Formulario */}
        <form ref={formRef} onSubmit={sendEmail} className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col gap-4">
          <label className="font-semibold text-gray-800 dark:text-gray-100">{t.form.name}</label>
          <input name="user_name" type="text" required className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" />

          <label className="font-semibold text-gray-800 dark:text-gray-100">{t.form.email}</label>
          <input name="user_email" type="email" required className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" />

          <label className="font-semibold text-gray-800 dark:text-gray-100">{t.form.message}</label>
          <textarea name="message" required rows={4} className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" />

          <button type="submit" className="mt-3 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700">
            {t.form.submit}
          </button>

          {status && <p className="text-sm text-green-600 dark:text-green-400 mt-2">{status}</p>}

          <div className="flex justify-center gap-6 mt-6">
            <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href={t.social.vercel} target="_blank" rel="noopener noreferrer">
              <Image src="/images/vercel.svg" alt="Vercel" width={32} height={32} />
            </a>
            <a href={t.social.github} target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.svg" alt="GitHub" width={32} height={32} />
            </a>
          </div>
        </form>

        {/* Imagen lateral */}
        <div className="flex justify-center">
          <Image
            src={t.avatar}
            alt="Avatar"
            width={280}
            height={280}
            className="rounded-full border-4 border-blue-800 dark:border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
