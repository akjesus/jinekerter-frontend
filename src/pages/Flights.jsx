import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  FaPlane,
  FaClock,
  FaExchangeAlt,
  FaSortAmountDown,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Autocomplete from "../components/Autocomplete";
import FlightSkeleton from "../components/FlightSkeleton";
import searchImg from "../assets/search.avif";
import { fetchFlights, fetchCities } from "../api/flight";

const Flights = () => {
   const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [flightData, setFlightData] = useState([]);
  const [cities, setCities] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departureDate = searchParams.get("departureDate") || "";
  const passengers = Number(searchParams.get("passengers") || 1);
  const navigate = useNavigate();


  const [search, setSearch] = useState({
    from: from || "",
    to: to || "",
    departureDate: departureDate,
    passengers: passengers,
  });

const handleSearch = () => {
  const params = new URLSearchParams({
    from: search.from,
    to: search.to,
    departureDate: search.departureDate,
    passengers: search.passengers,
  });

  setSearchParams(params);
  fetchFlights(params);
};
  const getDuration = (departure, arrival) => {
    if (!departure || !arrival) return "--";
    const diff = new Date(arrival) - new Date(departure);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchFlights(from, to, departureDate, passengers);
        const apiFlights = res.data.data;
        console.log(apiFlights);
        const transformedFlights = apiFlights
          .filter(
            (flight) =>
              flight.airline?.name && flight.airline.name.trim() !== "",
          )
          .map((flight, index) => ({
            id: index + 1,
            airline: flight.airline?.name || "Unknown Airline",
            from: flight.departure?.iata || "---",
            to: flight.arrival?.iata || "---",
            departureAirport: flight.departure?.airport || "Unknown Airport",
            arrivalAirport: flight.arrival?.airport || "Unknown Airport",
            departureCity:
              flight.departure?.timezone
                ?.split("/")
                ?.pop()
                ?.replace(/_/g, " ") || "",
            arrivalCity:
              flight.arrival?.timezone?.split("/")?.pop()?.replace(/_/g, " ") ||
              "",
            departure: flight.departure?.scheduled
              ? new Date(flight.departure.scheduled).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--",
            arrival: flight.arrival?.scheduled
              ? new Date(flight.arrival.scheduled).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "--:--",
            departureDate: flight.departure?.scheduled || null,
            arrivalDate: flight.arrival?.scheduled || null,
            duration: getDuration(
              flight.departure?.scheduled,
              flight.arrival?.scheduled,
            ),
            status: flight.flight_status || "Unknown",
            flightNumber: flight.flight?.iata || flight.flight?.number || "N/A",
            airlineCode: flight.airline?.iata || "",
            aircraft: flight.aircraft?.iata || "",
            terminal: flight.departure?.terminal || "",
            gate: flight.departure?.gate || "",
          }));
        setFlightData(transformedFlights);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    if (from && to) {
      fetchData();
    }
  }, [from, to, departureDate, passengers]);

  return (
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
              Available Flights
            </h1>

            <p className="text-slate-200">
              Choose from a variety of flight options and book your perfect
              trip.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Available Flights</h1>
          <div
            className="
            flex
            flex-wrap
            items-center
            gap-4
            text-slate-500
          "
          >
            <span className="font-semibold">{from}</span>
            <FaExchangeAlt />
            <span className="font-semibold">{to}</span>
            <span>•</span>
            <span>{departureDate || "Flexible Date"}</span>
            <span>•</span>
            <span>
              {passengers} Passenger
              {passengers > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>
      <div className="bg-slate-100 dark:bg-slate-900 py-6 mb-10 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-4">Modify Your Search</h2>

          <div className="grid md:grid-cols-5 gap-4">
            {/* FROM */}
            <Autocomplete
              label="From"
              value={search.from}
              onSelect={(city) =>
                setSearch((prev) => ({
                  ...prev,
                  from: city.iata_code,
                }))
              }
            />
            {/* TO */}
            <Autocomplete
              label="To"
              value={search.to}
              onSelect={(city) =>
                setSearch((prev) => ({
                  ...prev,
                  to: city.iata_code,
                }))
              }
            />

            {/* DATE */}
            <input
              type="date"
              value={search.departureDate}
              onChange={(e) =>
                setSearch({
                  ...search,
                  departureDate: e.target.value,
                })
              }
              className="px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
            />

            {/* PASSENGERS */}
            <select
              value={search.passengers}
              onChange={(e) =>
                setSearch({
                  ...search,
                  passengers: e.target.value,
                })
              }
              className="px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n} Passenger{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>

            {/* SEARCH BUTTON */}
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-orange-600 text-white rounded-xl font-semibold"
            >
              Modify Search
            </button>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* SORT BAR */}
        <div
          className="
          flex
          justify-between
          items-center
          mb-8
          flex-wrap
          gap-4
        "
        >
          <h2 className="text-2xl font-bold">
            {flightData.length} Flights Found
          </h2>

          <div className="flex items-center gap-3">
            <FaSortAmountDown className="text-primary" />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                px-4
                py-2
                rounded-xl
                border
                dark:border-slate-700
                bg-transparent
              "
            >
              <option value="price">Lowest Price</option>
              <option value="duration">Shortest Duration</option>
            </select>
          </div>
        </div>

        {/* FLIGHTS */}
        <div className="space-y-6">
          {loading ? (
            <div className="space-y-6">
              {[...Array(5)].map((_, index) => (
                <FlightSkeleton key={index} />
              ))}
            </div>
          ) : (
            flightData.map((flight, idx) => (
              <div
                key={flight.id || idx}
                className="
                bg-white
                dark:bg-slate-900
                rounded-3xl
                shadow-lg
                p-6
                border
                dark:border-slate-800
              "
              >
                <div
                  className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                justify-between
                gap-6
              "
                >
                  {/* AIRLINE */}
                  <div
                    className="
                  flex
                  items-center
                  gap-4
                  min-w-[200px]
                "
                  >
                    <img
                      src={flight.logo}
                      className="w-16 h-16 object-contain"
                    />

                    <div>
                      <h3 className="font-bold">{flight.airline}</h3>

                      <p className="text-slate-500 text-sm">Economy Class</p>
                    </div>
                  </div>

                  {/* ROUTE */}
                  <div
                    className="
                  flex
                  items-center
                  justify-center
                  gap-6
                  flex-wrap
                "
                  >
                    <div className="text-center">
                      <h4 className="text-xl font-bold">{flight.departure}</h4>
                      <p className="font-semibold">{flight.from}</p>
                      <p className="text-xs text-slate-500 max-w-[180px]">
                        {flight.departureAirport}
                      </p>
                    </div>
                    <div className="text-center">
                      <FaPlane className="mx-auto text-primary mb-2" />
                      <p className="text-sm text-slate-500">
                        {flight.duration}
                      </p>
                      <p className="text-xs text-slate-400">{flight.stops}</p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-xl font-bold">{flight.arrival}</h4>
                      <p className="font-semibold">{flight.to}</p>
                      <p className="text-xs text-slate-500 max-w-[180px]">
                        {flight.arrivalAirport}
                      </p>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-primary">
                      ₦{flight.price}
                    </h3>

                    <p className="text-sm text-slate-500 mb-4">per traveler</p>

                    <button
                      onClick={() =>
                        navigate("/flight-booking", {
                          state: { flight },
                        })
                      }
                      className="
                      bg-primary
                      hover:bg-orange-600
                      text-white
                      px-6
                      py-3
                      rounded-xl
                      font-semibold
                      transition
                    "
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Flights;
