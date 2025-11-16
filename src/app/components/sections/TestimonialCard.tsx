type Testimonial = {
  quote: string;
  author: string;
  avatar: string;
};
import data from "@/app/data/data.json";
import { useThemeMode, ThemeMode } from "@/hooks/useTheme";

export default function TestimonialCard({
  testimonial,
  realMode
}: {
  testimonial: Testimonial;
  realMode: "light" | "dark";
}) {
  // Glow y fondo igual al resto
  const cardGlow =
    realMode === "dark"
      ? "bg-[#181f31] border border-gray-700 shadow-[0_0_32px_0_rgba(30,64,175,0.4)] hover:shadow-[0_0_54px_6px_rgba(30,64,175,0.75)] text-white"
      : "bg-white border border-gray-200 shadow-lg text-black";
  return (
    <div
      className={`relative p-8 rounded-2xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 flex flex-col justify-between ${cardGlow}`}
      style={{ minHeight: 230 }}
    >
      <div>
        <div className="text-4xl leading-none mb-3 select-none">“</div>
        <p className="mb-6 text-base">{testimonial.quote}</p>
      </div>
      <div className="flex items-center gap-3 mt-2">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-25 h-25 rounded-full object-cover border border-gray-300"
        />
        <span className="font-semibold">{testimonial.author}</span>
      </div>
    </div>
  );
}
