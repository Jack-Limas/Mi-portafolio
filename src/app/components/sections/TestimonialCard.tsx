type Testimonial = {
  quote: string;
  author: string;
  avatar: string;
};

const TestimonialCard = ({
  testimonial,
  mode,
}: {
  testimonial: Testimonial;
  mode: string;
}) => (
  <div
    className={`relative p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
      mode === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
    }`}
  >
    <div className="text-4xl leading-none mb-3 select-none">“</div>
    <p className="mb-6 text-base">{testimonial.quote}</p>
    <div className="flex items-center gap-3 mt-2">
      <img
        src={testimonial.avatar}
        alt={testimonial.author}
        className="w-10 h-10 rounded-full object-cover border border-gray-300"
      />
      <span className="font-semibold">{testimonial.author}</span>
    </div>
  </div>
);

export default TestimonialCard;
