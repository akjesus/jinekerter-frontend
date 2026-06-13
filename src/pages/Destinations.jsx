import { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import DestinationModal from "../components/DestinationModal";
import dest from "../assets/dest.avif";
import d1 from "../assets/d1.avif";
import d2 from "../assets/d2.avif";
import d3 from "../assets/d3.avif";
import d4 from "../assets/d4.avif";
import d5 from "../assets/d5.avif";
import d6 from "../assets/d6.avif";

const destinations = [
  {
    name: "Dubai",
    country: "UAE",
    category: "City Lights",
    price: 899000,
    rating: 4.8,
    image: d1,
    highlights: [
      "Luxury accommodation",
      "World-class dining",
      "Exclusive experiences",
    ],
  },
  {
    name: "Bali",
    country: "Indonesia",
    category: "Cultural Journey",
    price: 699000,
    rating: 4.9,
    image: d2,
    highlights: ["Tropical beaches", "Rich culture", "Active lifestyle"],
  },
  {
    name: "Maldives",
    country: "Maldives",
    category: "Luxury Retreat",
    price: 1299000,
    rating: 5.0,
    image: d3,
    highlights: [
      "Crystal clear waters",
      "Overwater bungalows",
      "Rich marine life",
    ],
  },
  {
    name: "Paris",
    country: "France",
    category: "Luxury Retreat",
    price: 999000,
    rating: 4.7,
    image: d4,
    highlights: [
      "Iconic landmarks",
      "Romantic atmosphere",
      "World-class cuisine",
    ],
  },
  {
    name: "Safari Kenya",
    country: "Kenya",
    category: "Mountain Adventure",
    price: 1100000,
    rating: 4.8,
    image: d5,
    highlights: ["Safari experiences", "Wildlife encounters", "Cultural tours"],
  },
  {
    name: "New York",
    country: "USA",
    category: "Beach Escape",
    price: 1050000,
    rating: 4.6,
    image: d6,
    highlights: [
      "Iconic landmarks",
      "Cultural diversity",
      "World-class entertainment",
    ],
  },
];

const vibes = [
  "All",
  "Beach Escape",
  "Mountain Adventure",
  "Luxury Retreat",
  "City Lights",
  "Cultural Journey",
];

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = destinations.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={dest}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover the World’s Most Beautiful Places
          </h1>
          <p className="mt-4 text-slate-200">
            Explore handpicked destinations curated for unforgettable travel
            experiences.
          </p>
        </div>
      </section>
      <div className="py-24 bg-white dark:bg-slate-950 min-h-screen">
        {/* <div className="relative h-[60vh] mb-16 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-3xl mx-auto px-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold">
                Discover the World’s Most Beautiful Places
              </h1>

              <p className="mt-4 text-slate-200">
                Explore handpicked destinations curated for unforgettable travel
                experiences.
              </p>
            </div>
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-primary font-semibold uppercase">
              Explore Destinations
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Find Your Perfect Place
            </h1>

            <p className="text-slate-500 dark:text-slate-300 mt-4">
              Search and discover amazing travel destinations worldwide.
            </p>
          </div>

          {/* Search + Filter */}
          <h2 className="text-2xl font-bold mb-4">Explore by Travel Vibe</h2>
          <div className="flex flex-col lg:flex-row gap-4 justify-between mb-10">
            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
              w-full lg:w-1/3
              px-4 py-3
              border
              dark:border-slate-700
              rounded-xl
              bg-transparent
              outline-none
            "
            />

            <div className="flex flex-wrap gap-3">
              {vibes.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                  px-5 py-2 rounded-full border transition
                  ${
                    selectedCategory === cat
                      ? "bg-primary text-white border-primary"
                      : "border-slate-300 dark:border-slate-700 hover:border-primary"
                  }
                `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(item)}
                className="
                group
                bg-white
                dark:bg-secondary
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:-translate-y-2
                transition
                duration-300
                hover:cursor-pointer
              "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    h-64
                    w-full
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                  />

                  {/* Price badge */}
                  <div
                    className="
                  absolute top-4 left-4
                  bg-primary
                  text-white
                  px-3 py-1
                  rounded-full
                  text-sm
                "
                  >
                    {item.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <FaMapMarkerAlt />
                    {item.country}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>

                  <p className="text-slate-500 dark:text-slate-300 text-sm mb-4">
                    Experience the beauty and culture of {item.name} with
                    curated travel experiences.
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Starting from
                    </span>

                    <span className="text-xl font-bold text-primary">
                      {item.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DestinationModal
        destination={selected}
        onClose={() => setSelected(null)}
      />
      <Footer />
    </div>
  );
};

export default Destinations;
