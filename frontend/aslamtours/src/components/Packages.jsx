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
    <section id="packages" className="py-20 bg-gradient-to-r from-emerald-50 to-emerald-100">
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
              className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                    className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                  >
                    Book Now
                  </a>
                  <a
                    href={`#${t.id === 1 ? 'owner' : 'contact'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = t.id === 1 ? 'owner' : 'contact';
                      const el = document.getElementById(id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        if (typeof el.focus === 'function') el.focus();
                      } else {
                        // fallback to hash navigation
                        window.location.hash = id;
                      }
                    }}
                    className="inline-block border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
