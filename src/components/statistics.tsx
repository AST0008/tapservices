import { useRef, useEffect, useState } from "react";

type StatItemProps = {
  number: number;
  label: string;
  suffix?: string;
  counterClass: string;
  delay: number;
};

const StatItem = ({
  number,
  label,
  suffix = "",
  counterClass,
  delay,
}: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * number);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, number]);

  return (
    <div
      ref={statRef}
      className="text-center text-gray-300  p-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      <div className="flex items-center justify-center">
        <div
          className={`text-4xl lg:text-5xl font-bold text-gray-300 ${counterClass}`}
        >
          {count}
        </div>
        <span className="text-4xl lg:text-5xl font-bold text-gray-300">
          {suffix}
        </span>
      </div>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="py-20 bg-gray-800 text-gray-300">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-300">
            Our <span className="text-orange-500">Numbers</span> Speak
          </h2>
          <p className="text-lg text-gray-400">
            We're proud to serve a global client base with a strong logistics
            network.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <StatItem
            number={15}
            label="Our Locations"
            counterClass="counter-locations"
            delay={0.1}
          />
          <StatItem
            number={110}
            label="Clients Worldwide"
            suffix="+"
            counterClass="counter-clients"
            delay={0.2}
          />
          <StatItem
            number={240}
            label="Owned Vehicles"
            suffix="+"
            counterClass="counter-vehicles"
            delay={0.3}
          />
          <StatItem
            number={2340}
            label="Tonnes Transported"
            counterClass="counter-tonnes"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
