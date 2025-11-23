import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  return (
    <Motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scroll ? "bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-emerald-700/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center text-emerald-50">
        <h1 className="text-xl font-bold tracking-wide">Aslam Holidays</h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-emerald-200">Services</a>
          <a href="#packages" className="hover:text-emerald-200">Packages</a>
          <a href="#gallery" className="hover:text-emerald-200">Gallery</a>
          <a href="#contact" className="hover:text-emerald-200">Contact</a>
        </div>
      </div>
    </Motion.nav>
  );
}
