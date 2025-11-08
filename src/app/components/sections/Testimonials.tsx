"use client";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <section id="testimonials" className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold">{locale === "en" ? "Testimonials" : "Testimonios"}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {locale === "en"
            ? "Words from people I’ve worked and learned with."
            : "Palabras de personas con quienes he trabajado y aprendido."}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {d.testimonials.map(t => <TestimonialCard key={t.id} t={t} />)}
        </div>
      </Container>
    </section>
  );
}
