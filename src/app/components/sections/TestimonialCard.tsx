// src/components/sections/TestimonialCard.tsx
import Image from "next/image";
import type { Testimonial } from '../../data/types';


export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white dark:bg-[#081121] rounded-lg p-6 card-shadow">
      <div className="text-3xl text-gray-300">“</div>
      <p className="mt-2 text-sm text-[#0B1220] dark:text-gray-200">{t.text}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 relative rounded-full overflow-hidden bg-gray-100">
          {t.avatar && <Image src={t.avatar} alt={t.name} fill className="object-cover" />}
        </div>
        <div>
          <div className="font-semibold text-sm text-[#0B1220] dark:text-white">{t.name}</div>
          <div className="text-xs text-muted dark:text-gray-400">{t.role}</div>
        </div>
      </div>
    </article>
  );
}
