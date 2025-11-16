"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

type ExperienceItem = {
  title: string;
  description: string;
};

type ExperienceData = {
  title: string;
  intro: string;
  items: ExperienceItem[];
};

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

const Experience = () => {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    function updateRealMode() { setRealMode(getEffectiveMode(mode)); }
    updateRealMode();
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateRealMode);
      return () => mq.removeEventListener("change", updateRealMode);
    }
  }, [mode]);
  if (!mounted) return null;

  const experience = (data as { [key: string]: { experience: ExperienceData } })[locale].experience;

  // Glow y fondo de cards
  const cardGlow =
    realMode === "dark"
      ? "bg-[#181f31] border border-gray-700 shadow-[0_0_32px_0_rgba(30,64,175,0.5)] hover:shadow-[0_0_54px_6px_rgba(30,64,175,0.7)]"
      : "bg-white border border-gray-200 shadow-lg";

  // Orden especial para 3+2 grid en escritorio
  const topRow = experience.items.slice(0, 3);
  const bottomRow = experience.items.slice(3);

  return (
    <section
      id="experience"
      className={`min-h-screen px-2 md:px-10 py-20 transition-colors duration-300 ${
        realMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Título principal */}
        <h2 className={`text-4xl font-extrabold text-center mb-4 ${realMode === "dark" ? "text-white" : "text-black"}`}>
          {experience.title}
        </h2>
        {/* Subtítulo */}
        <p
          className={`mb-12 text-lg mx-auto text-center max-w-4xl ${
            realMode === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {experience.intro}
        </p>

        {/* Grid a la Figma: dos filas explícitas */}
        <div className="w-full flex flex-col gap-8">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topRow.map((item, index) => (
              <div
                key={index}
                className={`
                  p-7 rounded-2xl min-h-[170px] flex flex-col justify-between
                  transition-all duration-200 hover:-translate-y-2 hover:scale-105
                  ${cardGlow}
                `}
                style={{ width: '100%', maxWidth: 430 }}
              >
                <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          {/* Second Row - 2 cards, centradas */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {bottomRow.map((item, index) => (
              <div
                key={index}
                className={`
                  p-7 rounded-2xl min-h-[170px] flex flex-col justify-between
                  transition-all duration-200 hover:-translate-y-2 hover:scale-105
                  ${cardGlow}
                `}
                style={{ width: '100%', maxWidth: 430 }}
              >
                <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
