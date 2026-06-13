import { FaSearch, FaCalendarAlt, FaUser, } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const BookingSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    location: "",
    date: "",
    travellers: "1",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(search).toString();
    navigate(`/search-results?${params}`);
  };

  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-secondary rounded-3xl shadow-2xl p-4 lg:p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3">
              <FaSearch className="text-slate-400" />
              <input
                name="location"
                value={search.location}
                onChange={handleChange}
                type="text"
                placeholder="Where are you going?"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3">
              <FaCalendarAlt className="text-slate-400" />
              <input
                name="date"
                value={search.date}
                onChange={handleChange}
                type="date"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3">
              <FaUser className="dark:text-white" />
              <select
                name="travellers"
                value={search.travellers}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-sm text-black"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">Family</option>
              </select>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3">
              <FaNairaSign className="dark:text-white" />
              <select
                name="budget"
                value={search.budget}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-sm text-black"
              >
                <option value="">Any budget</option>
                <option value="500000-1000000">₦500,000 - ₦1,000,000</option>
                <option value="1000000-3000000">₦1,000,000 - ₦3,000,000</option>
                <option value="3000000-5000">₦3,000,000+</option>
              </select>
            </div>

            <div>
              <button
                disabled={
                  !search.budget ||
                  !search.travellers ||
                  !search.date ||
                  !search.location
                }
                type="submit"
                className="w-full bg-primary hover:bg-orange-600 text-white rounded-xl py-3 shadow-md flex items-center justify-center gap-2 disabled:bg-orange-300 disabled:text-gray disabled:cursor-not-allowed"
              >
                <FaSearch />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingSearch;
