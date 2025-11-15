"use client";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  demo: string;
  realMode?: "light" | "dark";
}

export default function ProjectCard({ title, description, image, demo, realMode = "light" }: Props) {
  // Fondo y bordes
  const cardBase =
    realMode === "dark"
      ? "bg-[#0B1220] text-white border border-gray-700"
      : "bg-white text-gray-900 border border-gray-200 shadow-lg";
  // Sombra azul en dark sólo al hacer hover, normal en light
  const hoverAnim =
    realMode === "dark"
      ? "hover:shadow-[0_8px_32px_0_rgba(30,64,175,0.75)] hover:border-blue-700"
      : "hover:shadow-2xl";
  // Color descripción
  const descText =
    realMode === "dark" ? "text-gray-200" : "text-gray-700";

  return (
    <div
      className={`rounded-xl p-4 w-full max-w-[340px] mx-auto transition-all duration-200 ${cardBase} ${hoverAnim} hover:-translate-y-2 hover:scale-105`}
    >
      <div className="w-full h-48 relative rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="font-semibold text-[15px] mt-3 mb-1">{title}</h3>
      <p className={`text-sm mt-2 leading-snug ${descText}`}>{description}</p>
      <div className="mt-4 flex justify-center">
        <a
          href={demo}
          className="px-6 py-1 text-sm font-semibold bg-[#1E40AF] text-white rounded-full shadow-md hover:bg-[#1b379b] transition"
          target="_blank" rel="noopener noreferrer"
        >
          DEMO
        </a>
      </div>
    </div>
  );
}
