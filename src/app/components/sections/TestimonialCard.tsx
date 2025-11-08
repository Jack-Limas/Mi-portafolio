import Image from "next/image";

export default function TestimonialCard({ t }: { t: { name: string; role: string; avatar: string; text: string } }) {
  return (
    <article className="rounded-2xl border p-6 shadow-sm dark:border-white/10">
      <div className="text-4xl text-gray-300">“</div>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{t.text}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src={t.avatar} alt={t.name} fill className="object-cover" />
        </div>
        <div>
          <div className="text-sm font-medium">{t.name}</div>
          <div className="text-xs text-gray-500">{t.role}</div>
        </div>
      </div>
    </article>
  );
}
