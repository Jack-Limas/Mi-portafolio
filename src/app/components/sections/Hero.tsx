"use client";
import Image from "next/image";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";

export default function Hero() {
  const { locale } = useLocale();
  const content = (data as any)[locale] as AppData;
  const hero = content.hero;

  return (
    <section id="home" className="bg-[#0B1220] dark:bg-[#071122] text-white">
      <Container className="grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-2">
        <div>
          <h1 className="font-poppins text-3xl md:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-sm md:text-base text-gray-300">{hero.bio}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={hero.cta.projectsAnchor}
               className="rounded-xl bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-400">
              {locale === "en" ? "View projects" : "Ver proyectos"}
            </a>
            <a href={hero.cta.cv}
               className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10">
              {locale === "en" ? "Download CV" : "Descargar CV"}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2 text-xs text-gray-300">
            {hero.skills.map(s => (
              <li key={s} className="rounded-full border border-white/15 px-3 py-1">{s}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-60 w-60 overflow-hidden rounded-full ring-2 ring-teal-400/40 md:h-72 md:w-72">
            <Image src={hero.photo} alt={hero.name} fill className="object-cover" priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
