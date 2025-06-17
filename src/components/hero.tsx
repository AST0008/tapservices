"use client";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import classNames from "classnames";

const slides = [
  {
    id: 1,
    title: "Celebrating 3 Years of Growth 🚚",
    subtitle: `Fastest growing trucking permits company in California.

Managing 700+ companies.

Handling 1000+ trucks.

Supporting 1000+ Drivers.`,
    bg: "/trucks-hero.png",
  },
  {
    id: 2,
    title: "Get Your IRP Plates Fast ⚡️",
    subtitle:
      "IRP Apportioned Plates — Recommended for fleets with CA DMV to process IRP registration quickly.",
    bg: "/trucks-hero2.jpg",
  },
  {
    id: 3,
    title: "DOT & Drug Compliance Made Easy 💊",
    subtitle:
      "Dedicated help for DOT, EPN, Clearing House, and more to stay fully compliant.",
    bg: "/trucks-hero3.jpg",
  },
  {
    id: 4,
    title: "IFTA, MCP, and More 🚛",
    subtitle:
      "Experienced team ready to assist with all your authority requirements: DOT, EIN, MCP, IFTA, and beyond.",
    bg: "/trucks-hero4.jpg",
  },
];

const CarouselHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goToSlide = useCallback((index: number) => setCurrentSlide(index), []);
  const nextSlide = useCallback(
    () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    []
  );
  const prevSlide = useCallback(
    () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  return (
    <section
      className="relative w-full h-[95vh] overflow-hidden font-sans"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Preload Images */}
      <div className="hidden">
        {slides.map((s) => (
          <img key={s.id} src={s.bg} alt="" />
        ))}
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={classNames(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            {
              "opacity-100 z-10": index === currentSlide,
              "opacity-0 z-0": index !== currentSlide,
            }
          )}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30 z-10" />

          <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
            <div
              className={classNames(
                "backdrop-blur-lg bg-black/30 text-white p-8 md:p-14 rounded-3xl shadow-2xl max-w-3xl transition-all duration-700",
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-orange-400 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 whitespace-pre-line mb-8 leading-relaxed">
                {slide.subtitle}
              </p>
              <a href="#contact">
                <button className="text-white text-xl md:text-2xl font-bold px-6 py-3 md:px-8 md:py-4 bg-red-500 border-2 border-black rounded-xl shadow-[5px_5px_0px_0px_black] hover:bg-white hover:text-red-500 hover:border-red-500 hover:shadow-[5px_5px_0px_0px_#ff5252] active:bg-yellow-300 active:translate-y-1 transition-all duration-300">
                Know More
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-6 transform -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 p-3 rounded-full shadow-md"
      >
        <ChevronLeft className="text-white w-7 h-7" strokeWidth={2.5} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-6 transform -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 p-3 rounded-full shadow-md"
      >
        <ChevronRight className="text-white w-7 h-7" strokeWidth={2.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={classNames(
              "w-3 h-3 rounded-full",
              i === currentSlide
                ? "bg-orange-500 scale-125"
                : "bg-white/50 hover:bg-white"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselHero;
