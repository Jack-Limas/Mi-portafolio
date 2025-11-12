"use client";

import React, { useEffect, useState } from "react";
import data from "@/app/data/data.json";
import { useLocale } from "@/hooks/useLocale";
import { useThemeMode } from "@/hooks/useTheme";
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

const Testimonials = () => {
  const { locale } = useLocale();
  const { mode } = useThemeMode();

  // Protección hydration error:
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const t = (data as { [key: string]: { testimonials: TestimonialsData } })[locale].testimonials;

  return (
    <section
      id="testimonials"
      className={`min-h-screen px-6 md:px-16 py-16 transition-colors duration-300 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2D7A]">{t.title}</h2>
        <p className={`mb-10 text-lg text-center ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.intro}</p>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {t.items.map((item, idx) => (
            <TestimonialCard key={idx} testimonial={item} mode={mode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
