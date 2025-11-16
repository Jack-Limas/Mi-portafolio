"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";
import data from "@/app/data/data.json";

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [status, setStatus] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // Todos los hooks VAN ANTES del return
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function updateRealMode() {
      setRealMode(getEffectiveMode(mode));
    }
    updateRealMode();
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateRealMode);
      return () => mq.removeEventListener("change", updateRealMode);
    }
  }, [mode]);

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

  // ESTILOS DINÁMICOS
  const sectionBg =
    realMode === "dark"
      ? "bg-[#1B2337] text-white"
      : "bg-gray-100 text-black";

  const titleClass =
    realMode === "dark"
      ? "text-white"
      : "text-black";

  const subtitleClass =
    realMode === "dark"
      ? "text-gray-300"
      : "text-gray-700";

  // Fondo, sombras y ef. azul para el formulario
  const formCard =
    realMode === "dark"
      ? "bg-[#181F31] dark:text-white border border-gray-700 shadow-[0_0_24px_0_rgba(30,64,175,0.7)] hover:shadow-[0_0_54px_3px_rgba(30,64,175,0.9)] transition-shadow"
      : "bg-gray-200 text-black border border-gray-200 shadow-lg";

  const avatarGlow =
    realMode === "dark"
      ? "shadow-[0_0_36px_0_rgba(30,64,175,0.75)] border-4 border-[#222738]"
      : "shadow-xl border-4 border-gray-200";

  // Sombra azul para el botón enviar en dark
  const sendBtn =
    realMode === "dark"
      ? "py-2 bg-[#222738] text-blue-200 rounded-md font-semibold transition-all duration-300 hover:bg-[#1E40AF] hover:shadow-[0_0_32px_0_rgba(30,64,175,0.8)]"
      : "py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition-all duration-300 font-semibold shadow-md";

  return (
    <section id="contact" className={`min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-20 ${sectionBg} transition-colors`}>
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-2 ${titleClass}`}>{t.title}</h2>
      <p className={`text-center mb-10 ${subtitleClass}`}>{t.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl items-center">
        {/* Formulario */}
        <form ref={formRef} onSubmit={sendEmail} className={`rounded-lg p-6 flex flex-col gap-4 ${formCard}`}>
          <label className="font-semibold">{t.form.name}</label>
          <input name="user_name" type="text" required className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" />

          <label className="font-semibold">{t.form.email}</label>
          <input name="user_email" type="email" required className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" />

          <label className="font-semibold">{t.form.message}</label>
          <textarea name="message" required rows={4} className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white" />

          <button type="submit" className={sendBtn}>
            {t.form.submit}
          </button>
          {status && <p className="text-sm text-green-600 dark:text-green-400 mt-2">{status}</p>}

        <div className="flex justify-center gap-6 mt-6">
          <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer">
          <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </a>
          <a href={t.social.vercel} target="_blank" rel="noopener noreferrer">
          <Image src="/images/vercel.svg" alt="Vercel" width={32} height={32} />
          </a>
          <a href={t.social.github} target="_blank" rel="noopener noreferrer">
          <Image src="/images/github.png" alt="GitHub" width={32} height={32} />
          </a>
        </div>
        </form>

        {/* Avatar GRANDE con efecto */}
        <div className="flex justify-center">
          <div className={`rounded-full overflow-hidden w-56 h-56 md:w-115 md:h-130 flex items-center justify-center transition-all duration-200 bg-white ${avatarGlow}`}>
            <Image
              src={t.avatar}
              alt="Avatar"
              width={450}
              height={450}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
