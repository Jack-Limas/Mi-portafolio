"use client";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <section id="projects" className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold">{locale === "en" ? "My Projects" : "Mis Proyectos"}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {locale === "en" ? "Some work and practice that reflects my learning." : "Trabajos y prácticas que reflejan mi aprendizaje."}
        </p>

        <Grid className="mt-8">
          {d.projects.map(p => <ProjectCard key={p.id} p={p} />)}
        </Grid>
      </Container>
    </section>
  );
}
