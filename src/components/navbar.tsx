import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
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
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl flex gap-2 font-bold text-gray-400">
            {scrolled ? (
              <img src="/logo-black.png" height={10} width={80} />
            ) : (
              <img src="/logo.png" height={10} width={80} />
            )}
            <span className="text-orange-500">Tap</span>services Inc.
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center text-red-500 gap-8 relative">
          <a
            href="/"
            className={cn(
              "nav-link",
              scrolled ? "text-gray-600" : "text-gray-200"
            )}
          >
            Home
          </a>
          <a
            href="/aboutus"
            className={cn(
              "nav-link",
              scrolled ? "text-gray-600" : "text-gray-200"
            )}
          >
            About Us
          </a>
          <a
            href="/courses"
            className={cn(
              "nav-link",
              scrolled ? "text-gray-600" : "text-gray-200"
            )}
          >
            Courses
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={cn(
                "nav-link flex items-center gap-1",
                scrolled ? "text-gray-600" : "text-gray-200"
              )}
            >
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border rounded shadow-md z-50">
                <a
                  href="/open-new-trucking-company"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  Open New Trucking Company
                </a>
                <a
                  href="/manage-trucking-permits"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  Manage Trucking Permits
                </a>
                <a
                  href="/dot-drug-and-alcohol-testing"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  DOT Drug and Alcohol Testing
                </a>
                <a
                  href="/dot-audit-support"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  DOT Audit Support
                </a>
                <a
                  href="/dot-clearinghouse"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  DOT Clearing House
                </a>
                <a
                  href="/ifta-fuel-tax-return"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  IFTA Fue Tax
                </a>
                <a
                  href="/oregon-truck-permits"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  Oregon Truck Permits
                </a>
              </div>
            )}
          </div>

          {/* <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            Get Started
          </Button> */}
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
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/aboutus" className="nav-link">
            About
          </a>
          <a href="/courses" className="nav-link">
            Courses
          </a>

          {/* Mobile Services Toggle */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between px-4 text-left"
          >
            <span className="nav-link">Services</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="ml-4 flex flex-col gap-2">
              <a href="/open-new-trucking-company" className="text-gray-800">
                Open New Trucking Company
              </a>
              <a href="/manage-trucking-permits" className="text-gray-800">
                Manage Trucking Permits
              </a>
              <a href="/dot-drug-and-alcohol-testing" className="text-gray-800">
                DOT Drug and Alcohol Testing
              </a>
              <a href="/dot-audit-support" className="text-gray-800">
                DOT Audit Support
              </a>
              <a href="/dot-clearinghouse" className="text-gray-800">
                DOT Clearing House
              </a>
              <a href="/ifta-fuel-tax-return" className="text-gray-800">
                IFTA Fue Tax
              </a>
              <a href="/oregon-truck-permits" className="text-gray-800">
                Oregon Truck Permits
              </a>
            </div>
          )}

          {/* <a href="#statistics" className="nav-link">
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
          </a> */}

          {/* <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full">
            Get Started
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
