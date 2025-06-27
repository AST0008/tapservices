"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Play,
  FileText,
  Calculator,
  Calendar,
  AlertTriangle,
  Truck,
  DollarSign,
  MapPin,
} from "lucide-react"
import Navbar from "@/components/navbar"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

const IftaFuelTax = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const eligibilityCriteria = [
    "Vehicles with two axles and GVW over 26,000 lbs",
    "Vehicles with three or more axles (regardless of weight)",
    "Combined GVW exceeding 26,000 lbs",
  ]

  const additionalPermits = [
    "Oregon permits",
    "Kentucky KYU and spirits transport",
    "VIN verification",
    "ARB & CARB compliance certificates",
  ]

  const serviceHighlights = [
    {
      icon: FileText,
      title: "IFTA Returns",
      description: "Quarterly fuel tax return preparation and filing services",
    },
    {
      icon: Calculator,
      title: "Tax Calculations",
      description: "Accurate fuel use calculations across multiple jurisdictions",
    },
    {
      icon: Calendar,
      title: "Timely Filing",
      description: "Ensure on-time submissions to avoid penalties and fines",
    },
    {
      icon: Truck,
      title: "Permit Management",
      description: "Complete IFTA decal and permit acquisition support",
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
              IFTA <span className="text-orange-500 px-3 py-2 rounded-xl shadow-lg">Fuel Tax</span>
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
                Get Started
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">IFTA Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              Comprehensive IFTA fuel tax management and compliance solutions.
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
                  <FileText className="w-8 h-8 text-orange-500" />
                  IFTA Fuel Tax Returns
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    The International Fuel Tax Agreement (IFTA) is a pact between U.S. states and Canadian provinces
                    that simplifies reporting of fuel use by motor carriers operating across multiple jurisdictions.
                  </p>
                  <p>
                    It allows a carrier registered in one jurisdiction to report fuel use in all IFTA jurisdictions
                    under a single license. It saves time, effort, and redundant paperwork across state lines.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  How to Submit an IFTA Return
                </h3>
                <p className="mb-4">
                  Quarterly IFTA Fuel Tax Returns must be submitted by licensed carriers. Accuracy and timeliness are
                  crucial, and failing to file on time may lead to significant penalties.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>IFTA returns are filed quarterly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Late or incorrect filing can lead to IRS fines</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Expertise in trucking, tax rates, and compliance is critical</span>
                  </div>
                </div>

                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  File Returns
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
                  <Truck className="w-6 h-6 text-orange-500" />
                  IFTA Eligibility Criteria
                </h3>

                <div className="space-y-4">
                  {eligibilityCriteria.map((criteria, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                  Penalties for Non-Compliance
                </h3>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">Important Warning</h4>
                      <p className="text-red-700">
                        Failure to file within two months after the due date may result in suspension of your IFTA
                        license and fines from the IRS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  Additional Permits
                </h3>
                <p className="text-gray-700 mb-4">We also assist with related truck permits including:</p>

                <div className="space-y-2">
                  {additionalPermits.map((permit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 text-sm">{permit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your IFTA Filings?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Our team is here to simplify your IFTA filings and compliance. Get in touch today to avoid fines and
                stay on the road!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200">
                  Learn More
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
  )
}

export default IftaFuelTax
