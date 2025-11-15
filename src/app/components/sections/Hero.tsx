"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";

export default function Hero() {
  const { locale } = useLocale();
  const t = data[locale].hero;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="home"
      className="pt-20 pb-20 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center"
    >
      {/* --- Columna izquierda: Texto --- */}
      <div className="flex flex-col justify-center px-8">
        <h2 className="text-4xl font-bold mb-3">
          Hola, soy <span className="font-black">{t.name}</span>
        </h2>
        <p className="text-xl text-gray-700 mb-2">{t.title}</p>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">{t.description}</p>
        <h3 className="text-lg font-semibold mb-2">Algunos de mis talentos</h3>
        <ul className="space-y-2 mb-6">
          {t.talents.map((talent: string, idx: number) => (
            <li key={idx}>{talent}</li>
          ))}
        </ul>
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className="px-5 py-2 rounded-lg bg-blue-700 text-white font-semibold shadow hover:bg-blue-900"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-gray-200 text-blue-700 font-semibold shadow hover:bg-blue-100"
          >
            Contáctame
          </a>
        </div>
      </div>
      {/* --- Columna derecha: Imagen --- */}
      <div className="flex justify-center md:justify-end items-center px-8">
        <div className="rounded-full overflow-hidden border-4 border-blue-700 bg-white w-56 h-56 md:w-80 md:h-80 flex items-center justify-center">
          <Image
            src={t.profileImage}
            alt="profile"
            width={300}
            height={320}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
