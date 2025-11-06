import React from 'react';
import data from '@/app/data/data.json';

export default function Footer() {
  const footer = data.footer;

  return (
    <footer className="w-full bg-blue-700 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex-1">
          <p className="font-semibold mb-2">{footer.about}</p>
          <div className="flex gap-4 items-center text-sm">
            <span className="flex items-center gap-1">
              📧 <a href={`mailto:${footer.contact.email}`} className="underline">{footer.contact.email}</a>
            </span>
            <span className="flex items-center gap-1">
              📱 <a href={`tel:${footer.contact.phone}`} className="underline">{footer.contact.phone}</a>
            </span>
          </div>
        </div>
        <div className="flex gap-4 mb-2 md:mb-0">
          {footer.socials.map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={soc.name}
              className="p-2 rounded bg-white hover:bg-primary transition"
            >
              <img src={soc.icon} alt={soc.name} className="w-8 h-8"/>
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-2 text-xs opacity-80">
        {footer.copyright}
      </div>
    </footer>
  );
}
