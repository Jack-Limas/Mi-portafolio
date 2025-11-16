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

  const footerBg =
    mode === "dark"
      ? "bg-[#151a31] text-slate-200"
      : "bg-[#1E40AF] text-white";

  const cardGlow =
    mode === "dark"
      ? "bg-[#232e59]/60 border border-blue-950 shadow-[0_0_18px_0_rgba(30,64,175,0.36)] hover:shadow-[0_0_34px_6px_rgba(30,64,175,0.68)]"
      : "bg-white/80 text-black border border-blue-200 shadow-md hover:shadow-[0_0_32px_5px_rgba(30,64,175,0.5)]";

  const iconBg =
    mode === "dark"
      ? "hover:shadow-[0_0_16px_0_rgba(30,64,175,0.65)] hover:bg-[#222f5b]/50"
      : "hover:shadow-[0_0_18px_0_rgba(30,64,175,0.17)] hover:bg-[#183fae]/10";

  return (
    <footer className={`w-full mt-10 pt-8 pb-2 transition-colors duration-300 ${footerBg}`}>
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6 md:gap-0 px-4 md:px-12">
        {/* Card: Sobre mí */}
        <div
          className={`
            w-full md:max-w-[60vw]
            rounded-2xl px-6 py-5 mb-2 md:mb-0
            mx-auto md:mx-0
            ${cardGlow}
            transition-all duration-300 cursor-pointer
            hover:-translate-y-2
          `}
          style={{ minWidth: 250 }}
          tabIndex={0}
        >
          <div className="font-bold text-lg mb-2">{t.aboutTitle}</div>
          <div className="text-base leading-relaxed">{t.aboutMe}</div>
        </div>
        {/* Block right: contact/rede */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-3 justify-between w-full">
          {/* Contacto */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-2 text-[1rem] break-all">
              <span>📧</span>
              <span>{t.email}</span>
            </div>
            <div className="flex items-center gap-2 text-[1rem]">
              <span>📞</span>
              <span>{t.phone}</span>
            </div>
          </div>
          {/* Redes sociales */}
          <div className="flex gap-5 mt-2 mb-2 justify-center">
            <a href={t.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/whatsapp.webp" alt="WhatsApp" width={38} height={38} className="rounded-full" />
            </a>
            <a href={t.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/github.png" alt="GitHub" width={38} height={38} className="rounded-full" />
            </a>
            <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/linkedin.png" alt="LinkedIn" width={38} height={38} className="rounded-full" />
            </a>
            <a href={t.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className={`rounded-full p-[2px] transition-all duration-200 ${iconBg} hover:-translate-y-2`}>
              <Image src="/images/Instagram.webp" alt="Instagram" width={38} height={38} className="rounded-full" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 text-xs opacity-75">{t.copyright}</div>
    </footer>
  );
};

export default Footer;
