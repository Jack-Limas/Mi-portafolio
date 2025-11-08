"use client";

import { useState } from "react";
import Link from "next/link";
import { useThemeMode } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";
import data from "@/app/data/data.json";

export default function Navbar() {
  const { mode, setMode } = useThemeMode(); // <-- nombres correctos
  const { locale, toggle } = useLocale();

  const t = data[locale]; // texto según idioma
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1E40AF] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* --- LOGO --- */}
        <h1 className="text-xl font-bold">Mi Portafolio</h1>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex gap-6 text-sm tracking-widest">
          <li><a href="#home" className="hover:opacity-80">Inicio</a></li>
          <li><a href="#projects" className="hover:opacity-80">Proyectos</a></li>
          <li><a href="#contact" className="hover:opacity-80">Contacto</a></li>
          <li><a href="#about" className="hover:opacity-80">Acerca de mí</a></li>
          <li><a href="#offer" className="hover:opacity-80">Lo que ofrezco</a></li>
          <li><a href="#experience" className="hover:opacity-80">Experiencia</a></li>
          <li><a href="#testimonials" className="hover:opacity-80">Testimonios</a></li>
        </ul>

        {/* --- BOTONES (IDIOMA + TEMA) --- */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggle}
            className="bg-white text-black px-2 py-1 rounded-md text-xs font-semibold"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="text-xl"
          >
            {mode === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {open && (
        <ul className="md:hidden bg-[#1E40AF] flex flex-col gap-4 px-6 py-4 text-white text-base">
          <a href="#home">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <a href="#about">Acerca de mí</a>
          <a href="#offer">Lo que ofrezco</a>
          <a href="#experience">Experiencia</a>
          <a href="#testimonials">Testimonios</a>

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={toggle}
              className="bg-white text-black px-3 py-1 rounded-md"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="text-2xl"
            >
              {mode === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}
