"use client";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";
import Container from "../ui/Container";

export default function Contact() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <section id="contact" className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold">{locale === "en" ? "Contact" : "Contacto"}</h2>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border p-6 dark:border-white/10">
            <h3 className="font-medium">{locale === "en" ? "Write me" : "Escríbeme"}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              <a className="hover:underline" href={`mailto:${d.contact.email}`}>{d.contact.email}</a><br />
              <a className="hover:underline" href={`tel:${d.contact.phone}`}>{d.contact.phone}</a>
            </p>
          </div>
          <div className="rounded-2xl border p-6 dark:border-white/10">
            <h3 className="font-medium">{locale === "en" ? "Social" : "Redes"}</h3>
            <div className="mt-3 flex gap-4 text-sm">
              <a className="hover:underline" href={d.contact.social.github} target="_blank">GitHub</a>
              <a className="hover:underline" href={d.contact.social.linkedin} target="_blank">LinkedIn</a>
              <a className="hover:underline" href={d.contact.social.instagram} target="_blank">Instagram</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
