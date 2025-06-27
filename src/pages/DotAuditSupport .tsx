"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Play, Shield, FileCheck, AlertTriangle, Award, Clock, Target } from "lucide-react"
import Navbar from "@/components/navbar"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

const DotAuditSupport = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whyChooseUs = [
    "We speak the DOT's language — literally and legally.",
    "High success rate in getting corrective action plans approved.",
    "Over a decade of audit and compliance experience.",
    "Fast, efficient support to help you get back on track quickly.",
  ]

  const serviceHighlights = [
    {
      icon: Shield,
      title: "Compliance Expertise",
      description: "Deep knowledge of DOT regulations and compliance requirements",
    },
    {
      icon: FileCheck,
      title: "Action Plan Development",
      description: "Carefully crafted corrective action plans for audit success",
    },
    {
      icon: Award,
      title: "High Success Rate",
      description: "Proven track record in getting corrective action plans approved",
    },
    {
      icon: Clock,
      title: "Fast Support",
      description: "Quick, efficient support to get you back on track rapidly",
    },
  ]

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
              DOT <span className="text-orange-500 px-3 py-2 rounded-xl shadow-lg">Audit Support</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/85 text-xl relative z-10 drop-shadow-md max-w-2xl mx-auto"
            >
              Meet the amazing team behind this project and find out more about how we work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-md text-black font-bold px-8 py-4 rounded-xl shadow-2xl border border-white/50 hover:bg-white/95 transition-all duration-300"
              >
                Get Support Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" }}
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

      {/* Service Highlights Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">Expert Audit Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              Professional guidance through every stage of the DOT audit process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((service, index) => (
              <div key={index} className="animate-fadeInUp delay-300">
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-[1.5rem] p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  Facing a DOT Compliance Rating?
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    If you've received a <strong>"Conditional"</strong> or <strong>"Unsatisfactory"</strong> rating in a
                    safety audit or compliance assessment, it's understandable to feel overwhelmed. These ratings
                    require a carefully crafted <strong>corrective action plan</strong> to maintain your operations and
                    satisfy DOT regulations.
                  </p>
                  <p>
                    The process is complex, and attempting it alone can be risky. Our experienced compliance specialists
                    will guide you through every stage — identifying issues, designing your action plan, and ensuring
                    proper implementation.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  Why Work With Us?
                </h3>

                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="leading-relaxed">{reason}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Get Expert Help
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-orange-500" />
                  New Entrant Safety Audit
                </h3>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    The <strong>New Entrant Program</strong> is administered by the FMCSA and targets businesses that
                    operate across state lines. New carriers are required to undergo a{" "}
                    <strong>New Entrant Safety Audit</strong> within their first 18 months.
                  </p>
                  <p>
                    We'll help you prepare and pass your audit by ensuring that all compliance documentation and safety
                    procedures are properly in place before your evaluation.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-2">Audit Preparation Includes:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Documentation review and organization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Safety procedure implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Compliance gap analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Pre-audit mock assessments
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready for Professional Support?</h3>
                <p className="text-gray-700 mb-6">
                  Don't leave your audit success to chance. Contact us today for professional DOT audit support.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
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
  )
}

export default DotAuditSupport
