"use client";
import Container from "../ui/Container";
import data from "@/app/data/data.json";
import type { AppData } from "@/app/data/types";
import { useLocale } from "@/hooks/useLocale";


export default function Footer() {
  const { locale } = useLocale();
  const d = (data as any)[locale] as AppData;

  return (
    <footer className="mt-16 bg-[#0F172A] text-white">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* why choose me */}
          <div>
            <h4 className="font-semibold">Why choose me?</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>🚀 Fast, practical solutions</li>
              <li> 🤝 Team player & reliable</li>
              <li> ✨ Creative & detail-oriented</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="font-semibold">{locale === "en" ? "Contact" : "Contacto"}</h4>
            <p className="mt-3 text-sm text-gray-300">
              <a className="hover:underline" href={`mailto:${d.contact.email}`}>{d.contact.email}</a><br />
              <a className="hover:underline" href={`tel:${d.contact.phone}`}>{d.contact.phone}</a>
            </p>
          </div>

          {/* social */}
          <div>
            <h4 className="font-semibold">{locale === "en" ? "Social" : "Redes"}</h4>
            <div className="mt-3 flex gap-4 text-sm text-gray-300">
              <a href={d.contact.social.github} target="_blank">GitHub</a>
              <a href={d.contact.social.linkedin} target="_blank">LinkedIn</a>
              <a href={d.contact.social.instagram} target="_blank">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          {d.footer.copy}
        </div>
      </Container>
    </footer>
  );
}
