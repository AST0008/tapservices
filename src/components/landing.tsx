import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Star,
  Menu,
  X,
  ChevronDown,
  Play,
} from "lucide-react";

const BecoLandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Shrinking header + scroll top logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);

      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("backdrop-blur", "shadow-md", "py-2");
          headerRef.current.classList.remove("py-4");
        } else {
          headerRef.current.classList.remove("backdrop-blur", "shadow-md", "py-2");
          headerRef.current.classList.add("py-4");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services data
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description:
        "Develop comprehensive business strategies that drive sustainable growth and competitive advantage.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Process Optimization",
      description:
        "Streamline operations and eliminate inefficiencies to maximize productivity and profitability.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Organizational Development",
      description:
        "Build high-performing teams and create cultures that foster innovation and engagement.",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      content:
        "Beco transformed our operations completely. We saw a 40% increase in efficiency within 6 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GreenTech Innovations",
      content:
        "Their strategic insights helped us pivot successfully during market changes. Invaluable partnership.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "COO, DataStream Corp",
      content:
        "The team's expertise in process optimization saved us over $2M annually. Exceptional results.",
      rating: 5,
    },
  ];

  // Stats data
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "15+", label: "Years Experience" },
  ];

  // Tab content data
  const tabContent = [
    {
      title: "Strategic Consulting",
      content:
        "Our strategic consulting services help businesses navigate complex challenges and identify growth opportunities. We work closely with leadership teams to develop comprehensive strategies that align with your vision and market realities.",
    },
    {
      title: "Operational Excellence",
      content:
        "Transform your operations with our proven methodologies. We analyze current processes, identify bottlenecks, and implement solutions that enhance efficiency while reducing costs and improving quality.",
    },
    {
      title: "Digital Transformation",
      content:
        "Embrace the digital future with confidence. Our experts guide you through technology adoption, process digitization, and cultural change management to ensure successful transformation.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-[#2a5dff] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}

        {/* Navigation */}
        <nav
          ref={headerRef}
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
              : "bg-transparent py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Beco
                </h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Services
                  </a>
                  <a
                    href="#about"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    About
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Unlock your company's potential with strategic consulting that
                delivers measurable results and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-bounce"></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive business consulting solutions designed to
                accelerate your growth and optimize your operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-6 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Tabs */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose Beco?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We combine deep industry expertise with innovative approaches
                  to deliver transformational results for your business.
                </p>

                <div className="space-y-4">
                  {tabContent.map((tab, index) => (
                    <div key={index}>
                      <button
                        onClick={() => setActiveTab(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          activeTab === index
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-lg">{tab.title}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              activeTab === index ? "transform rotate-180" : ""
                            }`}
                          />
                        </div>
                        {activeTab === index && (
                          <div className="mt-3 text-gray-600 leading-relaxed">
                            {tab.content}
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6">
                    Schedule a free consultation to discuss how we can help
                    transform your business.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Customized solution proposals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>Measurable results guarantee</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful companies that have accelerated their
              growth with our proven consulting strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Beco
                </h3>
                <p className="text-gray-300 mb-4">
                  Transforming businesses through strategic consulting and
                  innovative solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Strategic Planning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Process Optimization
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Digital Transformation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Organizational Development
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-300">
                  <p>123 Business Ave</p>
                  <p>Suite 100</p>
                  <p>New York, NY 10001</p>
                  <p className="mt-4">
                    <a
                      href="mailto:hello@beco.com"
                      className="hover:text-white transition-colors duration-200"
                    >
                      hello@beco.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-white transition-colors duration-200"
                    >
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2025 Beco. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BecoLandingPage;
