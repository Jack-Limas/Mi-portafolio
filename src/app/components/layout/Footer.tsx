"use client";

import React from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";

type FooterData = {
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
  const t = (data as { [key: string]: { footer: FooterData } })[locale].footer;

  return (
    <footer
      className={`mt-10 px-0 pt-10 pb-4 w-full transition-colors duration-300 ${
        mode === "dark" ? "bg-[#16213E] text-gray-200" : "bg-[#1830A0] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-6">
        <div className="flex-1 text-sm mb-5 md:mb-0">
          <strong>Sobre mi</strong>
          <div>{t.aboutMe}</div>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-sm md:items-end">
          <div>
            <span>{t.email}</span>
            <br />
            <span>{t.phone}</span>
          </div>
          <div className="flex gap-3 mt-2">
            <a href={t.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="/icons/whatsapp.svg" className="w-6 h-6" />
            </a>
            <a href={t.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" className="w-6 h-6" />
            </a>
            <a href={t.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/icons/linkedin.svg" className="w-6 h-6" />
            </a>
            <a href={t.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/icons/instagram.svg" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 text-xs opacity-70">{t.copyright}</div>
    </footer>
  );
};

export default Footer;
