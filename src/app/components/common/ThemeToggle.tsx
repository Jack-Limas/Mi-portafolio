"use client";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { mode, setMode } = useThemeMode();
  const next: ThemeMode = mode === "light" ? "dark" : mode === "dark" ? "system" : "light";
  const label = mode === "light" ? "☀️" : mode === "dark" ? "🌙" : "🖥️";

  return (
    <button
      onClick={() => setMode(next)}
      className="rounded-xl border px-3 py-1 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
      title={`Theme: ${mode}`}
    >
      {label}
    </button>
  );
}
