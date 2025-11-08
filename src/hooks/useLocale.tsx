"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/app/data/types";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; toggle: () => void };
const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>((() => (typeof window !== "undefined" &&
      (localStorage.getItem("locale") as Locale)) || "en") as unknown as Locale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleCtx.Provider value={{ locale, setLocale, toggle: () => setLocale(l => (l === "en" ? "es" : "en")) }}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
