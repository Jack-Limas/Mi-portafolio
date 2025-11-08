"use client";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";
import Grid from "../ui/Grid";

export default function About() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <section id="about" className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold">{locale === "en" ? "About me" : "Acerca de mí"}</h2>
        <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">{d.about.short}</p>

        <Grid className="mt-8">
          {d.about.hobbies.map(h => (
            <div key={h.title} className="rounded-2xl border p-5 shadow-sm dark:border-white/10">
              <h3 className="font-medium">{h.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{h.text}</p>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
