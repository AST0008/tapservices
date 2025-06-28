
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "Mr. Himanshu does an excellent job helping our trucking company navigate the complex world of permits, particularly with COVID-19 updates. Their service is simply outstanding!",
    name: "Michael Anderson",
    company: "Anderson Trucking",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "Excellent customer assistance, prompt and dependable service. Tapservices has been instrumental in keeping our fleet compliant across multiple states.",
    name: "Sarah Johnson",
    company: "Express Logistics",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "Top-notch trucking services, friendly customer service. They've saved us countless hours and helped us avoid compliance issues that could have cost us thousands.",
    name: "David Martinez",
    company: "Martinez Transport",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    quote: "We've been working with Tapservices INC for over 5 years now, and they've never let us down. Their expertise in trucking permits is unmatched in the industry.",
    name: "Jennifer Williams",
    company: "Williams Freight Systems",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what some of our satisfied customers have to say.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  ref={(el) => (testimonialRefs.current[index] = el)}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12H7C6.46957 12 5.96086 11.7893 5.58579 11.4142C5.21071 11.0391 5 10.5304 5 10V7M19 12H16C15.4696 12 14.9609 11.7893 14.5858 11.4142C14.2107 11.0391 14 10.5304 14 10V7M5 7V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H10C10.5304 3 11.0391 3.21071 11.4142 3.58579C11.7893 3.96086 12 4.46957 12 5V7C12 7.53043 11.7893 8.03914 11.4142 8.41421C11.0391 8.78929 10.5304 9 10 9H7C6.46957 9 5.96086 8.78929 5.58579 8.41421C5.21071 8.03914 5 7.53043 5 7ZM14 7V5C14 4.46957 14.2107 3.96086 14.5858 3.58579C14.9609 3.21071 15.4696 3 16 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7C21 7.53043 20.7893 8.03914 20.4142 8.41421C20.0391 8.78929 19.5304 9 19 9H16C15.4696 9 14.9609 8.78929 14.5858 8.41421C14.2107 8.03914 14 7.53043 14 7ZM8 21H16M10 17V21M14 17V21" 
                              stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border border-orange-200 hover:bg-orange-50"
              onClick={prevTestimonial}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" 
                  stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border border-orange-200 hover:bg-orange-50"
              onClick={nextTestimonial}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 mx-1 rounded-full transition-all duration-300",
                  activeIndex === index ? "bg-orange-500" : "bg-orange-200"
                )}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
