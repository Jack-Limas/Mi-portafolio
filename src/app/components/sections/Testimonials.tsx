"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  quote: string;
  author: string;
  avatar: string;
};

type TestimonialsData = {
  title: string;
  intro: string;
  items: Testimonial[];
};

function getEffectiveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "system" && typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode === "dark" ? "dark" : "light";
}

const Testimonials = () => {
  const { locale } = useLocale();
  const { mode } = useThemeMode();
  const [realMode, setRealMode] = useState<"light" | "dark">(getEffectiveMode(mode));
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    function updateRealMode() { setRealMode(getEffectiveMode(mode)); }
    updateRealMode();
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", updateRealMode);
      return () => mq.removeEventListener("change", updateRealMode);
    }
  }, [mode]);
  if (!mounted) return null;

  const t = (data as { [key: string]: { testimonials: TestimonialsData } })[locale].testimonials;

  return (
    <section
      id="testimonials"
      className={`min-h-screen px-2 md:px-8 xl:px-20 py-16 transition-colors duration-300 ${
        realMode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto">
        <h2 className={`text-4xl font-extrabold text-center mb-4 ${realMode === "dark" ? "text-white" : "text-black"}`}>
          {t.title}
        </h2>
        <p className={`mb-12 text-lg text-center max-w-3xl mx-auto ${realMode === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {t.intro}
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, idx) => (
            <TestimonialCard key={idx} testimonial={item} realMode={realMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
