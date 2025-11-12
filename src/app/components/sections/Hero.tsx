"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";

export default function Hero() {
  const { locale } = useLocale();
  const t = data[locale].hero;

  // Prevención hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gray-100 dark:bg-[#0B1220] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* --- TEXT LEFT --- */}
        <div>
          <h2 className="text-2xl font-bold mb-1">Hola, soy {t.name}</h2>

          <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
            {t.title}
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {t.description}
          </p>

          <h3 className="text-lg font-bold mb-3">Algunos de mis talentos</h3>

          <ul className="space-y-2 mb-6">
            {t.talents.map((talent: string, index: number) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {talent}
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-4 py-2 rounded-md bg-[#1E40AF] text-white shadow-md"
            >
              Ver Proyectos
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 shadow-md"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* --- IMAGE RIGHT (MOBILE → ABAJO) --- */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-full overflow-hidden border-4 border-[#1E40AF] w-64 h-64 md:w-80 md:h-80">
            <Image
              src={t.profileImage}
              alt="profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
