"use client";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";

export default function Offer() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <section className="bg-gray-50 py-14 dark:bg-[#0B1220]/50">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">
            {locale === "en" ? "Why choose me?" : "¿Por qué elegirme?"}
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>🚀 {locale === "en" ? "Fast, practical solutions" : "Soluciones rápidas y prácticas"}</li>
            <li>🤝 {locale === "en" ? "Team player & reliable" : "Trabajo en equipo y confiable"}</li>
            <li>✨ {locale === "en" ? "Creative & detail-oriented" : "Creativo y detallista"}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{locale === "en" ? "Tech I use" : "Tecnologías que domino"}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {d.hero.skills.map(s => (
              <span key={s} className="rounded-xl border px-3 py-1 text-sm dark:border-white/15">{s}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
