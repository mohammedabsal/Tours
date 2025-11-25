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
      className={`fixed left-1/2 transform -translate-x-1/2 top-6 z-50 w-[94%] max-w-7xl transition-all ${
        scroll ? "backdrop-blur-md bg-white/6 shadow-xl" : "bg-transparent"
      } rounded-b-2xl`}
    >
      <style>{`
        /* stronger, more vivid nav colors */
        .nav-link{ position:relative; display:inline-block; padding:0.35rem 0.5rem; color:rgba(16,184,130,0.98); font-weight:600 }
        .nav-link span{ position:relative; z-index:2; }
        /* brighter gradient underline */
        .nav-link::after{ content:''; position:absolute; left:8%; right:8%; bottom:-8px; height:4px; background: linear-gradient(90deg,#2ee6a1,#059669); transform:scaleX(0); transform-origin:center; transition:transform .26s cubic-bezier(.2,.9,.2,1); border-radius:4px; }
        .nav-link:hover::after, .nav-link:focus::after{ transform:scaleX(1); }
        .nav-bar-inner{ display:flex; align-items:center; justify-content:space-between; gap:1rem; }
        .nav-links{ display:flex; gap:1.5rem; align-items:center; }
        /* Light variant for non-scrolled state: vivid mint */
        :where(.bg-transparent) .nav-link{ color: #24e487ff; }
      `}</style>

      <div className="nav-bar-inner max-w-7xl mx-auto px-5 py-3 text-emerald-50">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-200">Aslam Holidays</h1>
        </div>

        <div className="hidden md:flex nav-links">
          <a href={`${base}#services`} onClick={(e) => navigateToHash(e, 'services')} className="nav-link"><span>Services</span></a>
          <a href={`${base}#packages`} onClick={(e) => navigateToHash(e, 'packages')} className="nav-link"><span>Packages</span></a>
          <a href={`${base}#gallery`} onClick={(e) => navigateToHash(e, 'gallery')} className="nav-link"><span>Gallery</span></a>
          <a href={`${base}#contact`} onClick={(e) => navigateToHash(e, 'contact')} className="nav-link"><span>Contact</span></a>
        </div>
      </div>
    </Motion.nav>
  );
}
