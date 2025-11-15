"use client";
import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";
import ProjectCard from "./ProjectCard";

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

export default function Projects() {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function updateRealMode() { setRealMode(getEffectiveMode(mode)); }
    updateRealMode();
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateRealMode);
      return () => mq.removeEventListener("change", updateRealMode);
    }
  }, [mode]);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { title, subtitle, items } = data[locale].projects;

  // Fondo general
  const sectionBg =
    realMode === "dark"
      ? "bg-[#1B2337] text-white"
      : "bg-gray-50 text-black";

  // Título y subtítulo
  const titleClass = "text-3xl font-extrabold mb-1 " + (realMode === "dark" ? "text-white" : "text-black");
  const subtitleClass = (realMode === "dark" ? "text-gray-300" : "text-gray-700") + " mb-2";

  return (
    <section id="projects" className={`px-6 md:px-16 lg:px-24 py-16 ${sectionBg} transition-colors duration-300`}>
      {/* TITULO Y SUBTÍTULO CENTRADOS */}
      <div className="text-center mb-2">
        <h2 className={titleClass}>{title}</h2>
        <p className={subtitleClass}>{subtitle}</p>
      </div>
      {/* GRID — WEB */}
      <div className="hidden md:grid grid-cols-3 gap-10 mt-10">
        {items.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            demo={p.demo}
            realMode={realMode}
          />
        ))}
      </div>
      {/* MOBILE — STACK */}
      <div className="md:hidden flex flex-col items-center gap-10 mt-10">
        {items.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            demo={p.demo}
            realMode={realMode}
          />
        ))}
      </div>
    </section>
  );
}
