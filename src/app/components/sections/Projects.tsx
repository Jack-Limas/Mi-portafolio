"use client";

import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { locale } = useLocale();
  const { title, subtitle, items } = data[locale].projects;
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-16">
      {/* TITULO */}
      <h2 className="text-3xl font-bold text-[#1E40AF]">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>

      {/* GRID — WEB */}
      <div className="hidden md:grid grid-cols-3 gap-10 mt-10">
        {items.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            image={p.image}
            demo={p.demo}
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
          />
        ))}
      </div>
    </section>
  );
}
