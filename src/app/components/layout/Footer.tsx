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

const Footer = () => {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const t = (data as { [key: string]: { footer: FooterData } })[locale].footer;

  // Colores y glow dinámicos
  const footerBg =
    mode === "dark"
      ? "bg-[#151a31] text-slate-200"
      : "bg-[#1E40AF] text-white";

  // Card "sobre mí" grande y saltando en hover
  const cardGlow =
    mode === "dark"
      ? "bg-[#232e59]/70 border border-blue-950 shadow-[0_0_18px_0_rgba(30,64,175,0.36)] hover:shadow-[0_0_34px_6px_rgba(30,64,175,0.68)]"
      : "bg-white/80 text-black border border-blue-200 shadow-md hover:shadow-[0_0_32px_5px_rgba(30,64,175,0.8)]";

  // Glow para iconos
  const iconBg =
    mode === "dark"
      ? "hover:shadow-[0_0_16px_0_rgba(30,64,175,0.65)] hover:bg-[#222f5b]/40"
      : "hover:shadow-[0_0_18px_0_rgba(30,64,175,0.34)] hover:bg-[#183fae]/10";

  return (
    <footer className={`w-full mt-10 pt-8 pb-2 transition-colors duration-300 ${footerBg}`}>
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-5 px-2 md:px-12">
        {/* Sobre mí grande alineado izquierda, saltando */}
        <div
          className={`
            flex-1 min-w-[260px] max-w-[60vw] 
            rounded-2xl px-8 py-5 my-auto mb-1 md:mb-0
            transition-all duration-300
            ${cardGlow}
            cursor-pointer
            hover:-translate-y-2
          `}
          tabIndex={0}
        >
          <div className="font-bold text-lg mb-2">{t.aboutTitle}</div>
          <div className="text-base leading-relaxed">{t.aboutMe}</div>
        </div>
        {/* Info y redes compactas a la derecha */}
        <div className="flex flex-col justify-between items-center md:items-end w-full md:w-96 gap-1">
          <div className="flex flex-col md:items-end gap-1 mb-2">
            <div className="flex items-center gap-2 text-[1rem]">
              <span>📧</span>
              <span>{t.email}</span>
            </div>
            <div className="flex items-center gap-2 text-[1rem]">
              <span>📞</span>
              <span>{t.phone}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-1 mb-2">
            <a href={t.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/whatsapp.webp" alt="WhatsApp" width={37} height={37} className="rounded-full" />
            </a>
            <a href={t.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/github.png" alt="GitHub" width={37} height={37} className="rounded-full" />
            </a>
            <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/linkedin.png" alt="LinkedIn" width={37} height={37} className="rounded-full" />
            </a>
            <a href={t.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/Instagram.webp" alt="Instagram" width={37} height={37} className="rounded-full" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-xs opacity-75">{t.copyright}</div>
    </footer>
  );
};

export default Footer;
