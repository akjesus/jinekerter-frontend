import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaSuitcase,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import flightImg from "../assets/flight.avif";

const FlightBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    passengers: 1,
    baggage: "Standard",
    seatClass: "Economy",
  });

  if (!state?.flight) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">No flight selected</h2>

        <button
          onClick={() => navigate("/flights")}
          className="mt-6 bg-primary text-white px-6 py-3 rounded-xl"
        >
          Go Back to Flights
        </button>
      </div>
    );
  }

  const { flight } = state;
  const pricePerPassenger = flight.price;
  const total = pricePerPassenger * form.passengers;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    const reference = "JNK-" + Math.floor(Math.random() * 1000000);
    const bookingData = {
      flight,
      form,
      total,
      reference,
    };

    navigate("/flight-checkout", {
      state: bookingData,
    });
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white">
      <Navbar />
      <section className="relative h-[45vh] overflow-hidden">
        <img
          src={flightImg}
          alt="Travel Search"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Flight Booking
            </h1>

            <p className="text-slate-200">Review and complete your booking</p>
          </div>
        </div>
      </section>
      <div className="bg-slate-100 dark:bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Complete Flight</h1>
          <p className="text-slate-500 mt-2">
            Enter passenger details to continue
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* LEFT FORM */}
        <div className="lg:col-span-2 space-y-6">
          {/* Passenger Info */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl space-y-4">
            <h2 className="text-xl font-bold">Passenger Information</h2>

            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-primary" />
              <input
                name="fullName"
                placeholder="Full Name"
                className="w-full pl-10 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-primary" />
              <input
                name="email"
                placeholder="Email Address"
                className="w-full pl-10 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute top-4 left-3 text-primary" />
              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full pl-10 py-3 rounded-xl border dark:border-slate-700 bg-transparent"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Flight Options */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl space-y-4">
            <h2 className="text-xl font-bold">Flight Options</h2>

            <div>
              <label className="text-sm">Passengers</label>
              <select
                name="passengers"
                onChange={handleChange}
                className="w-full mt-2 py-3 px-4 rounded-xl border dark:border-slate-700 bg-transparent"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm">Seat Class</label>
              <select
                name="seatClass"
                onChange={handleChange}
                className="w-full mt-2 py-3 px-4 rounded-xl border dark:border-slate-700 bg-transparent"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Baggage</label>
              <select
                name="baggage"
                onChange={handleChange}
                className="w-full mt-2 py-3 px-4 rounded-xl border dark:border-slate-700 bg-transparent"
              >
                <option>Standard</option>
                <option>Extra 20kg</option>
                <option>Extra 30kg</option>
              </select>
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg h-fit sticky top-24">
          <h2 className="text-xl font-bold mb-4">Flight Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <FaPlane className="text-primary" />
              {flight.airline}
            </div>

            <div className="flex justify-between">
              <span>
                {flight.from} → {flight.to}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Departure</span>
              <span>{flight.departure}</span>
            </div>

            <div className="flex justify-between">
              <span>Arrival</span>
              <span>{flight.arrival}</span>
            </div>

            <div className="flex justify-between">
              <span>Duration</span>
              <span>{flight.duration}</span>
            </div>
          </div>

          {/* PRICE */}
          <div className="border-t dark:border-slate-800 mt-6 pt-6">
            <div className="flex justify-between mb-2">
              <span>Price x Passenger</span>
              <span>${flight.price}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Passengers</span>
              <span>{form.passengers}</span>
            </div>

            <div className="flex justify-between text-xl font-bold text-primary mt-4">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          {/* CTA */}
          <button
          disabled={!form.fullName || !form.email || !form.phone}
            onClick={handleContinue}
            className="w-full mt-6 bg-primary disabled:opacity-50 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            Continue <FaArrowRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlightBooking;
