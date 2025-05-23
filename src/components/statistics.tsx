
import { useRef, useEffect, useState } from "react";

type StatItemProps = {
  number: number;
  label: string;
  suffix?: string;
  counterClass: string;
  delay: number;
};

const StatItem = ({ number, label, suffix = "", counterClass, delay }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
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

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={statRef} 
      className="text-center p-6"
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s` 
      }}
    >
      <div className="flex items-center justify-center">
        <div 
          className={`text-4xl lg:text-5xl font-bold text-gray-900 
                      ${isVisible ? `counter ${counterClass} animate-counter` : ""}`}
        >
          {!isVisible ? 0 : ""} 
        </div>
        <span className="text-4xl lg:text-5xl font-bold text-gray-900">{suffix}</span>
      </div>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-orange-500">Numbers</span> Speak
          </h2>
          <p className="text-lg text-gray-600">
            We've helped thousands of trucking companies stay compliant and keep their operations running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          <StatItem 
            number={10} 
            label="Years in Business" 
            suffix="+" 
            counterClass="counter-years"
            delay={0.1}
          />
          <StatItem 
            number={5000} 
            label="Customers Served" 
            suffix="+" 
            counterClass="counter-customers"
            delay={0.2}
          />
          <StatItem 
            number={110} 
            label="DOT Audits Supported" 
            suffix="+" 
            counterClass="counter-audits"
            delay={0.3}
          />
          <StatItem 
            number={240} 
            label="Permits Processed" 
            suffix="+" 
            counterClass="counter-permits"
            delay={0.4}
          />
          <StatItem 
            number={2340} 
            label="Transactions" 
            suffix="+" 
            counterClass="counter-transactions"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
