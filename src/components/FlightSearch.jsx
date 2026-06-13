import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import CityAutocomplete from "./AutoComplete";
const FlightSearch = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway");
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    cabin: "Economy",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      from: formData.from,
      to: formData.to,
      departureDate: formData.departureDate,
      returnDate: formData.returnDate,
      passengers: formData.passengers,
      cabin: formData.cabin,
      tripType,
    });

    navigate(`/flights?${params.toString()}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTripType("oneway")}
            className={`px-4 py-2 rounded-xl ${
              tripType === "oneway"
                ? "bg-primary text-white"
                : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            One Way
          </button>
          <button
            onClick={() => setTripType("roundtrip")}
            className={`px-4 py-2 rounded-xl ${
              tripType === "roundtrip"
                ? "bg-primary text-white"
                : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            Round Trip
          </button>
        </div>

        <div className="grid lg:grid-cols-6 gap-4">
            <div className="relative">
              <CityAutocomplete
                label="Flying From"
                value={formData.from}
                onSelect={(city) =>
                  setFormData((prev) => ({
                    ...prev,
                    from: city.iata_code,
                    fromName: city.city_name,
                  }))
                }
              />
          </div>

          <div>
            <div className="relative">
              <CityAutocomplete
                label="Flying To"
                value={formData.to}
                onSelect={(city) =>
                  setFormData((prev) => ({
                    ...prev,
                    to: city.iata_code,
                    toName: city.city_name,
                  }))
                }
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-2 block">Departure</label>

            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
            />
          </div>

          {tripType === "roundtrip" && (
            <div>
              <label className="text-sm mb-2 block">Return</label>

              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
              />
            </div>
          )}

          <div>
            <label className="text-sm mb-2 block">Passengers</label>

            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num} className="text-black">
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm mb-2 block">Cabin</label>

            <select
              name="cabin"
              value={formData.cabin}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="
            mt-6
            w-full
            bg-primary
            hover:bg-orange-600
            text-white
            py-4
            rounded-xl
            font-semibold
          "
        >
          Search Flights
        </button>
      </div>
    </section>
  );
};

export default FlightSearch;
