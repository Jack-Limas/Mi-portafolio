"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/app/data/types";
import data from "@/app/data/data.json";

type LocaleContextType = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  toggle: () => void;
  t: typeof data["es"]; // Esta línea es la clave
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved === "en" || saved === "es") return saved;
    }
    return "es";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggle = () => setLocale(locale === "es" ? "en" : "es");

  // El objeto de idioma actual
  const t = data[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
