import { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "Suresh", text: "Amazing trip! Great service and smooth ride.", rating: 5 },
    { name: "Kesavan", text: "Loved the stay, the cottage was beautiful.", rating: 5 },
    { name: "Hari", text: "Professional driver & well planned sightseeing.", rating: 4 },
    {name: "Ishaan" , text: "Best travel experience ever!", rating: 5 },
    {name: "Ram ", text: "Highly recommend Aslam Holidays for Kodaikanal trips.", rating: 5 },
    {name:"Haroon", text: "Comfortable vehicles and friendly staff.", rating: 4 },
    {name:"Puvi", text: "Memorable experience, will book again!", rating: 5 },
    {name:"Paul", text: "Great value for money and excellent service.", rating: 5 },
    {name:"saravanan", text: "The itinerary was perfect for our family.", rating: 4 },
    {name:"Dravid", text: "Exceptional experience from start to finish.", rating: 5 },
    {name:"Sriram", text: "Truly a hassle-free and enjoyable trip.", rating: 5 },
    {name:"Harshan", text: "The best way to explore Kodaikanal!", rating: 5 },
    {name: "Girish", text: "Amazing trip! Great service and smooth ride.", rating: 5 },
    { name: "Dhuvarakesh", text: "Exceptional experience from start to finish.", rating: 5 }
  ];

  const renderStars = (rating = 5) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const filled = i < rating;
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={filled ? "#f59e0b" : "none"}
          stroke={filled ? "#f59e0b" : "#fbbf24"}
          className="w-4 h-4">
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.174L12 18.897 4.664 23.171l1.402-8.174L.132 9.21l8.2-1.192z" />
        </svg>
      );
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % reviews.length);
      }, 4500);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, reviews.length]);

  function next() {
    setIndex((i) => (i + 1) % reviews.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-r from-emerald-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-emerald-900">What Customers Say</h2>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="bg-gradient-to-b from-white/95 to-emerald-50/6 p-8 md:p-10 rounded-xl shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-start">
                  <p className="text-gray-700 text-lg">“{reviews[index].text}”</p>
                  <div className="mt-4">{renderStars(reviews[index].rating)}</div>
                </div>

                <div className="text-right">
                  <h3 className="font-bold text-emerald-600">{reviews[index].name}</h3>
                  <div className="text-sm text-gray-500">Verified Traveler</div>
                </div>
              </div>
            </Motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous review"
              className="pointer-events-auto rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next review"
              className="pointer-events-auto rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-white/60'}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
