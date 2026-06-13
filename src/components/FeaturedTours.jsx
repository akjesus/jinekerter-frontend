import { FaStar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getFeatured } from "../api/tours";

const tagColor = (tag) => {
  switch ((tag || "").toLowerCase()) {
    case "best seller":
      return "bg-green-600 text-white";
    case "budget":
      return "bg-green-600 text-white";
    case "luxury":
      return "bg-purple-600 text-white";
    case "romantic":
      return "bg-pink-500 text-white";
    case "premium":
      return "bg-rose-600 text-white";
    case "adventure":
      return "bg-amber-500 text-white";
    default:
      return "bg-primary text-white";
  }
};

const FeaturedTours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await getFeatured();
        setTours(res.data.tours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    fetchTours();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Featured Tours
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Popular Travel Packages
          </h2>

          <p className="text-slate-500 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Handpicked experiences crafted for unforgettable journeys around the
            world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="
                group
                bg-white
                dark:bg-secondary
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.imageCover}
                  alt={tour.name}
                  className="
                    w-full
                    h-52
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

                {/* Tag */}
                <span
                  className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full ${tagColor(tour.tag)}`}
                >
                  {tour.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300 mb-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <div>
                    {Object.entries(tour.startLocation).map(([key, value]) => (
                      <li key={key}>{String(value)}</li>
                    ))}
                  </div>
                </div>

                {/* name */}
                <h3 className="text-lg font-bold mb-3">{tour.name}</h3>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300 mb-4">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-primary" />
                    {tour.duration} Days
                  </div>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {tour.ratingsAverage}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-secondary dark:text-white">
                    {tour.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </p>

                  <button
                    className="
                    bg-accent
                    hover:bg-orange-600
                    text-white
                    px-4
                    py-2
                    rounded-full
                    text-sm
                  "
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
