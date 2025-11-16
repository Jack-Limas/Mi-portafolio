"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

export default function AboutSection() {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [mounted, setMounted] = useState(false);

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

  const about = (data as any)[locale].about;

  const sectionBg =
    realMode === "dark"
      ? "bg-slate-900 text-slate-100"
      : "bg-gray-50 text-slate-900";

  const hobbyCard = realMode === "dark"
    ? "bg-[#181f31] border border-gray-700 shadow-[0_0_32px_0_rgba(30,64,175,0.45)] hover:shadow-[0_0_54px_5px_rgba(30,64,175,0.7)]"
    : "bg-white border border-gray-200 shadow-lg";

  return (
    <section
      id="about"
      className={`py-16 md:py-18 transition-colors ${sectionBg}`}
    >
      <div className="w-full max-w-screen-2xl xl:px-10 md:px-8 px-4 mx-auto">
        {/* Titulo centrado */}
        <div className="mb-10 text-center">
          <h2 className={`text-3xl font-extrabold mb-6 ${realMode === "dark" ? "text-white" : "text-black"}`}>
            {about.title}
          </h2>
        </div>

        {/* Main content: super ancho */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-10">
          {/* Avatar aún más grande */}
          <div className="md:col-span-4 flex justify-center">
            <div className={`
              w-72 h-72 md:w-80 md:h-96 rounded-full overflow-hidden
              flex items-center justify-center bg-white transition-all duration-200
              ${realMode === "dark"
                ? "shadow-[0_0_42px_0_rgba(30,64,175,0.7)] border-4 border-[#23283a]"
                : "shadow-lg border-4 border-gray-200"}
            `}>
              <Image
                src={about.avatar}
                alt="Avatar"
                width={420}
                height={420}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Texto mucho más ancho */}
          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{about.title}</h3>
            <div className="space-y-4 leading-relaxed text-base text-center md:text-left">
              {about.bio.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-slate-200 dark:border-slate-700"></div>

        {/* Hobbies grid igual */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-6 text-center">{about.hobbiesTitle}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {about.hobbies.map((h: any) => (
              <article
                key={h.id}
                className={`rounded-lg p-4 flex flex-col gap-3 items-center transition-all duration-200 hover:-translate-y-2 hover:scale-105 ${hobbyCard}`}
              >
                <div className="w-full h-36 relative rounded-md overflow-hidden">
                  <Image src={h.image} alt={h.title} fill className="object-cover" />
                </div>
                <h5 className="font-semibold text-sm md:text-base text-center">{h.title}</h5>
                <p className={`text-xs md:text-sm text-center ${realMode === "dark" ? "text-slate-200" : "text-slate-700"}`}>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
