"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Building2,
  FileText,
  Shield,
  Clock,
  AlertTriangle,
  Truck,
} from "lucide-react";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const StartTruckingCompany = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyQuestions = [
    "What name do you intend to give your trucking business?",
    "Do you already possess a trailer and truck?",
    "Do you have a CDL?",
    "Have you had any experience?",
    "Do you have the initial investment necessary to launch this business?",
    "Are you able to finish the registration and permitting process with the necessary time and experience?",
    "Do you have the time to submit documents to state and federal agencies on a quarterly and annual basis?",
  ];

  const processSteps = [
    {
      icon: Building2,
      title: "Business Formation",
      description: "Choose your legal entity type - Corporation, LLC, or DBA",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Handle all permits, US DOT, and FMCSA requirements",
    },
    {
      icon: Shield,
      title: "Compliance Setup",
      description: "Drug testing, audit support, and regulatory compliance",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Complete setup in just 4-6 hours with our expert team",
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
              Start Your{" "}
              <span className="text-orange-500 px-3 py-2 rounded-xl shadow-lg">
                Trucking Company
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/85 text-xl relative z-10 drop-shadow-md max-w-2xl mx-auto"
            >
              We'll handle the paperwork while you focus on driving success.
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
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const ctaSection = document.getElementById("cta-form");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 shadow-lg flex items-center gap-2 justify-center"
              >
                <Play className="w-5 h-5" />
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              We make starting your trucking company fast, easy, and
              stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="animate-fadeInUp delay-300">
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-[1.5rem] p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-1/3 w-48 h-48 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
                  Open New Trucking Company
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    With brilliance and speed, we are opening a tonne of new
                    businesses every day. Customers have the option of starting
                    their own trucking businesses in person or over the phone.
                    We manage all the permits, US DOT drug and alcohol tests,
                    and FMCSA audit support, and it only takes us 4-6 hours to
                    start a new firm for our clients.
                  </p>

                  <p>
                    One of the U.S. businesses with the most regulations is
                    trucking, and establishing a trucking business necessitates
                    the filing of various documents. The personnel at Tap Truck
                    Permit & Services is fully aware of the paperwork and
                    licences (in-cab permits, decals, plates, etc.) that must be
                    submitted in order to launch your trucking business.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Truck className="w-6 h-6" />
                  How to Start A Trucking Business
                </h3>
                <p className="mb-4">
                  Although starting your own trucking business may first appear
                  challenging, there are long-term financial benefits and room
                  for growth. It takes a little time, skill, and patience to
                  apply for a permit.
                </p>
                <button
                  onClick={() => {
                    const ctaSection = document.getElementById("cta-form");
                    if (ctaSection) {
                      ctaSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Questions to Consider
                </h3>
                <div className="space-y-4">
                  {keyQuestions.map((question, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {question}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-800 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">
                      IMPORTANT Information
                    </h4>
                    <p>
                      Your social security number should not be used as your
                      Federal ID number. Using your social security number might
                      lead to identity theft.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Compliance Solution
              </h3>
              <p className="text-gray-600 text-lg">
                There will be many concerns and risks associated with starting a
                trucking business if the appropriate licenses, plates, or cab
                cards are not obtained.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white text-center">
              <p className="text-lg font-semibold mb-4">
                Allow the knowledgeable personnel at Tap Truck Permit & Services
                to fully comply with state and federal regulations for your
                tractor-trailer.
              </p>
              <button
                onClick={() => {
                  const ctaSection = document.getElementById("cta-form");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Started Now
              </button>
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

export default StartTruckingCompany;
