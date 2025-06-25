// import React, { useState, useEffect, useRef } from "react";
// import {
//   ArrowRight,
//   CheckCircle,
//   Users,
//   TrendingUp,
//   Target,
//   Star,
//   Menu,
//   X,
//   ChevronDown,
//   Play,
// } from "lucide-react";

// const BecoLandingPage: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);
//   const headerRef = useRef<HTMLElement>(null);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     // Shrinking header + scroll top logic
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//       setShowScrollTop(window.scrollY > 400);

//       if (headerRef.current) {
//         if (window.scrollY > 50) {
//           headerRef.current.classList.add("backdrop-blur", "shadow-md", "py-2");
//           headerRef.current.classList.remove("py-4");
//         } else {
//           headerRef.current.classList.remove("backdrop-blur", "shadow-md", "py-2");
//           headerRef.current.classList.add("py-4");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Services data
//   const services = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Strategic Planning",
//       description:
//         "Develop comprehensive business strategies that drive sustainable growth and competitive advantage.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Process Optimization",
//       description:
//         "Streamline operations and eliminate inefficiencies to maximize productivity and profitability.",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Organizational Development",
//       description:
//         "Build high-performing teams and create cultures that foster innovation and engagement.",
//     },
//   ];

//   // Testimonials data
//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO, TechFlow Solutions",
//       content:
//         "Beco transformed our operations completely. We saw a 40% increase in efficiency within 6 months.",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       role: "Founder, GreenTech Innovations",
//       content:
//         "Their strategic insights helped us pivot successfully during market changes. Invaluable partnership.",
//       rating: 5,
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "COO, DataStream Corp",
//       content:
//         "The team's expertise in process optimization saved us over $2M annually. Exceptional results.",
//       rating: 5,
//     },
//   ];

//   // Stats data
//   const stats = [
//     { number: "500+", label: "Projects Completed" },
//     { number: "98%", label: "Client Satisfaction" },
//     { number: "$50M+", label: "Revenue Generated" },
//     { number: "15+", label: "Years Experience" },
//   ];

//   // Tab content data
//   const tabContent = [
//     {
//       title: "Strategic Consulting",
//       content:
//         "Our strategic consulting services help businesses navigate complex challenges and identify growth opportunities. We work closely with leadership teams to develop comprehensive strategies that align with your vision and market realities.",
//     },
//     {
//       title: "Operational Excellence",
//       content:
//         "Transform your operations with our proven methodologies. We analyze current processes, identify bottlenecks, and implement solutions that enhance efficiency while reducing costs and improving quality.",
//     },
//     {
//       title: "Digital Transformation",
//       content:
//         "Embrace the digital future with confidence. Our experts guide you through technology adoption, process digitization, and cultural change management to ensure successful transformation.",
//     },
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-white">
//         {/* Scroll-to-Top Button */}
//         {showScrollTop && (
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="fixed bottom-6 right-6 z-50 bg-[#2a5dff] text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
//             aria-label="Scroll to top"
//           >
//             ↑
//           </button>
//         )}

//         {/* Navigation */}
//         <nav
//           ref={headerRef}
//           className={`fixed w-full z-50 transition-all duration-300 ${
//             isScrolled
//               ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
//               : "bg-transparent py-4"
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               {/* Logo */}
//               <div className="flex-shrink-0">
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Beco
//                 </h1>
//               </div>

//               {/* Desktop Menu */}
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-8">
//                   <a
//                     href="#home"
//                     className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Home
//                   </a>
//                   <a
//                     href="#services"
//                     className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Services
//                   </a>
//                   <a
//                     href="#about"
//                     className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     About
//                   </a>
//                   <a
//                     href="#testimonials"
//                     className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Testimonials
//                   </a>
//                   <a
//                     href="#contact"
//                     className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                   >
//                     Contact
//                   </a>
//                 </div>
//               </div>

//               {/* Desktop CTA */}
//               <div className="hidden md:block">
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
//                   Get Started
//                 </button>
//               </div>

//               {/* Mobile Menu Toggle */}
//               <div className="md:hidden">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                 >
//                   {isMobileMenuOpen ? (
//                     <X className="w-6 h-6" />
//                   ) : (
//                     <Menu className="w-6 h-6" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 <a
//                   href="#home"
//                   className="block px-3 py-2 text-gray-700 hover:text-blue-600"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="#services"
//                   className="block px-3 py-2 text-gray-700 hover:text-blue-600"
//                 >
//                   Services
//                 </a>
//                 <a
//                   href="#about"
//                   className="block px-3 py-2 text-gray-700 hover:text-blue-600"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="#testimonials"
//                   className="block px-3 py-2 text-gray-700 hover:text-blue-600"
//                 >
//                   Testimonials
//                 </a>
//                 <a
//                   href="#contact"
//                   className="block px-3 py-2 text-gray-700 hover:text-blue-600"
//                 >
//                   Contact
//                 </a>
//               </div>
//             </div>
//           )}
//         </nav>

//         {/* Hero Section */}
//         <section
//           id="home"
//           className="relative min-h-screen flex items-center justify-center overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

//           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="max-w-4xl mx-auto">
//               <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//                 Transform Your
//                 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   {" "}
//                   Business
//                 </span>
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
//                 Unlock your company's potential with strategic consulting that
//                 delivers measurable results and sustainable growth.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
//                   Start Your Journey
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//                 <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2">
//                   <Play className="w-5 h-5" />
//                   Watch Demo
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Floating Elements */}
//           <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
//           <div className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 animate-bounce"></div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Our Services
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Comprehensive business consulting solutions designed to
//                 accelerate your growth and optimize your operations.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//                 >
//                   <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {service.description}
//                   </p>
//                   <button className="mt-6 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center gap-2">
//                     Learn More
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* About Section with Tabs */}
//         <section id="about" className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                   Why Choose Beco?
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-8">
//                   We combine deep industry expertise with innovative approaches
//                   to deliver transformational results for your business.
//                 </p>

//                 <div className="space-y-4">
//                   {tabContent.map((tab, index) => (
//                     <div key={index}>
//                       <button
//                         onClick={() => setActiveTab(index)}
//                         className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
//                           activeTab === index
//                             ? "border-blue-500 bg-blue-50 text-blue-700"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <span className="font-semibold text-lg">{tab.title}</span>
//                           <ChevronDown
//                             className={`w-5 h-5 transition-transform duration-200 ${
//                               activeTab === index ? "transform rotate-180" : ""
//                             }`}
//                           />
//                         </div>
//                         {activeTab === index && (
//                           <div className="mt-3 text-gray-600 leading-relaxed">
//                             {tab.content}
//                           </div>
//                         )}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
//                   <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
//                   <p className="mb-6">
//                     Schedule a free consultation to discuss how we can help
//                     transform your business.
//                   </p>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Free initial consultation</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Customized solution proposals</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Measurable results guarantee</span>
//                     </div>
//                   </div>
//                   <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
//                     Book Consultation
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section id="testimonials" className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 What Our Clients Say
//               </h2>
//               <p className="text-xl text-gray-600">
//                 Don't just take our word for it. Here's what our clients have to
//                 say about working with us.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="flex items-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-5 h-5 text-yellow-400 fill-current"
//                       />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 mb-6 italic leading-relaxed">
//                     "{testimonial.content}"
//                   </p>
//                   <div>
//                     <div className="font-semibold text-gray-900">
//                       {testimonial.name}
//                     </div>
//                     <div className="text-gray-500 text-sm">{testimonial.role}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//               Join hundreds of successful companies that have accelerated their
//               growth with our proven consulting strategies.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 justify-center">
//                 Schedule Free Consultation
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer id="contact" className="bg-gray-900 text-white py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//                   Beco
//                 </h3>
//                 <p className="text-gray-300 mb-4">
//                   Transforming businesses through strategic consulting and
//                   innovative solutions.
//                 </p>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Services</h4>
//                 <ul className="space-y-2 text-gray-300">
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Strategic Planning
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Process Optimization
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Digital Transformation
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Organizational Development
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Company</h4>
//                 <ul className="space-y-2 text-gray-300">
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Our Team
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//                 <div className="space-y-2 text-gray-300">
//                   <p>123 Business Ave</p>
//                   <p>Suite 100</p>
//                   <p>New York, NY 10001</p>
//                   <p className="mt-4">
//                     <a
//                       href="mailto:hello@beco.com"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       hello@beco.com
//                     </a>
//                   </p>
//                   <p>
//                     <a
//                       href="tel:+1234567890"
//                       className="hover:text-white transition-colors duration-200"
//                     >
//                       (123) 456-7890
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//               <p>© 2025 Beco. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default BecoLandingPage;

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Star,
  Menu,
  X,
  ChevronDown,
  Play,
  User,
  Eye,
  PieChart,
  Crown,
  Building2,
  Globe,
  Cpu,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { motion } from "framer-motion";
import CTA from "./cta";
import Navbar from "./navbar";
import ServicePackages from "./poster";
import ServiceCard from "./poster";

const BecoLandingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const [activeSection, setActiveSection] = useState("about");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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

  const navigationItems = [
    { name: "Demos", hasDropdown: true },
    { name: "Company", hasDropdown: true },
    { name: "Portfolio", hasDropdown: true },
    { name: "Services", hasDropdown: false },
    { name: "Contact Us", hasDropdown: true },
    { name: "All Pages", hasDropdown: true },
  ];

  const slides = [
    {
      title1: "Empowering",
      titleGradient: "Trucking",
      title2: "Business",
      subheading: "Your trusted partner in trucking regulations",
      description:
        "Tap Services Inc. provides expert assistance in compliance, permit management, and business formation. We help trucking professionals navigate the regulatory landscape with ease.",
      image: "/1.jpg",
    },
    {
      title1: "Get Your  ",
      titleGradient: "IRP ",
      title2: "Plates Fast",
      subheading: "",
      description:
        "IRP Apportioned Plates — Recommended for fleets with CA DMV to process IRP registration quickly.",
      image: "/2.jpg",
    },
    {
      title1: "",
      titleGradient: "DOT & Drug  ",
      title2: "Compliance Made Easy",
      subheading: "",
      description:
        "Dedicated help for DOT, EPN, Clearing House, and more to stay fully compliant.",
      image: "/3.jpg",
    },
    {
      title1: "",
      titleGradient: "IFTA, MCP,",
      title2: " and More ",
      subheading: "",
      description:
        "Experienced team ready to assist with all your authority requirements: DOT, EIN, MCP, IFTA, and beyond.",
      image: "/4.jpg",
    },
    {
      title1: "Celebrating ",
      titleGradient: "3 Years",
      title2: " of Growth",
      subheading: "",
      description: `Fastest growing trucking permits company in California.

      Managing 700+ companies.
      
      Handling 1000+ trucks.
      
      Supporting 1000+ Drivers.`,
      image: "/5.jpg",
    },
  ];

  const firstServices = [
    "INC & LLC Filing",
    "BOC3 Filing",
    "UCR",
    "CA Number",
    "IFTA CA",
    "New Mexico WDT",
    "NYC (Hut Permit)",
    "BOC3 Filing",
    "Federal Tax ID",
    "S Corp Filing",
    "USDOT/MC Number",
    "Statement of Information",
    "Oregon Permit (Bond by Client)",
    "KYU Number",
  ];

  const secondServices = [
    "IRP License Plate Renewal",
    "2290 Tax Filing",
    "USDOT Update",
    "MC Number Update",
    "UCR Registration",
    "IFTA CA Permit Renewal",
    "Kentucky Permit Renewal",
    "New York Hut Permit Renewal",
    "Oregon Permit Renewal",
    "CARB Certificate Renewal",
    "Connecticut Permit Renewal",
    "IFTA CA Quarterly Fuel Tax Filing",
    "New Mexico Quarterly Fuel Tax Filing",
    "Kentucky Quarterly Fuel Tax Filing",
    "New York Hut Quarterly Fuel Tax Filing",
    "Oregon Monthly Tax Filing",
    "Connecticut Quarterly Tax Filing",
    "Arkansas Carrier Annual Report",
  ];

  const services = [
    {
      title: "Manage Trucking Permits",
      desc: "The FMCSA, the Federal Carrier Motor Safety Administration, is in charge of issuing US DOT numbers. We handle the entire process for you, making it simple to stay compliant with federal regulations.",
      tag: "",
      image: "/ser1.avif",
    },
    {
      title: "DOT Clearinghouse",
      desc: "Motorists in specific categories must register to access their stored electronic data. We streamline the registration process and help you maintain compliance with DOT Clearinghouse regulations.",
      tag: "",
      image: "/ser2.avif",
    },
    {
      title: "DOT Audit Support",
      desc: "Support for failing safety audits, corrective action plans, and navigating DOT documentation. Our team of experts will guide you through the audit process and help ensure you meet all requirements.",
      tag: "",
      image: "/ser3.avif",
    },
    {
      title: "Open New Trucking Company",
      desc: "At Tap Truck Permit & Services, we make launching your trucking company fast, easy, and stress-free—whether in-person or over the phone. From business registration to US DOT numbers, permits, drug testing, and FMCSA compliance, we handle everything in just 4–6 hours. Let our expert team manage the paperwork so you can focus on the road ahead.",
      tag: "",
      image: "/ser4.avif",
    },
    // {
    //   title: "Customer Insights",
    //   desc: "Unlock customer insights and drive better decision-making with our data-driven approach.",
    //   tag: "Analytics",
    //   image: "/truck3.jpeg",
    // },
    // {
    //   title: "Product Innovation",
    //   desc: "Accelerate product development and innovation through agile methodologies and design thinking.",
    //   tag: "Product",
    //   image: "/truck3.jpeg",
    // },
  ];

  const testimonials = [
    {
      name: "Balaji Trucking INC",

      rating: 5,
    },
    {
      name: "Top Carrier INC",
      role: "",

      rating: 5,
    },
    {
      name: "Lamba Transport LLC",

      rating: 5,
    },
  ];

  const service = [
    {
      id: 1,
      title: "Financial Management",
      description:
        "We'll help you optimize resources, manage cash flow effectively, and build sustainable financial strategies for long-term growth.",
      icon: PieChart,
      isOrange: true,
      size: "large",
    },
    {
      id: 2,
      title: "Process Optimization",
      description:
        "Our process optimization specialists will identify inefficiencies and streamline operations for maximum productivity.",
      icon: Crown,
      isOrange: false,
      size: "small",
    },
    {
      id: 3,
      title: "Business Development",
      description:
        "Develop a clear, forward-thinking strategy and an actionable plan to accelerate your business growth and market expansion.",
      icon: Building2,
      isOrange: true,
      size: "large",
    },
    {
      id: 4,
      title: "Competitive Analysis",
      description:
        "Stay ahead of the competition with our comprehensive market research and strategic positioning analysis.",
      icon: Globe,
      isOrange: false,
      size: "small",
    },
    {
      id: 5,
      title: "Technology Integration",
      description:
        "From adopting cutting-edge technologies to optimizing digital workflows, we help modernize your business operations.",
      icon: Cpu,
      isOrange: false,
      size: "small",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "15+", label: "Years Experience" },
  ];

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

  const sections = {
    about: {
      title: "Strategic Planning and Execution",
      description:
        "At TAP Services Inc., we specialize in helping aspiring and existing trucking business owners navigate the complexities of permits, licensing, and operational compliance. With deep industry knowledge and a commitment to your success, we offer end-to-end solutions — from startup guidance to ongoing documentation and renewal support.",
      features: [
        "Tailored Solutions for Your Unique Needs",
        "Seasoned Experts, Trusted Advisors",
        "Adapting to an Ever-Changing World",
      ],
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
      icon: User,
    },
    mission: {
      title: "Our Mission & Purpose",
      description:
        "To empower trucking entrepreneurs by simplifying compliance, streamlining paperwork, and delivering personalized support - so they can focus on growing their business, not just managing it.",
      features: [
        // "Empowering Global Business Transformation",
        // "Delivering Innovative & Sustainable Solutions",
        // "Creating Long-term Value & Impact",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      icon: Target,
    },
    vision: {
      title: "Our Vision for Tomorrow",
      description:
        "To become the most trusted partner for trucking businesses across the U.S., making compliance effortless and growth achievable — one permit at a time.",
      features: [
        // "Leading Global Business Excellence",
        // "Fostering Innovation & Sustainability",
        // "Building Future-Ready Organizations",
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center",
      icon: Eye,
    },
  };

  const handleSectionChange = (section) => {
    if (section === activeSection) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  const currentSection = sections[activeSection];
  const IconComponent = currentSection.icon;

  return (
    <>
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
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          {/* Enhanced glass overlay with red-orange tint */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-orange-500/20 to-red-600/40 backdrop-blur-sm"></div> */}

          {/* Additional glass layer for depth */}
          <div className="absolute inset-0 bg-white/5 "></div>

          {/* Main content with enhanced slide animation - Dynamic positioning */}
          <div
            className={`relative z-10  px-6 lg:px-12 py-16 w-full flex ${
              currentSlide % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.div
              key={currentSlide} // This ensures re-animation on slide change
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
                x: currentSlide % 2 === 0 ? -100 : 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                y: -80,
                scale: 0.9,
                x: currentSlide % 2 === 0 ? 100 : -100,
              }}
              transition={{
                duration: 1.2,
                ease: [0.4, 0.0, 0.2, 1],
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="max-w-xl bg-white/15 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-2xl space-y-6 relative"
            >
              {/* Inner glass reflection effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl"></div> */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: currentSlide % 2 === 0 ? -60 : 60,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 1.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="space-y-4 relative z-10"
              >
                <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {slides[currentSlide].title1}
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className=" text-orange-500 px-3 py-2 rounded-xl  shadow-lg"
                  >
                    {slides[currentSlide].titleGradient}
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    {slides[currentSlide].title2}
                  </motion.span>
                </h1>
                <motion.h2
                  initial={{
                    opacity: 0,
                    x: currentSlide % 2 === 0 ? -30 : 30,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="text-lg text-white/95 drop-shadow-lg"
                >
                  {slides[currentSlide].subheading}
                </motion.h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="text-white/85 text-md relative z-10 drop-shadow-md"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 relative z-10"
              >
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/90 backdrop-blur-md text-black font-bold px-8 py-4 rounded-xl shadow-2xl border border-white/50 hover:bg-white/95 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-2 border-white/60 bg-white/10 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-300 shadow-lg"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Navigation Arrows with glass effect */}
          <motion.button
            onClick={prevSlide}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-4 backdrop-blur-lg z-30 border border-white/30 shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 drop-shadow-md" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-4 backdrop-blur-lg z-30 border border-white/30 shadow-xl transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 drop-shadow-md" />
          </motion.button>

          {/* Enhanced Slide Dots with glass effect */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </section>

        <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-orange-50">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-1/3 w-48 h-48 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-full blur-2xl animate-float-delay"></div>
            <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/15 to-red-600/15 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Title and Arrows */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="text-lg font-semibold text-orange-600 mb-3 animate-fadeIn">
                  SERVICES
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fadeIn delay-200">
                  Our best services
                </h2>
              </div>
              {/* Custom Arrows */}
              <div className="flex space-x-3">
                <button
                  ref={prevRef}
                  className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  ref={nextRef}
                  className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // ✅ Safely cast swiper.params.navigation
                const nav = swiper.params.navigation as NavigationOptions;

                if (prevRef.current && nextRef.current) {
                  nav.prevEl = prevRef.current;
                  nav.nextEl = nextRef.current;
                }
              }}
              onSwiper={() => setSwiperReady(true)}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {services.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative group animate-fadeInUp delay-300">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative bg-white rounded-[2rem] p-8 h-[40rem] shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl flex items-center justify-center mr-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {service.desc}
                        </p>
                        <span className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
                          {service.tag}
                        </span>
                      </div>
                      <div className="mt-6 rounded-xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className=" object-fill"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Stats Section
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Services Section */}
        {/* <section id="services" className="py-20 bg-gray-50">
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
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-6 text-orange-600 font-semibold hover:text-red-600 transition-colors duration-200 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="relative py-20 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-1/3 w-48 h-48 bg-gradient-to-br from-red-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/15 to-red-600/15 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Main Content Card */}
            <div className="relative group animate-fadeInUp">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-00 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Top Section with Navigation Buttons */}
                <div className="p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight animate-fadeIn">
                    Let's shape a brighter future for your
                    <br />
                    business together
                  </h2>

                  {/* Navigation Buttons */}
                  <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn delay-200">
                    <button
                      onClick={() => handleSectionChange("about")}
                      className={`px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg ${
                        activeSection === "about"
                          ? "bg-white text-orange-600"
                          : "border-2 border-white text-white hover:bg-white hover:text-orange-600"
                      }`}
                    >
                      About Us
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

                {/* Bottom Section with Dynamic Content */}
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
                  {/* Left Content */}
                  <div
                    className={`transition-all duration-500 ${
                      isTransitioning
                        ? "opacity-0 translate-x-8"
                        : "opacity-100 translate-x-0"
                    }`}
                  >
                    {/* Icon and Title */}
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

                    {/* Feature List */}
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

                    {/* CTA Button */}
                    <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg group">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Right Image */}
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
                        src={currentSection.image}
                        alt={currentSection.title}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                      />
                      {/* Image overlay for better integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Content indicator */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Floating elements around image */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

            .animate-fadeIn {
              animation: fadeIn 0.6s ease-out forwards;
            }

            .animate-fadeInUp {
              animation: fadeInUp 0.8s ease-out forwards;
            }

            .delay-200 {
              animation-delay: 0.2s;
            }
          `}</style>
        </section>

        {/* <ServicePackages /> */}

        <section className="bg-[#f9f9f9] py-20 px-4" id="hero-services">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600">
              Our Service Packages
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Get benefit of essential services with our all-in-one packages.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <ServiceCard
              image="/poster2.png"
              title="INC Filing Package"
              price="Only $1249"
              services={firstServices}
            />
            <ServiceCard
              image="/poster1.png"
              title="Mastery Service Package"
              price="Only $349"
              services={secondServices}
            />
          </div>
        </section>

        <section className="relative py-20 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-red-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute bottom-20 left-1/5 w-32 h-32 bg-gradient-to-br from-red-300/15 to-orange-400/15 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Main Grid */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-5 items-stretch">
            {/* Box 1: Left Content */}
            <div className="animate-fadeIn  rounded-[1.5rem] p-8 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                TAP is the way
                <br />
                to Success
              </h2>
              <p className="text-gray-600 text-md leading-relaxed mb-8">
                Our team's relentless pursuit of precision and client
                satisfaction fuels everything we do. We don’t just handle
                documents — we fuel business growth for trucking professionals
                by delivering trusted, forward-thinking solutions.
              </p>
              <button className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 group">
                Our Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Box 2 */}
            <div className="animate-fadeInUp delay-200">
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative  rounded-[1.5rem] p-8 h-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-orange-500/90 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl  text-gray-900/80  md:text-3xl font-bold mb-4">
                      Financial
                      <br />
                      Management
                    </h3>
                    <p className="text-orange-500/90 mb-6 text-md leading-relaxed">
                      We help you make the most of your money. From budgeting
                      permit costs to managing annual renewals, our financial
                      planning ensures your trucking business stays profitable
                      and compliant.
                    </p>
                  </div>
                  <button className="inline-flex items-center text-orange-900/90  font-medium hover:translate-x-1 transition-transform duration-300 group/btn">
                    Look More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="animate-fadeInUp delay-200">
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-[1.5rem] p-8 h-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Process
                      <br />
                      Optimization
                    </h3>
                    <p className="text-white/90 mb-6 text-md leading-relaxed">
                      Your time is valuable. We streamline and automate your
                      compliance and registration processes, eliminating
                      paperwork headaches so you can focus on the road.
                    </p>
                  </div>
                  <button className="inline-flex items-center text-white font-medium hover:translate-x-1 transition-transform duration-300 group/btn">
                    Look More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="animate-fadeInUp delay-200">
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative  rounded-[1.5rem] p-8 h-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-orange-500/90 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl  text-gray-900/80  md:text-3xl font-bold mb-4">
                      Business
                      <br />
                      Development
                    </h3>
                    <p className="text-orange-500/90 mb-6 text-md leading-relaxed">
                      Need help growing your trucking business? From new company
                      setup to expanding your fleet, we provide strategic
                      guidance and step-by-step planning to drive long-term
                      success.
                    </p>
                  </div>
                  <button className="inline-flex items-center  text-orange-900/90  font-medium hover:translate-x-1 transition-transform duration-300 group/btn">
                    Look More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Box 5 */}
            <div className="animate-fadeInUp delay-200">
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-red-600 rounded-[1.5rem] p-8 h-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Competitive
                      <br />
                      Analysis
                    </h3>
                    <p className="text-white/90 mb-6 text-md leading-relaxed">
                      Stay ahead in a crowded market. We evaluate your
                      competition, identify opportunities, and recommend smart
                      actions to give your trucking business a winning edge.
                    </p>
                  </div>
                  <button className="inline-flex items-center text-white font-medium hover:translate-x-1 transition-transform duration-300 group/btn">
                    Look More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Box 6 */}
            <div className="animate-fadeInUp delay-200">
              <div className="relative group h-full">
                <div className="absolute -inset-0.5 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative  rounded-[1.5rem] p-8 h-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-orange-500/90 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl text-gray-900/80  md:text-3xl font-bold mb-4">
                      Technology
                      <br />
                      Integration
                    </h3>
                    <p className="text-orange-500/90 mb-6 text-md leading-relaxed">
                      From digital form filing to real-time document tracking,
                      we bring the latest tools to your fingertips. We help you
                      integrate efficient tech solutions that reduce effort and
                      boost productivity.
                    </p>
                  </div>
                  <button className="inline-flex items-center  text-orange-900/90  font-medium hover:translate-x-1 transition-transform duration-300 group/btn">
                    Look More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Animations */}
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

            .animate-fadeIn {
              animation: fadeIn 0.6s ease-out forwards;
            }

            .animate-fadeInUp {
              animation: fadeInUp 0.8s ease-out forwards;
            }

            .delay-200 {
              animation-delay: 0.2s;
            }
            .delay-300 {
              animation-delay: 0.3s;
            }
            .delay-400 {
              animation-delay: 0.4s;
            }
            .delay-500 {
              animation-delay: 0.5s;
            }
            .delay-600 {
              animation-delay: 0.6s;
            }
          `}</style>
        </section>

        {/* About Section with Tabs
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
                            ? "border-orange-500 bg-orange-50 text-orange-700"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-lg">
                            {tab.title}
                          </span>
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
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Get Started?
                  </h3>
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
                  <button className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section
          id="testimonials"
          className="relative py-24 bg-gradient-to-br from-orange-50 to-rose-100 overflow-hidden"
        >
          {/* Decorative background blur elements */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-float-slow z-0"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delay z-0"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don’t just take our word for it. Here’s what our clients have to
                say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl transition-transform duration-300 hover:scale-[1.03]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                    /> */}
                    <div>
                      <div className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </div>

      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-3deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-10px) rotate(8deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes subtle-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes subtle-bounce-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-2px);
          }
          75% {
            transform: translateY(-1px);
          }
        }

        @keyframes subtle-bounce-delay-2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          33% {
            transform: translateY(-2px);
          }
          66% {
            transform: translateY(-1px);
          }
        }

        @keyframes float-tiny {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(4px);
          }
        }

        @keyframes float-tiny-delay {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-6px) translateX(-3px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-subtle-bounce {
          animation: subtle-bounce 3s ease-in-out infinite;
        }

        .animate-subtle-bounce-delay {
          animation: subtle-bounce-delay 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-subtle-bounce-delay-2 {
          animation: subtle-bounce-delay-2 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-tiny {
          animation: float-tiny 4s ease-in-out infinite;
        }

        .animate-float-tiny-delay {
          animation: float-tiny-delay 5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </>
  );
};

export default BecoLandingPage;
