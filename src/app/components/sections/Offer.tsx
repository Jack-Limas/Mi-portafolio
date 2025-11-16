"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

export default function OfferSection() {
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

  const offer = data[locale].offer;

  // === ESTILOS CARDS AZUL Y ANIMACION GLOW ===
  const cardGlow =
    realMode === "dark"
      ? "bg-[#181F31] border border-gray-700 shadow-[0_0_32px_0_rgba(30,64,175,0.45)] hover:shadow-[0_0_54px_6px_rgba(30,64,175,0.75)]"
      : "bg-white border border-gray-200 shadow-lg";

  const cardText =
    realMode === "dark"
      ? "text-white"
      : "text-black";

  return (
    <section className={`min-h-screen px-4 md:px-16 py-10 transition-colors duration-300 ${realMode === "dark" ? "bg-[#1b2337] text-white" : "bg-gray-50 text-blue-900"}`}>
      <h2 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${realMode === "dark" ? "text-white" : "text-black"}`}>
        {offer.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Por qué elegirme */}
        <div className={`rounded-2xl p-8 md:w-1/2 flex flex-col transition-all duration-200 hover:-translate-y-2 hover:scale-105 ${cardGlow} ${cardText}`}>
          <h3 className="text-xl font-bold mb-4">{offer.whyChoose.title}</h3>
          <ul className="mb-4 space-y-2 text-base">
            {offer.whyChoose.items.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="">{offer.whyChoose.description}</p>
        </div>

        {/* Tecnologías que domino */}
        <div className={`rounded-2xl p-8 md:w-1/2 flex flex-col transition-all duration-200 hover:-translate-y-2 hover:scale-105 ${cardGlow} ${cardText}`}>
          <h3 className="text-xl font-bold mb-4">{offer.skills.title}</h3>
          <p className="mb-3">{offer.skills.description}</p>
          <ul className="list-disc list-inside space-y-2">
            {offer.skills.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
