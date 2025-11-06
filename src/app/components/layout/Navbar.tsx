'use client';

import React from 'react';

const SECTIONS = [
  { label: "Home", link: "#home" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
  { label: "About Me", link: "#about" },
  { label: "What I Offer", link: "#offer" },
  { label: "Experience", link: "#experience" },
  { label: "Testimonials", link: "#testimonials" }
];

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  // Usa menuOpen y setMenuOpen donde lo necesites, aquí van de ejemplo:
  return (
    <nav className="flex flex-wrap justify-center gap-4 text-base md:text-lg font-medium py-4">
      {SECTIONS.map((sec, i) => (
        <a
          key={i}
          href={sec.link}
          className="hover:underline underline-offset-4 px-2 transition-colors"
        >{sec.label}</a>
      ))}
      {/* Ejemplo botón menú móvil:
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "Cerrar menú" : "Abrir menú"}
      </button>
      */}
    </nav>
  );
}
