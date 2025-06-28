"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  ChevronDown,
  Play,
  User,
  Eye,
  Crown,
  Building2,
  Shield,
  Clock,
} from "lucide-react";
import Navbar from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("history");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);

      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add(
            "backdrop-blur-xl",
            "shadow-2xl",
            "py-2"
          );
          headerRef.current.classList.remove("py-4");
        } else {
          headerRef.current.classList.remove(
            "backdrop-blur-xl",
            "shadow-2xl",
            "py-2"
          );
          headerRef.current.classList.add("py-4");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const faqs = [
    {
      q: "What is a truck permit?",
      a: "A truck permit is a legal document that allows a commercial vehicle to operate on public roads. The permit is required by law to ensure that the vehicle meets safety standards and is properly registered.",
    },
    {
      q: "What types of truck permits are there?",
      a: "There are several types of truck permits, including oversize/overweight permits, temporary operating permits, trip permits, fuel permits, and IRP (International Registration Plan) permits. The type of permit required will depend on the specific needs of the vehicle and the journey it will be making.",
    },
    {
      q: "How do I apply?",
      a: "The process for applying for a truck permit varies by state and by the type of permit needed. Generally, you will need to provide information about your vehicle, including its size and weight, and the purpose of your trip. You may also need to provide proof of insurance and pay a fee. Many states offer online applications for certain types of permits.",
    },
    {
      q: "How long does it take to get a truck permit?",
      a: "The processing time for a truck permit can vary depending on the type of permit and the state where you are applying. Some permits can be obtained instantly online, while others may take several days or even weeks to process.",
    },
    {
      q: "What if I don't have a permit?",
      a: "Operating a commercial vehicle without the proper permits can result in fines, impoundment of the vehicle, and other penalties. Additionally, it can put you and others on the road at risk if your vehicle is not properly registered or if it exceeds size or weight limits.",
    },
    {
      q: "How long are truck permits valid for?",
      a: "The validity period for truck permits varies depending on the type of permit and the state where it was issued. Some permits may be valid for a single trip or for a specific time period, while others may be valid for a longer period of time or until the vehicle's registration expires.",
    },
  ];

  const teamMembers = [
    {
      name: "Mr. Himanshu",
      role: "Founder & CEO",
      description:
        "Leading the company with expertise in trucking regulations and business development.",
      icon: Crown,
    },
    {
      name: "Rajesh Bhardwaj",
      role: "Head Operations",
      description:
        "Overseeing daily operations and ensuring seamless service delivery.",
      icon: Users,
    },
    {
      name: "Neeraj Singh",
      role: " Head - Sales & Marketing",
      description: "Managing regional operations and client relationships.",
      icon: Building2,
    },
  ];

  const specialFeatures = [
    {
      title: "Trusted Franchise",
      description:
        "A reputable franchise offering high-quality services across the board.",
      icon: Shield,
      isOrange: true,
    },
    {
      title: "Customer Support",
      description: "Friendly, 24/7 support that's always ready to assist you.",
      icon: Users,
      isOrange: false,
    },
    {
      title: "Reliability & Punctuality",
      description: "Our hallmark—on-time delivery, every time.",
      icon: Clock,
      isOrange: true,
    },
  ];

  const services = [
    "Manage Trucking Permits",
    "DOT Drug And Alcohol Testing",
    "DOT Audit Support",
    "DOT Clearinghouse",
    "Open New Trucking Company",
  ];

  const sections = {
    history: {
      title: "Our Journey & Heritage",
      description:
        "With his expertise in day-to-day knowledge of fuel tax reporting, trucker permits, business files, and authorities across the United States, Mr. Himanshu founded Tap Truck Permits & Services a few years ago. Tap Truck Permits & Services has helped over 1000+ transport businesses in the US. We support owner-operators, small trucking companies, and larger fleets with everything they need to stay compliant and efficient.",
      features: [
        "Founded by Industry Expert Mr. Himanshu",
        "Served Over 1000+ Transport Businesses",
        "Comprehensive Compliance Solutions",
      ],
      image: "/trucks-hero3.jpg",
      icon: User,
    },
    mission: {
      title: "Our Mission & Purpose",
      description:
        "To empower trucking entrepreneurs by simplifying compliance, streamlining paperwork, and delivering personalized support - so they can focus on growing their business, not just managing it. We believe in making trucking regulations accessible and manageable for everyone.",
      features: [
        "Simplifying Complex Regulations",
        "Personalized Business Support",
        "Empowering Growth & Success",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      icon: Target,
    },
    vision: {
      title: "Our Vision for Tomorrow",
      description:
        "To become the most trusted partner for trucking businesses across the U.S., making compliance effortless and growth achievable — one permit at a time. We envision a future where every trucking business can operate with confidence and clarity.",
      features: [
        "Leading Trusted Partnership",
        "Effortless Compliance Solutions",
        "Nationwide Growth Support",
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      icon: Eye,
    },
  };

  const toggleIndex = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const handleSectionChange = (section) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const arrowVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  const currentSection = sections[activeSection];
  const IconComponent = currentSection.icon;

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
        {/* Enhanced glass overlay */}
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
              About{" "}
              <span className="text-orange-500 px-3 py-2 rounded-xl shadow-lg">
                Tapservices
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/85 text-xl relative z-10 drop-shadow-md max-w-2xl mx-auto"
            >
              Empowering over 1000+ US transport businesses with fast, reliable,
              and professional trucking services.
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
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-md text-black font-bold px-8 py-4 rounded-xl shadow-2xl border border-white/50 hover:bg-white/95 transition-all duration-300"
                onClick={() => {
                  const ctaSection = document.getElementById("cta-form");
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(255,255,255,0.15)",
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

      {/* Company Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-1/3 w-48 h-48 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative group animate-fadeInUp">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight animate-fadeIn">
                  Discover our story and
                  <br />
                  what drives us forward
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn delay-200">
                  <button
                    onClick={() => handleSectionChange("history")}
                    className={`px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg ${
                      activeSection === "history"
                        ? "bg-white text-orange-600"
                        : "border-2 border-white text-white hover:bg-white hover:text-orange-600"
                    }`}
                  >
                    Our History
                  </button>
                  <button
                    onClick={() => handleSectionChange("mission")}
                    className={`px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                      activeSection === "mission"
                        ? "bg-white text-orange-600 shadow-lg"
                        : "border-2 border-white text-white hover:bg-white hover:text-orange-600"
                    }`}
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => handleSectionChange("vision")}
                    className={`px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                      activeSection === "vision"
                        ? "bg-white text-orange-600 shadow-lg"
                        : "border-2 border-white text-white hover:bg-white hover:text-orange-600"
                    }`}
                  >
                    Our Vision
                  </button>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
                <div
                  className={`transition-all duration-500 ${
                    isTransitioning
                      ? "opacity-0 translate-x-8"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {currentSection.title}
                    </h3>
                  </div>

                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    {currentSection.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {currentSection.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center transition-all duration-500 ${
                          isTransitioning
                            ? "opacity-0 translate-x-4"
                            : "opacity-100 translate-x-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="w-6 h-6 text-white mr-4 flex-shrink-0" />
                        <span className="text-white font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const ctaSection = document.getElementById("cta-form");
                      if (ctaSection) {
                        ctaSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                <div
                  className={`relative transition-all duration-500 ${
                    isTransitioning
                      ? "opacity-0 translate-x-8 scale-95"
                      : "opacity-100 translate-x-0 scale-100"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      loading="lazy"
                      src={currentSection.image || "/placeholder.svg"}
                      alt={currentSection.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
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
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              Discover the unique qualities that set us apart in the trucking
              services industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="animate-fadeInUp delay-300">
                <div className="relative group h-full">
                  <div
                    className={`absolute -inset-0.5 ${
                      feature.isOrange
                        ? "bg-gradient-to-r from-orange-500 to-red-600"
                        : ""
                    } rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500`}
                  ></div>
                  <div
                    className={`relative ${
                      feature.isOrange
                        ? "bg-gradient-to-br from-orange-500 to-red-600 text-white"
                        : "bg-white text-gray-900"
                    } rounded-[1.5rem] p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between`}
                  >
                    <div>
                      <div
                        className={`w-12 h-12 ${
                          feature.isOrange ? "bg-white/20" : "bg-orange-500/20"
                        } rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm`}
                      >
                        <feature.icon
                          className={`w-6 h-6 ${
                            feature.isOrange ? "text-white" : "text-orange-500"
                          }`}
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p
                        className={`${
                          feature.isOrange ? "text-white/90" : "text-gray-600"
                        } mb-6 text-md leading-relaxed`}
                      >
                        {feature.description}
                      </p>
                    </div>
                    <button
                      onClick={() => CTA()}
                      className={`inline-flex items-center ${
                        feature.isOrange ? "text-white" : "text-orange-600"
                      } font-medium hover:translate-x-1 transition-transform duration-300 group/btn`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
              Why Choose Tapservices
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive trucking solutions designed to keep your business
              compliant and thriving.
            </p>
            <ul className="space-y-4">
              {services.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 text-gray-700 text-lg"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whyChooseUs.avif"
                alt="Why Choose Us"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
              The dedicated professionals behind our success story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="animate-fadeInUp delay-300">
                <div className="relative group h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  <div className="relative bg-white rounded-[1.5rem] p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <member.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-rose-100 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-float-slow z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delay z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="relative p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl"
                onClick={() => toggleIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleIndex(i);
                }}
              >
                <div className="flex justify-between items-center font-semibold text-lg text-gray-800">
                  <h3 className="pr-4">{q}</h3>
                  <motion.div
                    variants={arrowVariants}
                    initial="collapsed"
                    animate={activeIndex === i ? "expanded" : "collapsed"}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-orange-500" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      className="overflow-hidden"
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p className="mt-4 text-gray-700 leading-relaxed">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-10px) rotate(8deg);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-3deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
