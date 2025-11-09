"use client";

import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  demo: string;
}

export default function ProjectCard({ title, description, image, demo }: Props) {
  return (
    <div className="bg-white dark:bg-[#0B1220] shadow-md rounded-xl p-4 border border-gray-200 dark:border-gray-700 w-full max-w-[340px] mx-auto">
      {/* Imagen */}
      <div className="w-full h-48 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Título */}
      <h3 className="font-semibold text-[15px] mt-3">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 leading-snug">
        {description}
      </p>

      {/* Botón DEMO */}
      <div className="mt-4 flex justify-center">
        <a
          href={demo}
          className="px-6 py-1 text-sm font-semibold bg-[#1E40AF] text-white rounded-full shadow-sm hover:bg-[#1b379b] transition"
        >
          DEMO
        </a>
      </div>
    </div>
  );
}
