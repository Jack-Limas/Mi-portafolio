'use client';
import data from '@/app/data/data.json';

export default function Offer() {
  const offer = data.offer;

  return (
    <section id="offer" className="w-full flex flex-col items-center px-2 py-5">
      <div className="max-w-6xl w-full">
        <h2 className="bg-[#2055ae] text-white py-4 px-8 text-3xl font-bold rounded-t-xl shadow mb-0 drop-shadow flex items-center">
          Lo que ofrezco
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow rounded-b-xl pt-8 pb-7 px-6">
          <div className="rounded-xl bg-[#f5f6fa] shadow-md p-5 flex flex-col">
            <h3 className="font-bold text-xl mb-2">¿Por qué elegirme?</h3>
            <ul className="text-base space-y-1 mb-2">
              {offer.qualities.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
            <p className="text-gray-700">{offer.description}</p>
          </div>
          <div className="rounded-xl bg-[#f5f6fa] shadow-md p-5 flex flex-col">
            <h3 className="font-bold text-xl mb-2">Tecnologías que domino</h3>
            <ul className="list-disc ml-4 mb-2 text-base text-gray-700">{offer.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
