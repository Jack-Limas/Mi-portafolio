"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";
import Image from "next/image";

type FooterData = {
  aboutTitle: string;
  aboutMe: string;
  email: string;
  phone: string;
  copyright: string;
  social: {
    whatsapp: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
};

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

const Footer = () => {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

  if (!mounted) return null;

  const t = (data as { [key: string]: { footer: FooterData } })[locale].footer;

  const footerBg =
    realMode === "dark"
      ? "bg-[#151a31] text-slate-200"
      : "bg-[#1E40AF] text-white";

  const cardGlow =
    realMode === "dark"
      ? "bg-[#232e59]/70 border border-blue-950 shadow-[0_0_18px_0_rgba(30,64,175,0.36)] hover:shadow-[0_0_34px_6px_rgba(30,64,175,0.68)]"
      : "bg-white/90 text-black border border-blue-200 shadow-md hover:shadow-[0_0_32px_5px_rgba(30,64,175,0.5)]";

  const iconBg =
    realMode === "dark"
      ? "hover:shadow-[0_0_16px_0_rgba(30,64,175,0.65)] hover:bg-[#222f5b]/70"
      : "hover:shadow-[0_0_18px_0_rgba(30,64,175,0.20)] hover:bg-[#183fae]/20";

  return (
    <footer className={`w-full pt-8 pb-3 transition-colors duration-300 ${footerBg}`}>
      {/* Contenedor más ancho con mejor balance */}
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-stretch gap-8 px-6 lg:px-16">
        
        {/* Card: Sobre mí */}
        <div
          className={`
            flex-[1.2] min-w-[320px]
            rounded-2xl px-8 py-6 mb-4 md:mb-0
            transition-all duration-300 cursor-pointer
            ${cardGlow}
            hover:-translate-y-2
          `}
          tabIndex={0}
        >
          <div className="font-bold text-lg mb-3">{t.aboutTitle}</div>
          <div className="text-base leading-relaxed">{t.aboutMe}</div>
        </div>

        {/* Info y Redes */}
        <div className="flex-[1] flex flex-col justify-center items-center md:items-end gap-6">
          {/* Contacto */}
          <div className="flex flex-col md:items-end gap-3 text-base">
            <div className="flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span className="font-medium">{t.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="font-medium">{t.phone}</span>
            </div>
          </div>
          
          {/* Redes sociales */}
          <div className="flex gap-6 mt-2">
            <a href={t.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className={`rounded-full p-1 transition-all duration-200 ${iconBg} hover:-translate-y-2 hover:scale-110`}>
              <Image src="/images/whatsapp.webp" alt="WhatsApp" width={42} height={42} className="rounded-full" />
            </a>
            <a href={t.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className={`rounded-full p-1 transition-all duration-200 ${iconBg} hover:-translate-y-2 hover:scale-110`}>
              <Image src="/images/github.png" alt="GitHub" width={42} height={42} className="rounded-full" />
            </a>
            <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className={`rounded-full p-1 transition-all duration-200 ${iconBg} hover:-translate-y-2 hover:scale-110`}>
              <Image src="/images/linkedin.png" alt="LinkedIn" width={42} height={42} className="rounded-full" />
            </a>
            <a href={t.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className={`rounded-full p-1 transition-all duration-200 ${iconBg} hover:-translate-y-2 hover:scale-110`}>
              <Image src="/images/Instagram.webp" alt="Instagram" width={42} height={42} className="rounded-full" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-6 text-xs opacity-75">{t.copyright}</div>
    </footer>
  );
};

export default Footer;
