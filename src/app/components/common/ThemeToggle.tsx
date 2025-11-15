"use client";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

const modeIcons = {
  light: "☀️",
  dark: "🌙",
  system: "🖥️" // puedes usar otro emoji/Icon si prefieres
};

export default function ThemeToggle() {
  const { mode, setMode } = useThemeMode();

  return (
    <div className="flex gap-1 items-center">
      {(["light", "dark", "system"] as ThemeMode[]).map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`rounded-xl border px-3 py-1 text-xs font-medium
            ${mode === m ? "bg-blue-700 text-white" : "bg-white dark:bg-gray-800 text-[#1E40AF] dark:text-gray-200"}
            hover:bg-gray-100 dark:hover:bg-gray-700 transition`}
          aria-label={`Cambiar a ${m}`}
          title={`Modo: ${m}`}
        >
          {modeIcons[m]}
        </button>
      ))}
    </div>
  );
}
