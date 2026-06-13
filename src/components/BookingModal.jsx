import { useEffect, useMemo, useState } from "react";
import {
  FaTimes,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ tour, onClose }) => {
  const navigate = useNavigate();

  const [booking, setBooking] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    travelers: 1,
    notes: "",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const totalPrice = useMemo(() => {
    if (!tour) return 0;

    return Number(tour.price) * Number(booking.travelers);
  }, [tour, booking.travelers]);

  if (!tour) return null;

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        tour,
        booking,
        totalPrice,
      },
    });

    onClose();
  };

  return (
    <div
      className="
        fixed inset-0
        bg-black/70
        backdrop-blur-sm
        flex items-center justify-center
        z-[9999]
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          dark:bg-slate-950
          w-full
          max-w-5xl
          rounded-3xl
          overflow-hidden
          relative
          shadow-2xl
          max-h-[92vh]
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            w-11
            h-11
            rounded-full
            bg-primary
            text-white
            flex
            items-center
            justify-center
            shadow-lg
            hover:scale-105
            transition
            z-20
          "
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="border-b dark:border-slate-800 p-6">
          <h2 className="text-2xl font-bold">Complete Your Booking</h2>

          <p className="text-slate-500 mt-1">
            Enter traveler information to continue.
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT */}
            <div>
              <h3 className="text-xl font-bold mb-5">Traveler Information</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={booking.fullName}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    dark:border-slate-700
                    bg-transparent
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={booking.email}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    dark:border-slate-700
                    bg-transparent
                  "
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={booking.phone}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    dark:border-slate-700
                    bg-transparent
                  "
                />

                <div>
                  <label className="block mb-2 font-medium">Travel Date</label>

                  <input
                    type="date"
                    name="date"
                    value={booking.date}
                    onChange={handleChange}
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      border
                      dark:border-slate-700
                      bg-transparent
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Travelers</label>

                  <select
                    name="travelers"
                    value={booking.travelers}
                    onChange={handleChange}
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-xl
                      border
                      dark:border-slate-700
                      bg-transparent
                    "
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="text-black">
                        {n} Traveler{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  rows="4"
                  name="notes"
                  placeholder="Special Requests"
                  value={booking.notes}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-xl
                    border
                    dark:border-slate-700
                    bg-transparent
                  "
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div
                className="
                  bg-slate-50
                  dark:bg-slate-900
                  rounded-3xl
                  overflow-hidden
                  border
                  dark:border-slate-800
                "
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="
                    h-56
                    w-full
                    object-cover
                  "
                />

                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-4">{tour.title}</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-primary" />
                      {tour.location}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaClock className="text-primary" />
                      {tour.duration}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaStar className="text-yellow-500" />
                      {tour.rating}
                    </div>

                    <div className="flex items-center gap-3">
                      <FaUsers className="text-primary" />
                      {booking.travelers} Traveler
                      {booking.travelers > 1 ? "s" : ""}
                    </div>

                    {booking.date && (
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-primary" />
                        {booking.date}
                      </div>
                    )}
                  </div>

                  <div
                    className="
                    border-t
                    dark:border-slate-800
                    mt-6
                    pt-6
                  "
                  >
                    <div className="flex justify-between mb-3">
                      <span>Price Per Traveler</span>

                      <strong>₦{tour.price}</strong>
                    </div>

                    <div className="flex justify-between mb-3">
                      <span>Travelers</span>

                      <strong>{booking.travelers}</strong>
                    </div>

                    <div
                      className="
                      flex
                      justify-between
                      text-xl
                      font-bold
                      text-primary
                    "
                    >
                      <span>Total</span>

                      <span>₦{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
          border-t
          dark:border-slate-800
          p-6
        "
        >
          <button
            onClick={handleCheckout}
            disabled={
              !booking.fullName ||
              !booking.email ||
              !booking.phone ||
              !booking.date
            }
            className="
              w-full
              bg-primary
              hover:bg-orange-600
              disabled:opacity-50
              disabled:cursor-not-allowed
              text-white
              py-4
              rounded-xl
              font-semibold
              text-lg
              transition
            "
          >
            Continue To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
