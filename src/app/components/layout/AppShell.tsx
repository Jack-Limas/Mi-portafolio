'use client';

import { ThemeToggle } from '@/app/components/common/ThemeToggle';
import { LanguageToggle } from '@/app/components/common/LanguageToggle';
import Navbar from '@/app/components/layout/Navbar';
import { ReactNode, useState } from 'react';

export default function AppShell({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full shadow-md sticky top-0 z-10 bg-blue-700 text-white">
        <Navbar {...({ menuOpen, setMenuOpen } as any)} />
        <div className="flex justify-end gap-4 px-4 py-1 items-center">
          <LanguageToggle onChange={(lang) => setLang(lang as "en" | "es")} />
          <ThemeToggle value={theme} onChange={(t) => setTheme(t as "light" | "dark" | "system")} />

        </div>
      </header>
      <main className="px-4 py-6">{children}</main>
    </>
  );
}
