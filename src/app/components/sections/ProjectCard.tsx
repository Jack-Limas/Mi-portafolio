import Image from "next/image";

export default function ProjectCard({ p }: { p: {
  title: string; description: string; image: string; tags: string[]; demo: string; repo: string;
}}) {
  return (
    <article className="group rounded-2xl border shadow-sm transition hover:shadow-md dark:border-white/10">
      <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
        <Image src={p.image} alt={p.title} fill className="object-cover transition group-hover:scale-[1.03]" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {p.tags.map(t => <span key={t} className="rounded-full bg-gray-100 px-2 py-1 dark:bg-white/10">{t}</span>)}
        </div>
        <div className="mt-4 flex gap-3">
          <a href={p.demo} className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50 dark:border-white/15 dark:hover:bg-white/10">Demo</a>
          <a href={p.repo} className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50 dark:border-white/15 dark:hover:bg-white/10">Repo</a>
        </div>
      </div>
    </article>
  );
}
