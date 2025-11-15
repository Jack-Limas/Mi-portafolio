"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system") {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    // fallback servidor
    return "light";
  }
  return mode;
}

export default function Hero() {
  const { t } = useLocale();
  const { mode } = useThemeMode();
  const [mounted, setMounted] = useState(false);
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));

  // Cambia el valor real cuando cambia el contexto o el SO
  useEffect(() => {
    function updateRealMode() {
      setRealMode(getEffectiveMode(mode));
    }
    updateRealMode();
    if (mode === "system") {
      // Escuchar cambios de SO en tiempo real
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateRealMode);
      return () => mq.removeEventListener("change", updateRealMode);
    }
  }, [mode]);

  // Para evitar hydration error
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Clases dependientes de realMode
  const sectionBg =
    realMode === "dark"
      ? "bg-[#16213E] text-white"
      : "bg-gray-100 text-black";

  return (
    <section
      id="home"
      className={`pt-20 pb-20 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center ${sectionBg} transition-colors duration-300`}
    >
      <div className="flex flex-col justify-center px-8">
        <h2 className="text-4xl font-bold mb-3">
          {t.hero.greeting} <span className="font-black">{t.hero.name}</span>
        </h2>
        <p className={`text-xl mb-2 ${realMode === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.hero.title}</p>
        <p className={`text-base mb-6 leading-relaxed ${realMode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {t.hero.description}
        </p>
        <h3 className="text-lg font-bold mb-2">{t.hero.talentsTitle}</h3>
        <ul className={`space-y-2 mb-6 ${realMode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {t.hero.talents.map((talent: string, idx: number) => (
            <li key={idx}>{talent}</li>
          ))}
        </ul>
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className="px-5 py-2 rounded-lg font-semibold shadow bg-blue-700 text-white hover:bg-blue-900"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className={`px-5 py-2 rounded-lg font-semibold shadow ${
              realMode === "dark"
                ? "bg-gray-700 text-blue-200 hover:bg-gray-900"
                : "bg-gray-200 text-[#1E40AF] hover:bg-blue-100"
            }`}
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
      {/* --- Columna derecha: Imagen --- */}
      <div className="flex justify-center md:justify-start md:pl-20 items-center px-8 mt-20 md:mt-0">
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
