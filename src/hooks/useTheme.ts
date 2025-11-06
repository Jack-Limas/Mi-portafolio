'use client';
import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export default function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>('system');

  // Solo al montar: carga el tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Aplica el tema en cada cambio
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (theme === 'system') {
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [
    theme,
    (newTheme: Theme) => setTheme(newTheme)
  ];
}
