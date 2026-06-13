import { FaMapMarkerAlt } from "react-icons/fa";
import dest1 from "../assets/dest1.avif";
import dest2 from "../assets/dest2.avif";
import dest3 from "../assets/dest3.avif";
import dest4 from "../assets/dest4.avif";
import dest5 from "../assets/dest5.avif";
import dest6 from "../assets/dest6.avif";

const destinations = [
  {
    name: "Dubai",
    country: "UAE",
    image:
      dest1,
    price: "From ₦899,000",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image:
      dest2,
    price: "From ₦699,000",
  },
  {
    name: "Maldives",
    country: "Maldives",
    image:
      dest3,
    price: "From ₦1,299,000",
  },
  {
    name: "Paris",
    country: "France",
    image:
      dest4,
    price: "From ₦999,000",
  },
  {
    name: "Santorini",
    country: "Greece",
    image:
      dest5,
    price: "From ₦1,150,000",
  },
  {
    name: "New York",
    country: "USA",
    image:
      dest6,
    price: "From ₦1,050,000",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Top Destinations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Explore Popular Places
          </h2>

          <p className="text-slate-500 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Discover handpicked destinations loved by travelers around the
            world. Start your next adventure with unforgettable experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                shadow-lg
                cursor-pointer
                bg-white
                dark:bg-secondary
              "
            >
              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="
                  w-full
                  h-72
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{place.country}</span>
                </div>

                <h3 className="text-2xl font-bold">{place.name}</h3>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-white font-semibold bg-white/10 px-3 py-1 rounded-full">
                    {place.price}
                  </span>

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
                    Explore
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

export default PopularDestinations;
