import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaClock, FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchImg from "../assets/search.avif";
import BookingModal from "../components/BookingModal";
import { searchTours } from "../api/tours";

const SearchResults = () => {
  const [search, setSearch] = useState(true);
  const [tours, setTours] = useState([]);
  const [searchParams] = useSearchParams();
  const [selectedTour, setSelectedTour] = useState(null);
  const location = searchParams.get("location") || "";
  const travelers = searchParams.get("travelers") || 1;
  const date = searchParams.get("date") || "";
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const results = await searchTours({ location, travelers, date });
        console.log(results);
        setTours(results.data.tours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    if (location || travelers || date) {
      fetchTours();
    }
  }, [location, travelers, date]);


  return (
    <>
      <div className="bg-white dark:bg-slate-950 min-h-screen">
        <Navbar />
        {/* HERO */}
        <section className="relative h-[45vh] overflow-hidden">
          <img
            src={searchImg}
            alt="Travel Search"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Search Results
              </h1>

              <p className="text-slate-200">
                Find your perfect trip and book instantly.
              </p>
            </div>
          </div>
        </section>

        {/* SEARCH SUMMARY */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div
            className="
            bg-slate-100
            dark:bg-slate-900
            rounded-3xl
            p-6
            flex
            flex-col
            md:flex-row
            gap-4
            md:items-center
            md:justify-between
          "
          >
            <div>
              <p className="text-slate-500">Location</p>

              <h3 className="font-bold text-lg">
                {location || "All Locations"}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">Travel Date</p>

              <h3 className="font-bold text-lg">{date || "Flexible"}</h3>
            </div>

            <div>
              <p className="text-slate-500">Travelers</p>

              <h3 className="font-bold text-lg">{travelers}</h3>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex items-center gap-3 mb-8">
            <FaSearch className="text-primary" />

            <h2 className="text-2xl font-bold">
              {tours.length} Tour
              {tours.length !== 1 ? "s" : ""} Found
            </h2>
          </div>

          {tours.length === 0 ? (
            <div
              className="
              text-center
              py-20
              bg-slate-50
              dark:bg-slate-900
              rounded-3xl
            "
            >
              <h3 className="text-2xl font-bold mb-2">No Tours Found</h3>

              <p className="text-slate-500">Try another destination.</p>
            </div>
          ) : (
            <div
              className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
            >
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="
                    bg-white
                    dark:bg-slate-900
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    hover:-translate-y-2
                    transition
                  "
                >
                  <img
                    src={tour.imageCover}
                    alt={tour.name}
                    className="
                      h-64
                      w-full
                      object-cover
                    "
                  />

                  <div className="p-5">
                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      text-primary
                      text-sm
                      mb-2
                    "
                    >
                      <FaMapMarkerAlt />
                      {tour.location}
                    </div>

                    <h3 className="text-xl font-bold mb-4">{tour.name}</h3>

                    <div
                      className="
                      flex
                      justify-between
                      mb-4
                      text-sm
                    "
                    >
                      <div className="flex items-center gap-2">
                        <FaClock className="text-primary" />
                        {tour.duration}
                      </div>

                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        text-yellow-500
                      "
                      >
                        <FaStar />
                        {tour.ratingsAverage}
                      </div>
                    </div>

                    <div
                      className="
                      flex
                      items-center
                      justify-between
                    "
                    >
                      <div>
                        <p className="text-slate-500 text-sm">Starting From</p>

                        <h4 className="text-2xl font-bold text-primary">
                          ₦{tour.price}
                        </h4>
                      </div>

                      <button
                        onClick={() => setSelectedTour(tour)}
                        className="
                          bg-primary
                          hover:bg-orange-600
                          text-white
                          px-5
                          py-3
                          rounded-xl
                          font-semibold
                          transition
                        "
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <BookingModal tour={selectedTour} onClose={() => setSelectedTour(null)} />
      <Footer />
    </>
  );
};

export default SearchResults;
