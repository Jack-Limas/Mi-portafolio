// src/app/components/sections/About.tsx
"use client";

import React from "react";
import Image from "next/image";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";


export default function AboutSection() {
  const { locale } = useLocale(); // debe devolver 'es' | 'en'
  const { mode } = useThemeMode();
  // 'light'|'dark'|'system' (usamos para clases)
  const about = (data as any)[locale].about;

  return (
    <section
      id="about"
      className={`py-8 md:py-16 transition-colors ${mode === "dark" ? "bg-slate-900 text-slate-100" : "bg-gray-50 text-slate-900"}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Blue header bar like Figma */}
        <div className="mb-6">
          <div className="bg-[#1E40AF] text-white rounded-sm px-4 py-3 md:py-4">
            <h2 className="text-xl md:text-2xl font-extrabold"> {about.title} </h2>
          </div>
        </div>

        {/* Main content: avatar + paragraphs */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* Avatar column */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-[#1E40AF] bg-white">
              <Image
                src={about.avatar}
                alt="Avatar"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-9">
            <h3 className="text-2xl font-bold mb-4">{about.title}</h3>
            <div className="space-y-4 text-justify leading-relaxed text-sm md:text-base">
              {about.bio.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-slate-200 dark:border-slate-700"></div>

        {/* Hobbies grid */}
        <div>
          <h4 className="text-lg md:text-xl font-semibold mb-4">{about.hobbiesTitle}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {about.hobbies.map((h: any) => (
              <article
                key={h.id}
                className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 flex flex-col gap-3 transition-transform transform hover:-translate-y-1`}
              >
                <div className="w-full h-36 relative rounded-md overflow-hidden">
                  <Image src={h.image} alt={h.title} fill className="object-cover" />
                </div>
                <h5 className="font-semibold text-sm md:text-base">{h.title}</h5>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
