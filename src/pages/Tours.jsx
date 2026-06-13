import { useState, useEffect } from "react";
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { getTours } from "../api/tours";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
const categories = ["All", "Budget", "Luxury", "Adventure", "Romantic", "Premium"];

const Tours = () => {
  const [tours, setTours] = useState([]);
    useEffect(() => {
      const fetchTours = async () => {
        try {
          const res = await getTours();
          console.log( res.data.tours);
          setTours(res.data.tours);
        } catch (error) {
          console.error("Error fetching tours:", error);
        }
      };
      fetchTours();
    }, []);

  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTours = tours.filter((tour) => {
    const matchCategory =
      selectedCategory === "All" || tour.tag === selectedCategory;

    const matchSearch =
      tour.name.toLowerCase().includes(search.toLowerCase()) ||
      tour.location.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Book Curated Travel Experiences
          </h1>
          <p className="mt-4 text-slate-200">
            Handcrafted tour packages with hotels, guides, and activities
            included.
          </p>
        </div>
      </section>
      <div className="py-24 bg-white dark:bg-slate-950 min-h-screen">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            "Hotel Accommodation",
            "Professional Tour Guides",
            "Daily Breakfast Included",
            "Airport Pickup & Drop",
            "Entry Tickets Included",
            "24/7 Travel Support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-secondary p-6 rounded-2xl shadow"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-10">
            <p className="text-primary font-semibold uppercase">
              Explore Tours
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Find Your Perfect Tour Package
            </h1>

            <p className="text-slate-500 dark:text-slate-300 mt-4">
              Browse curated travel experiences across the world.
            </p>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between mb-10">
            <input
              type="text"
              placeholder="Search tours or destinations..."
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
              {categories.map((cat) => (
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

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour._id}
                className="
                group
                bg-white
                dark:bg-secondary
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:-translate-y-2
                transition
              "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={tour.imageCover}
                    alt={tour.name}
                    className="
                    h-64 w-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                  />

                  {/* TAG */}
                  <span
                    className={`
                      absolute top-4 left-4
                      ${tagColor(tour.tag)}
                      text-xs
                  px-3 py-1
                  rounded-full
                `}
                  >
                    {tour.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300 mb-2">
                    <FaMapMarkerAlt className="text-primary" />
                    {tour.location}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{tour.name}</h3>

                  {/* META */}
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300 mb-4">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-primary" />
                      {tour.duration}
                    </div>

                    <div className="flex items-center gap-1 text-accent">
                      <FaStar />
                      {tour.ratingsAverage}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">
                      {tour.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </p>

                    <button
                      className="
                    bg-primary
                    hover:bg-orange-600
                    text-white
                    px-4 py-2
                    rounded-xl
                    text-sm
                  "
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tours;
