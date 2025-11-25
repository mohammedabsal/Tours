import { motion as Motion } from "framer-motion";
import poompariImg from "../assets/poompari.png";
import pambarImg from "../assets/pambarfalls.jpg";
import pineforestImg from "../assets/pine-forest.jpg";
import mforest from "../assets/mforest.jpg";
import oldtreeImg from "../assets/oldtree.jpg";
export default function Packages() {
  const tours = [
    {
      id: 1,
      name: "Village Tour (Tour No.1)",
      img: poompariImg,
      stops: [
        "Mahalakshmi Temple",
        "Palani View (on the Way)",
        "Poombari Village",
        "Garlic Farm",
        "Kulanthai Vellappar Temple",
        "Mannanavur Lake View",
        "Sheep & Rabbit Farm",
        "Mannanavur Lake Boating"
      ]
    },
    {
      id: 2,
      name: "Park Tour (Tour No.2)",
      img: pambarImg,
      stops: [
        "Coaker's Walk",
        "500 Years Old Tree",
        "La Saleth Church (137 Years Old)",
        "Pambar Falls",
        "Shopping Centre",
        "Bryant Park (Flower Show Garden)",
        "Kodai Lake Drop"
      ]
    },
    {
      id: 3,
      name: "Forest / Park Tour (Tour No.3)",
      img: pineforestImg,
      stops: [
        "Moir Point",
        "Upper Lake View",
        "Green Valley View",
        "Golf Course",
        "Pillar Rocks",
        "Devil's Kitchen (Guna Cave)",
        "Pine Forest (Cine Shooting Place)",
        "Kodai Lake (or City Drop)"
      ]
    },
    {
      id: 4,
      name: "Forest Tour (Wild Way's Tour) (Tour No.4)",
      img: mforest,
      stops: [
        "Silent Valley View",
        "Fire Watching Tower",
        "Berijam Lake View",
        "Cap's Fly Valley",
        "Mathikettan Forest View (Memory Loss)",
        "Berijam Lake",
        "Bryant Park",
        "Kodai Lake (or City Drop)"
      ]
    },
    {
      id: 5,
      name: "Flim Chakker Tour (Tour No.5)",
      img: oldtreeImg,
      stops: [
        "Vattakanal Falls",
        "500 Years Old Tree",
        "Echo Rock",
        "Dolphin Noise",
        "Mountain Beauty",
        "Tower View",
        "Kodai Lake",
        "Bryant Park"
      ]
    }
  ];

  return (
    <section id="packages" className="py-20">
      {/* Inline styles for the flowing background and glowing cards */}
      <style>{`
        .packages-flow-bg{
          position:relative;
          overflow:hidden;
          border-radius:1rem;
          padding:3rem 0;
          /* soft animated gradient */
          background: linear-gradient(120deg, rgba(236,253,245,0.9), rgba(237,249,238,0.95) 30%, rgba(255,255,255,0.95));
        }

        .packages-flow-bg::before{
          content:'';
          position:absolute;
          inset:-30% -20% -30% -20%;
          background: linear-gradient(60deg, rgba(16,185,129,0.08), rgba(34,197,94,0.06) 25%, rgba(16,185,129,0.04));
          background-size: 300% 300%;
          filter: blur(32px) saturate(120%);
          opacity:0.85;
          animation: flow 14s linear infinite;
          z-index:0;
          pointer-events:none;
        }

        @keyframes flow{
          0%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
          100%{background-position:0% 50%;}
        }

        /* Package card base: translucent with subtle glow */
        .pkg-card{
          position:relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(16,185,129,0.06);
          box-shadow: 0 8px 30px rgba(16,185,129,0.05);
          transition: transform .28s cubic-bezier(.2,.9,.2,1), box-shadow .28s ease, border-color .28s ease;
          z-index:1; /* sit above the background gradient */
        }

        /* glowing outline using spread shadow + faint ring */
        .pkg-card::after{
          content:'';
          position:absolute;
          inset:0;
          border-radius:inherit;
          pointer-events:none;
          box-shadow: 0 0 0 4px rgba(16,185,129,0.02), 0 10px 30px rgba(16,185,129,0.04);
          transition: box-shadow .28s ease, opacity .28s ease;
          opacity:1;
        }

        /* hover / focus / active visual increase */
        .pkg-card:hover, .pkg-card:focus-within, .pkg-card--active{
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(16,185,129,0.16);
          box-shadow: 0 20px 70px rgba(16,185,129,0.18);
        }

        .pkg-card:hover::after, .pkg-card:focus-within::after, .pkg-card--active::after{
          box-shadow: 0 0 0 8px rgba(16,185,129,0.06), 0 30px 80px rgba(16,185,129,0.16);
        }

        /* small pulse animation for touch (optional subtle) */
        @keyframes pulse-outline{
          0%{transform:scale(1); opacity:1}
          50%{transform:scale(1.02); opacity:0.95}
          100%{transform:scale(1); opacity:1}
        }

        .pkg-card.pulse{
          animation: pulse-outline .45s ease-in-out;
        }

        /* ensure images sit above background but inside card */
        .pkg-card img{ display:block; }
      `}</style>

      <div className="packages-flow-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-900">Tour Packages</h2>

          <div className="grid md:grid-cols-3 gap-10">
          {tours.map((t, i) => (
            <Motion.div
              key={t.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }}
              className="pkg-card rounded-xl overflow-hidden transform"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
              }}
              onTouchStart={(e) => e.currentTarget.classList.add('pkg-card--active','pulse')}
              onTouchEnd={(e) => { e.currentTarget.classList.remove('pkg-card--active'); setTimeout(()=> e.currentTarget.classList.remove('pulse'), 500); }}
            >
              <div className="overflow-hidden">
                <Motion.img whileHover={{ scale: 1.05 }} src={t.img} alt={t.name} className="w-full h-56 object-cover" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold mb-2 text-emerald-900">{t.name}</h3>
                  <p className="text-emerald-600 font-bold">{t.price}</p>
                </div>

                <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1 max-h-40 overflow-auto">
                  {t.stops.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-3">
                  <a
                    href={`https://wa.me/919080806831?text=${encodeURIComponent("I'm interested in the " + t.name)}`}
                    className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-lg hover:brightness-105 transition"
                  >
                    Book Now
                  </a>
                  <a
                    href="#owner"
                    onClick={(e) => {
                      e.preventDefault();
                      const id = 'owner';
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        if (typeof el.focus === 'function') el.focus();
                      } else {
                        // fallback to hash navigation
                        window.location.hash = id;
                      }
                    }}
                    className="inline-block border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
