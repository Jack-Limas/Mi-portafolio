"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";
import ThemeToggle from "../common/ThemeToggle";

// Devuelve 'dark' o 'light' según preferencia y sistema actual
function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

export default function Navbar() {
  const { locale, toggle, t } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function updateRealMode() {
      setRealMode(getEffectiveMode(mode));
    }
    updateRealMode();
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateRealMode);
      return () => mq.removeEventListener("change", updateRealMode);
    }
  }, [mode]);

  // Clases controladas por realMode (NO Tailwind dark:...)
  const navBg = realMode === "dark" ? "bg-[#13204c] text-gray-100" : "bg-[#1E40AF] text-white";
  const navBtn =
    realMode === "dark"
      ? "bg-gray-100 text-[#1E40AF]"
      : "bg-white text-[#1E40AF]";

  return (
    <nav className={`w-full ${navBg} shadow-md sticky top-0 left-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-4">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-tight whitespace-nowrap flex-shrink-0">
          {t.site.title}
        </h1>
        {/* MENÚ DESKTOP */}
        <ul className="hidden lg:flex flex-1 gap-7 text-base font-semibold tracking-wide ml-7">
          <li><a href="#home" className="hover:opacity-80">{t.navbar.home}</a></li>
          <li><a href="#projects" className="hover:opacity-80">{t.navbar.projects}</a></li>
          <li><a href="#contact" className="hover:opacity-80">{t.navbar.contact}</a></li>
          <li><a href="#about" className="hover:opacity-80 whitespace-nowrap">{t.navbar.about}</a></li>
          <li><a href="#offer" className="hover:opacity-80 whitespace-nowrap">{t.navbar.offer}</a></li>
          <li><a href="#experience" className="hover:opacity-80">{t.navbar.experience}</a></li>
          <li><a href="#testimonials" className="hover:opacity-80">{t.navbar.testimonials}</a></li>
        </ul>
        {/* BOTONES DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 ml-8">
          <a
            href="/docs/Jack_Limas_CV_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${navBtn} px-8 py-2 rounded font-bold text-xs transition whitespace-nowrap`}
          >
            {t.navbar.downloadCV}
          </a>
          <button
            onClick={toggle}
            className={`${navBtn} px-3 py-2 rounded font-bold text-xs transition`}
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <ThemeToggle />
        </div>
        {/* BUTTON HAMBURGER MOBILE */}
        <button
          className="lg:hidden text-3xl flex-shrink-0"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
      </div>
      {/* MOBILE MENU */}
      {open && (
        <div className={`lg:hidden ${navBg} px-6 py-5`}>
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
