import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const base = import.meta.env.BASE_URL || "/";

  function navigateToHash(e, id) {
    // allow regular modifier-clicks (open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof el.focus === "function") el.focus();
      // update URL hash without jumping
      history.replaceState(null, '', base + '#' + id);
    } else {
      // fallback: navigate to the anchored URL
      window.location.href = base + '#' + id;
    }
  }

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
          <a href={`${base}#services`} onClick={(e) => navigateToHash(e, 'services')} className="hover:text-emerald-200">Services</a>
          <a href={`${base}#packages`} onClick={(e) => navigateToHash(e, 'packages')} className="hover:text-emerald-200">Packages</a>
          <a href={`${base}#gallery`} onClick={(e) => navigateToHash(e, 'gallery')} className="hover:text-emerald-200">Gallery</a>
          <a href={`${base}#contact`} onClick={(e) => navigateToHash(e, 'contact')} className="hover:text-emerald-200">Contact</a>
        </div>
      </div>
    </Motion.nav>
  );
}
