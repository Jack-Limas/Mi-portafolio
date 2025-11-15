"use client";
import { useState } from "react";
import { useThemeMode } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

export default function Navbar() {
  const { mode, setMode } = useThemeMode();
  const { locale, toggle, t } = useLocale();
  const [open, setOpen] = useState(false);

  const navBg = mode === "dark" ? "bg-[#13204c]" : "bg-[#1E40AF]";
  const navText = mode === "dark" ? "text-gray-100" : "text-white";
  const navBtn = mode === "dark" ? "bg-gray-100 text-[#1E40AF]" : "bg-white text-[#1E40AF]";

  return (
    <nav className={`w-full ${navBg} ${navText} shadow-md sticky top-0 left-0 z-50`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-bold">{t.site.title}</h1>

        {/* Desktop MENU */}
        <ul className="hidden lg:flex gap-4 text-base font-medium tracking-widest">
          <li><a href="#home" className="hover:opacity-80">{t.navbar.home}</a></li>
          <li><a href="#projects" className="hover:opacity-80">{t.navbar.projects}</a></li>
          <li><a href="#contact" className="hover:opacity-80">{t.navbar.contact}</a></li>
          <li><a href="#about" className="hover:opacity-80">{t.navbar.about}</a></li>
          <li><a href="#offer" className="hover:opacity-80">{t.navbar.offer}</a></li>
          <li><a href="#experience" className="hover:opacity-80">{t.navbar.experience}</a></li>
          <li><a href="#testimonials" className="hover:opacity-80">{t.navbar.testimonials}</a></li>
        </ul>
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="/cv.pdf" // Cambia por la ruta real de tu CV
            target="_blank"
            rel="noopener noreferrer"
            className={`${navBtn} px-2 py-1 rounded text-xs font-bold mr-2`}
          >
            {t.navbar.downloadCV}
          </a>
          <button onClick={toggle} className={`${navBtn} px-2 py-1 rounded text-xs font-bold`}>
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
        <ul className={`lg:hidden ${navBg} flex flex-col gap-4 px-6 py-4 ${navText} text-base font-medium tracking-wider`}>
          <li><a href="#home" onClick={() => setOpen(false)}>{t.navbar.home}</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>{t.navbar.projects}</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>{t.navbar.contact}</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>{t.navbar.about}</a></li>
          <li><a href="#offer" onClick={() => setOpen(false)}>{t.navbar.offer}</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)}>{t.navbar.experience}</a></li>
          <li><a href="#testimonials" onClick={() => setOpen(false)}>{t.navbar.testimonials}</a></li>
          <div className="flex items-center gap-2 mt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${navBtn} px-3 py-1 rounded font-bold text-xs`}
            >
              {t.navbar.downloadCV}
            </a>
            <button onClick={toggle} className={`${navBtn} px-3 py-1 rounded font-bold text-xs`}>
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
