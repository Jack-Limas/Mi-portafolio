'use client';

import { Theme } from '../../../hooks/useTheme';

type ThemeToggleProps = {
  value: Theme;
  onChange: (theme: Theme) => void;
};

const icons = {
  light: '🌞',
  dark: '🌜',
  system: '💻'
};

export function ThemeToggle({ value, onChange }: ThemeToggleProps) {
  return (
    <div className="flex gap-2 items-center ml-2">
      {Object.entries(icons).map(([key, icon]) =>
        <button
          key={key}
          aria-label={`Switch to ${key} mode`}
          onClick={() => onChange(key as Theme)}
          className={`text-xl px-2 py-1 rounded ${value === key ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
          {icon}
        </button>
      )}
    </div>
  );
}
