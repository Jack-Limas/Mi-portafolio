"use client";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";

export default function Experience() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <section id="experience" className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold">{locale === "en" ? "Experience" : "Experiencia"}</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {d.experience.map((e, i) => (
            <div key={i} className="rounded-2xl border p-5 dark:border-white/10">
              <div className="text-xs text-gray-500">{e.year}</div>
              <div className="mt-1 font-medium">{e.title}</div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{e.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
