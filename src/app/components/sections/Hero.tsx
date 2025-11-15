"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";

export default function Hero() {
  const { t } = useLocale();               // <-- ahora t.hero tiene todos los textos
  const { mode } = useThemeMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Estilo dinámico según el modo
  const sectionBg =
    mode === "dark" ? "bg-[#13204c] text-gray-100" : "bg-gray-100 text-gray-900";
  const titleText = mode === "dark" ? "text-gray-100" : "text-blue-800";
  const descText = mode === "dark" ? "text-gray-300" : "text-gray-700";
  const talentsText = mode === "dark" ? "text-gray-200" : "text-gray-900";
  const btnPrimary =
    mode === "dark"
      ? "bg-blue-700 text-white hover:bg-blue-900"
      : "bg-blue-700 text-white hover:bg-blue-900";
  const btnSecondary =
    mode === "dark"
      ? "bg-gray-700 text-blue-200 hover:bg-gray-900"
      : "bg-gray-200 text-blue-700 hover:bg-blue-100";

  return (
    <section
      id="home"
      className={`pt-20 pb-20 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center ${sectionBg} transition-colors duration-300`}
    >
      {/* --- Columna izquierda: Texto --- */}
      <div className="flex flex-col justify-center px-8">
        <h2 className={`text-4xl font-bold mb-3 ${titleText}`}>
          
          {t.hero.greeting} <span className="font-black">{t.hero.name}</span>
        </h2>
        <p className={`text-xl mb-2 ${descText}`}>{t.hero.title}</p>
        <p className={`text-base mb-6 leading-relaxed ${descText}`}>{t.hero.description}</p>
        <h3 className={`text-lg font-semibold mb-2 ${titleText}`}>{t.hero.talentsTitle}</h3>
        <ul className={`space-y-2 mb-6 ${talentsText}`}>
          {t.hero.talents.map((talent: string, idx: number) => (
            <li key={idx}>{talent}</li>
          ))}
        </ul>
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className={`px-5 py-2 rounded-lg font-semibold shadow ${btnPrimary}`}
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className={`px-5 py-2 rounded-lg font-semibold shadow ${btnSecondary}`}
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
      {/* --- Columna derecha: Imagen --- */}
      <div className="flex justify-center md:justify-start md:pl-20 items-center px-8">
        {/* ¡Oval más grande y desplazado a la izquierda! */}
        <div className="rounded-full overflow-hidden border-4 border-blue-700 bg-white w-72 h-72 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
          <Image
            src={t.hero.profileImage}
            alt="profile"
            width={460}
            height={460}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
