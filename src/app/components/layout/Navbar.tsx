"use client";
import Link from "next/link";
import Container from "../ui/Container";
import LanguageToggle from "../common/LanguageToggle";
import ThemeToggle from "../common/ThemeToggle";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";

export default function Navbar() {
  const { locale } = useLocale();
  const d = data[locale];

  const nav = [
    { href: "#home", label: locale === "en" ? "Home" : "Inicio" },
    { href: "#about", label: locale === "en" ? "About" : "Acerca" },
    { href: "#projects", label: locale === "en" ? "Projects" : "Proyectos" },
    { href: "#experience", label: locale === "en" ? "Experience" : "Experiencia" },
    { href: "#testimonials", label: locale === "en" ? "Testimonials" : "Testimonios" },
    { href: "#contact", label: locale === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-[#0B1220]/80">
      <Container className="flex items-center justify-between py-3">
        <Link href="#home" className="font-semibold">
          {d.site.title}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
