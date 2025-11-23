import { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://YOUR_BACKEND_URL/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 text-emerald-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-800/60 to-emerald-700/30 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold">WhatsApp / Phone</p>
              <p className="mt-1">+91 90808 06831 • +91 98423 06461 • +91 99448 81312</p>
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <p className="mt-1">rajartr22@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold">Address</p>
              <p className="mt-1">Annasalai, Kodaikanal - 1</p>
            </div>
          </div>

          <div className="mt-6">
            <Motion.form
              className="grid gap-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-lg text-emerald-900"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-lg text-emerald-900"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <textarea
                placeholder="Your Message"
                className="p-4 h-28 rounded-lg text-emerald-900"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <div className="flex gap-3">
                <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold text-white">
                  Send
                </button>

                <a
                  href="https://wa.me/919080806831?text=Hi%20I%20am%20interested%20in%20your%20tours"
                  className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </Motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
