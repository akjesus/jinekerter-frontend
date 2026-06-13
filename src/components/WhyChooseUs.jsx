import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { FaGlobe, FaShieldAlt, FaPlane, FaHeadset } from "react-icons/fa";

const statsData = [
  { label: "Happy Travelers", value: 15000 },
  { label: "Destinations", value: 300 },
  { label: "Tours Completed", value: 1200 },
  { label: "Years Experience", value: 12 },
];

const features = [
  {
    icon: <FaGlobe />,
    title: "Global Destinations",
    desc: "Explore curated travel experiences across 100+ countries worldwide.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Booking",
    desc: "Your payments and personal data are fully protected at all times.",
  },
  {
    icon: <FaPlane />,
    title: "Fast & Easy Travel",
    desc: "Hassle-free booking with instant confirmations and updates.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our travel experts are always available to assist you anytime.",
  },
];

// Animated counter hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const WhyChooseUs = () => {
  const travelers = useCounter(15000);
  const destinations = useCounter(300);
  const tours = useCounter(1200);
  const years = useCounter(12);

  const counters = [
    { label: "Happy Travelers", value: travelers },
    { label: "Destinations", value: destinations },
    { label: "Tours Completed", value: tours },
    { label: "Years Experience", value: years },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            We Make Travel Simple & Memorable
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                bg-white
                dark:bg-secondary
                p-8
                rounded-3xl
                shadow-xl
                cursor-pointer
                transform-gpu
                perspective
              "
            >
              <div className="text-primary text-3xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-slate-500 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-8
          text-center
          bg-white
          dark:bg-secondary
          rounded-3xl
          p-10
          shadow-xl
        "
        >
          {counters.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-primary">{stat.value}+</h3>

              <p className="text-slate-600 dark:text-slate-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
