import React, { useState } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  price: string;
  services: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  price,
  services,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-xl sm:w-[48%] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group cursor-pointer border border-transparent hover:border-red-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={`${title} Service`}
        className={`w-full h-auto max-h-[700px] object-cover transition-transform duration-700 ease-in-out ${
          hovered ? "scale-110 blur-[2px] brightness-50" : ""
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 p-6 md:p-8 rounded-3xl text-white backdrop-blur-xl bg-black/80 border border-white/20 shadow-2xl ring-1 ring-white/10 transition-all duration-500 ease-in-out flex flex-col justify-start overflow-y-auto ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 drop-shadow-xl tracking-tight">
            {title}
          </h3>

          <p className="text-base sm:text-lg md:text-xl font-semibold text-orange-500 mb-4 drop-shadow tracking-wide">
            {price}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-white/90">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 hover:text-white transition"
              >
                <span className="text-orange-400 text-lg mt-0.5">✔</span>
                <span className="leading-snug">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 md:mt-8">
          <a href="#contact">
            <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 via-red-500 to-red-500 hover:brightness-110 transition-all text-white py-2 px-6 rounded-full shadow-lg hover:shadow-pink-500/30">
              Know More →
            </button>
          </a>
        </div>
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 z-[-1] rounded-3xl transition-opacity duration-700 ${
          hovered ? "opacity-80" : "opacity-0"
        } bg-gradient-to-br from-red-500/30 via-pink-400/30 to-yellow-400/30 blur-2xl`}
      />
    </div>
  );
};

export default ServiceCard;
