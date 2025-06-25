import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenPopup", "true");
    document.body.style.overflow = "auto";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  z-[70] flex items-center   justify-center bg-black/60 backdrop-blur-md px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 max-w-5xl w-full"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-20 lg:top-8 right-4 z-50 w-10 h-10   flex items-center justify-center bg-black  hover:bg-opacity-80 text-white rounded-full transition-all bg-black shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Posters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="/poster1.jpg"
            alt="Poster 1"
            className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/poster2.jpg"
            alt="Poster 2"
            className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
