'use client';

import { useEffect, useState } from 'react';

type LanguageToggleProps = {
  onChange: (lang: 'en' | 'es') => void;
};

export function LanguageToggle({ onChange }: LanguageToggleProps) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Puedes autodetectar idioma en cliente aquí si gustas
    // const browserLang = window.navigator.language.startsWith('es') ? 'es' : 'en';
    // setLang(browserLang);
  }, []);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => { setLang('en'); onChange('en'); }}
        className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
        EN
      </button>
      <button
        onClick={() => { setLang('es'); onChange('es'); }}
        className={`px-2 py-1 rounded ${lang === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}>
        ES
      </button>
    </div>
  );
}
