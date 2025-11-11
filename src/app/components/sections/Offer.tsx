"use client";

import React from "react";
import Image from "next/image";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";

export default function Offer() {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const offer = (data as any)[locale].offer;

  return (
    <section
      id="offer"
      className={`flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 transition-colors duration-300 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Texto principal */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl font-bold mb-6">{offer.title}</h2>
        <p className="text-lg leading-relaxed mb-6">{offer.description}</p>

        <ul className="space-y-3">
          {offer.items.map((item: string, index: number) => (
            <li
              key={index}
              className="flex items-center gap-3 text-base md:text-lg"
            >
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Imagen o ilustración */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={offer.image}
          alt="Offer section image"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
