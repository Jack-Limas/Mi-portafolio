"use client";
import { useLocale } from "@/hooks/useLocale";

export default function LanguageToggle() {
  const { locale, toggle } = useLocale();
  return (
    <button
      onClick={toggle}
      className="rounded-xl border px-3 py-1 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle language"
      title="Language"
    >
      {locale.toUpperCase()}
    </button>
  );
}
