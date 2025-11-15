"use client";
import { useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import ThemeToggle from "../common/ThemeToggle";

export default function Navbar() {
  const { locale, toggle, t } = useLocale();
  const [open, setOpen] = useState(false);

  const navBg = "bg-[#1E40AF] dark:bg-[#13204c]";
  const navText = "text-white dark:text-gray-100";
  const navBtn = "bg-white text-[#1E40AF] dark:bg-gray-100 dark:text-[#1E40AF]";

  return (  
    <nav className={`w-full ${navBg} ${navText} shadow-md sticky top-0 left-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-4">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap flex-shrink-0">
          {t.site.title}
        </h1>
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex flex-1 gap-7 text-base font-semibold tracking-wide ml-7">
          <li><a href="#home" className="hover:opacity-80">{t.navbar.home}</a></li>
          <li><a href="#projects" className="hover:opacity-80">{t.navbar.projects}</a></li>
          <li><a href="#contact" className="hover:opacity-80">{t.navbar.contact}</a></li>
          <li><a href="#about" className="hover:opacity-80 whitespace-nowrap">{t.navbar.about}</a></li>
          <li><a href="#offer" className="hover:opacity-80 whitespace-nowrap">{t.navbar.offer}</a></li>
          <li><a href="#experience" className="hover:opacity-80">{t.navbar.experience}</a></li>
          <li><a href="#testimonials" className="hover:opacity-80">{t.navbar.testimonials}</a></li>
        </ul>
        {/* BARRA BOTONES DERECHA EN DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 ml-8">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${navBtn} px-8 py-2 rounded font-bold text-xs transition whitespace-nowrap`}
          >
            {t.navbar. downloadCV}
          </a>
          <button
            onClick={toggle}
            className={`${navBtn} px-3 py-2 rounded font-bold text-xs transition `}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <ThemeToggle />
        </div>
        {/* HAMBURGUER EN MOBILE: SIEMPRE A LA DERECHA */}
        <button
          className="lg:hidden text-3xl flex-shrink-0"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
      </div>
      {/* MOBILE MENU - igual que antes */}
      {open && (
        <div className={`lg:hidden ${navBg} ${navText} px-6 py-5`}>
          <ul className="flex flex-col gap-4 text-base font-semibold tracking-wide mb-6">
            <li><a href="#home" onClick={() => setOpen(false)}>{t.navbar.home}</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>{t.navbar.projects}</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>{t.navbar.contact}</a></li>
            <li><a href="#about" className="whitespace-nowrap" onClick={() => setOpen(false)}>{t.navbar.about}</a></li>
            <li><a href="#offer" className="whitespace-nowrap" onClick={() => setOpen(false)}>{t.navbar.offer}</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>{t.navbar.experience}</a></li>
            <li><a href="#testimonials" onClick={() => setOpen(false)}>{t.navbar.testimonials}</a></li>
          </ul>
          <div className="flex gap-2 items-center flex-wrap">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${navBtn} px-2 py-1 rounded font-bold text-xs transition`}
              style={{ minWidth: "90px", textAlign: "center" }}
            >
              {t.navbar.downloadCV}
            </a>
            <button
              onClick={toggle}
              className={`${navBtn} px-2 py-1 rounded font-bold text-xs transition`}
              style={{ minWidth: "45px", textAlign: "center" }}
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
