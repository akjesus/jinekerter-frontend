import { FaGlobeAfrica, FaUsers, FaAward, FaPlane } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const stats = [
  { icon: <FaUsers />, label: "Happy Travelers", value: "15,000+" },
  { icon: <FaGlobeAfrica />, label: "Destinations", value: "300+" },
  { icon: <FaPlane />, label: "Tours Completed", value: "1,200+" },
  { icon: <FaAward />, label: "Years Experience", value: "12+" },
];

const team = [
  {
    name: "Idara Francis Edet",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amina Yusuf",
    role: "Travel Experience Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const About = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            We Create Unforgettable Travel Experiences
          </h1>
          <p className="mt-4 text-slate-200">
            Your journey is more than a trip — it's a story waiting to be
            written. We help you explore the world with ease, comfort, and
            confidence.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            We believe travel should be simple, accessible, and unforgettable.
            Our mission is to connect people with the world’s most beautiful
            destinations through curated, seamless travel experiences.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            From luxury escapes to adventure tours, we take care of every detail
            so you can focus on the journey.
          </p>
          <br></br>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            To inspire meaningful connections through travel — creating positive
            cultural exchange, sustainable tourism, and unforgettable moments
            that enrich people's lives and the communities they visit.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            We strive to make responsible travel accessible to everyone while
            preserving the places we explore for future generations.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80"
          className="rounded-3xl shadow-lg"
        />
      </section>

      {/* STATS */}
      <section className="bg-slate-100 dark:bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="text-primary text-3xl flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold">{s.value}</h3>
              <p className="text-slate-500 dark:text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trusted Expertise",
              desc: "Over a decade of experience in crafting unforgettable journeys.",
            },
            {
              title: "Best Price Guarantee",
              desc: "We offer competitive pricing without compromising quality.",
            },
            {
              title: "24/7 Support",
              desc: "Our team is always available to assist you wherever you are.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                dark:bg-slate-900
                p-6
                rounded-3xl
                shadow-lg
              "
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-50 dark:bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center bg-white dark:bg-secondary p-6 rounded-3xl shadow-lg"
              >
                <img
                  src={member.image}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />

                <h3 className="text-xl font-bold">{member.name}</h3>

                <p className="text-slate-500 dark:text-slate-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
