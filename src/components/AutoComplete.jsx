import { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import axios from "axios";

const Autocomplete = ({ label, value, onSelect }) => {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const searchCities = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/cities`,
          {
            signal: controller.signal,
            params: { keyword: query },
          },
        );
        setResults(res.data.cities || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(searchCities, 400);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="relative">
      <label className="block mb-2 text-sm">{label}</label>

      <div className="relative">
        <FaPlaneDeparture className="absolute left-3 top-4 text-primary" />

        <input
          type="text"
          value={query}
          placeholder="City or Airport"
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            pl-10
            pr-4
            py-3
            rounded-xl
            border
            dark:border-slate-700
            bg-transparent
          "
        />
      </div>

      {results.length > 0 && (
        <div
          className="
            absolute
            left-0
            right-0
            mt-2
            bg-white
            dark:bg-slate-900
            border
            dark:border-slate-700
            rounded-xl
            shadow-xl
            max-h-72
            overflow-y-auto
            z-50
          "
        >
          {results.map((city) => (
            <button
              key={city._id}
              type="button"
              onClick={() => {
                setQuery(`${city.city_name} (${city.iata_code})`);
                onSelect(city);
                setResults([]);
              }}
              className="
                w-full
                text-left
                px-4
                py-3
                hover:bg-slate-100
                dark:hover:bg-slate-800
              "
            >
              <div className="font-medium">{city.city_name}</div>

              <div className="text-sm text-slate-500">
                {city.city_name} ({city.iata_code})
              </div>
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="text-xs mt-2 text-slate-500">Searching...</div>
      )}
    </div>
  );
};

export default Autocomplete;
