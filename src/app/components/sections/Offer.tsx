"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";

export default function OfferSection() {
  const { locale } = useLocale();
  const offer = data[locale].offer;

  // Protección contra hydration mismatch si usas modo dark/light dinámico:
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="min-h-screen px-4 md:px-16 py-10 transition-colors bg-gray-50 dark:bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-900 dark:text-blue-300">
        {offer.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Por qué elegirme */}
        <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-2xl p-6 md:w-1/2 flex flex-col">
          <h3 className="text-xl font-bold mb-4 dark:text-white">{offer.whyChoose.title}</h3>
          <ul className="mb-4 space-y-2 text-gray-700 dark:text-gray-200">
            {offer.whyChoose.items.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 dark:text-gray-300">{offer.whyChoose.description}</p>
        </div>

        {/* Tecnologías que domino */}
        <div className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-2xl p-6 md:w-1/2 flex flex-col">
          <h3 className="text-xl font-bold mb-4 dark:text-white">{offer.skills.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{offer.skills.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
            {offer.skills.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
