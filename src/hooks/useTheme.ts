"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";
type Ctx = { mode: ThemeMode; setMode: (m: ThemeMode) => void };

const ThemeCtx = createContext<Ctx | null>(null) as React.Context<Ctx>;

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = mode === "dark" || (mode === "system" && prefersDark);
  root.classList.toggle("dark", isDark);
  root.setAttribute("data-theme", mode); // opcional: si usas data-theme para algún css
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(
    (typeof window !== "undefined" &&
      (localStorage.getItem("theme") as ThemeMode)) || "system"
  );

  useEffect(() => {
    function updateTheme() {
      // Toma último valor (importante si hay cambio de system)
      const stored = localStorage.getItem("theme") as ThemeMode | null;
      let effectiveMode = mode;
      if (stored === "system" || (!stored && mode === "system")) {
        const q = window.matchMedia("(prefers-color-scheme: dark)");
        effectiveMode = q.matches ? "dark" : "light";
      }
      applyTheme(effectiveMode);
    }
    updateTheme();
    localStorage.setItem("theme", mode);

    let mq: MediaQueryList | null = null;
    if (mode === "system") {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateTheme);
    }
    return () => {
      mq?.removeEventListener("change", updateTheme);
    };
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return React.createElement(ThemeCtx.Provider, { value }, children);
}

export function useThemeMode() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useThemeMode must be used inside ThemeProvider");
  return ctx;
}
