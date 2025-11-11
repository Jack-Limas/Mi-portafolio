"use client";

import React from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";

// Declara tipo para cada experiencia
type ExperienceItem = {
  title: string;
  description: string;
};

type ExperienceData = {
  title: string;
  intro: string;
  items: ExperienceItem[];
};

const Experience = () => {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const experience = (data as { [key: string]: { experience: ExperienceData } })[locale].experience;

  return (
    <section
      id="experience"
      className={`min-h-screen px-6 md:px-16 py-20 transition-colors duration-300 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2D7A]">
          {experience.title}
        </h2>

        {/* Subtítulo */}
        <p
          className={`mb-10 text-lg ${
            mode === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {experience.intro}
        </p>

        {/* Contenedor de tarjetas responsivo */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experience.items.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                mode === "dark"
                  ? "bg-gray-800 text-gray-200"
                  : "bg-white text-gray-800"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
