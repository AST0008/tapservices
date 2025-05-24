import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-gray-800 text-gray-300 py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold text-gray-400">
            <span className="text-orange-500">Tap</span>services
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center text-red-500 gap-8">
          <a href="#about" className={cn("nav-link", scrolled ? "text-gray-600": "text-gray-200")}>
            About
          </a>
          <a href="#services" className={cn("nav-link", scrolled ? "text-gray-600": "text-gray-200")}>
            Services
          </a>
          <a href="#statistics" className={cn("nav-link", scrolled ? "text-gray-600": "text-gray-200")}>
            Statistics
          </a>
          <a href="#testimonials" className={cn("nav-link", scrolled ? "text-gray-600": "text-gray-200")}>
            Testimonials
          </a>
          <a href="#news" className={cn("nav-link", scrolled ? "text-gray-600": "text-gray-200")}>
            News
          </a>
          <a href="#contact" className={cn("nav-link", scrolled ? "text-gray-600": "text-gray-200")}>
            Contact
          </a>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(mobileMenuOpen ? "hidden" : "block")}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(mobileMenuOpen ? "block" : "hidden")}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <div className="container flex flex-col gap-4">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#statistics" className="nav-link">
            Statistics
          </a>
          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
          <a href="#news" className="nav-link">
            News
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
