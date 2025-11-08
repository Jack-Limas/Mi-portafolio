"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/app/data/types";

type LocaleContextType = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  toggle: () => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved === "en" || saved === "es") return saved;
    }
    return "es"; // ✅ IDIOMA POR DEFECTO = ESPAÑOL
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggle = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggle }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
