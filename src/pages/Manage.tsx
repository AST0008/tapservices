"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Shield,
  FileText,
  Truck,
  MapPin,
  AlertCircle,
  Globe,
} from "lucide-react";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const ManagePermits = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const federalPermits = [
    {
      title: "US DOT",
      description:
        "The FMCSA issues US DOT numbers for commercial carriers. Required for hazardous material transport, vehicles 10,001+ lbs, or those carrying 8+ passengers. We'll handle all paperwork and registration for you.",
      icon: Shield,
    },
    {
      title: "MCS 150 Update",
      description:
        "Required every 2 years—even if nothing changes—to keep your DOT number active. Avoid suspension and fines by letting us file for you.",
      icon: FileText,
    },
    {
      title: "ICC MC Authority",
      description:
        "Required for interstate commerce involving passengers or regulated cargo. We help you apply under the right category: broker, for-hire, etc.",
      icon: Globe,
    },
  ];

  const statePermits = [
    {
      title: "NY HUT",
      description:
        "Mandatory for certain commercial vehicles in NY. Toll-paid Thruway sections excluded. Tax is based on vehicle weight and filing method.",
    },
    {
      title: "Kentucky KYU",
      description:
        "Required for vehicles 60,000+ lbs. Includes quarterly mileage tax reporting. We guide you through registration and submission.",
    },
    {
      title: "New Mexico WDT",
      description:
        "Applies to 26,000+ lb vehicles. We ensure accurate quarterly mileage reports and handle all permit filings.",
    },
    {
      title: "Oregon Fuel Permit",
      description:
        "Required for vehicles 8,000+ lbs or self-propelled fixed-load trucks. Includes a bond process, but we manage the entire procedure for you.",
    },
    {
      title: "Quarterly IFTA Filing",
      description:
        "We calculate your multi-state fuel usage and file your IFTA tax accurately and on time. Deadline: end of the month after the quarter ends.",
    },
    {
      title: "ARB & CARB Compliance",
      description:
        "CARB certificate and ARB number assistance for diesel trucks over 14,001 lbs in California. Stay emission-compliant.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-gray-800 to-black text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/truck-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-red-500/20 to-orange-600/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-white/5"></div>

        <div className="relative z-10 px-6 lg:px-12 py-16 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="max-w-4xl bg-black/50 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-2xl space-y-6 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl"
            >
              Manage{" "}
              <span className="text-orange-500 px-3 py-2 rounded-xl shadow-lg">
                Trucking Permits
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/85 text-xl relative z-10 drop-shadow-md max-w-2xl mx-auto"
            >
              Meet the amazing team behind this project and learn how we make
              trucking compliance seamless across states.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
                onClick={() => {
                  const ctaSection = document.getElementById("cta-form");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-md text-black font-bold px-8 py-4 rounded-xl shadow-2xl border border-white/50 hover:bg-white/95 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                onClick={() => {
                  const ctaSection = document.getElementById("cta-form");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 shadow-lg flex items-center gap-2 justify-center"
              >
                <Play className="w-5 h-5" />
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="relative py-16 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl"
          >
            <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-700">
              We offer our services in{" "}
              <strong className="text-orange-600">California</strong> &{" "}
              <strong className="text-orange-600">Indiana</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Federal Permits Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-1/3 w-48 h-48 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              Federal & State Permits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              Comprehensive permit management services for all your trucking
              compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {federalPermits.map((permit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="animate-fadeInUp delay-300"
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-[1.5rem] p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                      <permit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {permit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {permit.description}
                    </p>
                    <button
                      onClick={() => {
                        const ctaSection = document.getElementById("cta-form");
                        if (ctaSection) {
                          ctaSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="inline-flex items-center text-orange-600 font-medium hover:translate-x-1 transition-transform duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State Specific Permits Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-1/5 w-32 h-32 bg-gradient-to-br from-red-300/15 to-orange-400/15 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
              State Specific Permits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              Specialized permit services tailored to individual state
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statePermits.map((permit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="animate-fadeInUp delay-300"
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-[1.5rem] p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-lg font-bold text-orange-600 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {permit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {permit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-white shadow-2xl">
              <AlertCircle className="w-16 h-16 mx-auto mb-6 text-white/90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Any Permit?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Contact us now to stay compliant and stress-free. Our expert
                team is ready to handle all your permit needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center">
                  Contact Us Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
                  View All Services
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
};

export default ManagePermits;
