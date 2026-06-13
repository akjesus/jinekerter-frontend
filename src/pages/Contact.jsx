import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import contactImg from "../assets/contact.avif";
import contactmap from "../assets/contactmap.webp";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later connect to backend / email service
    console.log("Form submitted:", form);

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappNumber = "+2349118904414"; 
  const whatsappMessage = "Hello, I want to book a tour!";

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center">
        <img
          src={contactImg}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Get In Touch With Us
        </h1>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
        {/* LEFT - FORM */}
        <div className="bg-slate-50 dark:bg-secondary p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent outline-none"
              required
            />

            <button
              type="submit"
              className="
                w-full
                bg-primary
                hover:bg-orange-600
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - INFO + MAP */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="grid gap-4">
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-secondary p-4 rounded-2xl">
              <FaPhone className="text-primary text-xl" />
              <span>+2349118904414</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-secondary p-4 rounded-2xl">
              <FaEnvelope className="text-primary text-xl" />
              <span>info@jinekerter.com</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-secondary p-4 rounded-2xl">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <span>
                Plot 165, Edet Akpan Avenue, 4 Lanes, 
                Adjacent PHED Office, Uyo
                Akwa Ibom State, Nigeria
              </span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2
              bg-green-500 hover:bg-green-600
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src={contactmap} alt="Contact Map" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
