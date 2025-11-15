"use client";
import { useState } from "react";
import { useThemeMode } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";
import data from "@/app/data/data.json";

export default function Navbar() {
  const { mode, setMode } = useThemeMode();
  const { locale, toggle } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1E40AF] text-white shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>

        {/* Desktop MENU */}
        <ul className="hidden lg:flex gap-4 text-base font-medium tracking-widest">
          <li><a href="#home" className="hover:opacity-80">Inicio</a></li>
          <li><a href="#projects" className="hover:opacity-80">Proyectos</a></li>
          <li><a href="#contact" className="hover:opacity-80">Contacto</a></li>
          <li><a href="#about" className="hover:opacity-80">Acerca de mí</a></li>
          <li><a href="#offer" className="hover:opacity-80">Lo que ofrezco</a></li>
          <li><a href="#experience" className="hover:opacity-80">Experiencia</a></li>
          <li><a href="#testimonials" className="hover:opacity-80">Testimonios</a></li>
        </ul>
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggle}
            className="bg-white text-[#1E40AF] px-2 py-1 rounded text-xs font-bold"
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
        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <ul className="lg:hidden bg-[#1E40AF] flex flex-col gap-4 px-6 py-4 text-white text-base font-medium tracking-wider">
          <li><a href="#home" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contacto</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>Acerca de mí</a></li>
          <li><a href="#offer" onClick={() => setOpen(false)}>Lo que ofrezco</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>Experiencia</a></li>
          <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonios</a></li>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={toggle}
              className="bg-white text-[#1E40AF] px-3 py-1 rounded font-bold text-xs"
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
        </ul>
      )}
    </nav>
  );
}
