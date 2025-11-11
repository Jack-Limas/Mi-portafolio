"use client";
import { useLanguage } from "@/app/context/LanguageContext";

export default function OfferSection() {
  const { dictionary } = useLanguage();
  const data = dictionary.offer;

  return (
    <section className="px-4 md:px-16 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-900">
        {data.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Por qué elegirme */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-6 md:w-1/2">
          <h3 className="text-xl font-bold mb-4">{data.whyChoose.title}</h3>
          <ul className="mb-4 space-y-2 text-gray-700">
            {data.whyChoose.items.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700">{data.whyChoose.description}</p>
        </div>

        {/* Tecnologías que domino */}
        <div className="bg-gray-100 shadow-md rounded-2xl p-6 md:w-1/2">
          <h3 className="text-xl font-bold mb-4">{data.skills.title}</h3>
          <p className="text-gray-700 mb-3">{data.skills.description}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.skills.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
