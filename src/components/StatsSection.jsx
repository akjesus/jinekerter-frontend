import { useEffect, useState } from "react";
import { FaGlobeAfrica, FaPlane, FaSmile, FaAward } from "react-icons/fa";

const statsData = [
  {
    icon: <FaSmile />,
    label: "Happy Travelers",
    value: 15000,
    suffix: "+",
  },
  {
    icon: <FaGlobeAfrica />,
    label: "Destinations",
    value: 300,
    suffix: "+",
  },
  {
    icon: <FaPlane />,
    label: "Tours Completed",
    value: 1200,
    suffix: "+",
  },
  {
    icon: <FaAward />,
    label: "Years Experience",
    value: 12,
    suffix: "+",
  },
];

// Counter hook
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

const StatsSection = () => {
  const travelers = useCounter(15000);
  const destinations = useCounter(300);
  const tours = useCounter(1200);
  const years = useCounter(12);

  const stats = [
    { ...statsData[0], value: travelers },
    { ...statsData[1], value: destinations },
    { ...statsData[2], value: tours },
    { ...statsData[3], value: years },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-secondary to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Our Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Trusted by Travelers Worldwide
          </h2>

          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            We’ve helped thousands of travelers explore the world with
            confidence and ease.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div className="text-primary text-3xl mb-4 flex justify-center">
                {stat.icon}
              </div>

              {/* Counter */}
              <h3 className="text-4xl font-bold">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </h3>

              {/* Label */}
              <p className="text-slate-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
