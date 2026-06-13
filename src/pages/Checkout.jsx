import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaCreditCard,
  FaUniversity,
  FaMoneyBillWave,
} from "react-icons/fa";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!state?.tour) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">No booking found</h2>
      </div>
    );
  }

  const { tour, booking, totalPrice } = state;

  const handleConfirm = () => {
    const reference = "TRV-" + Math.floor(Math.random() * 1000000);

    const bookingData = {
      tour,
      booking,
      totalPrice,
      reference,
    };

    localStorage.setItem("lastBooking", JSON.stringify(bookingData));

    navigate("/booking-success", {
      state: bookingData,
    });
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white">
      {/* HEADER */}
      <div className="bg-slate-100 dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="text-slate-500 mt-2">
            Review your booking and complete payment
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          {/* TRAVELER INFO */}
          <div
            className="
            bg-slate-50
            dark:bg-slate-900
            p-6
            rounded-3xl
          "
          >
            <h2 className="text-xl font-bold mb-4">Traveler Information</h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>
                <strong>Name:</strong> {booking.fullName}
              </p>
              <p>
                <strong>Email:</strong> {booking.email}
              </p>
              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>
              <p>
                <strong>Travel Date:</strong> {booking.date}
              </p>
              <p>
                <strong>Travelers:</strong> {booking.travelers}
              </p>

              {booking.notes && (
                <p className="md:col-span-2">
                  <strong>Notes:</strong> {booking.notes}
                </p>
              )}
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div
            className="
            bg-slate-50
            dark:bg-slate-900
            p-6
            rounded-3xl
          "
          >
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>

            <div className="space-y-4">
              {/* CARD */}
              <label
                className="
                flex items-center gap-3
                p-4
                border
                dark:border-slate-700
                rounded-xl
                cursor-pointer
              "
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <FaCreditCard />
                Credit / Debit Card
              </label>

              {/* BANK */}
              <label
                className="
                flex items-center gap-3
                p-4
                border
                dark:border-slate-700
                rounded-xl
                cursor-pointer
              "
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <FaUniversity />
                Bank Transfer
              </label>

              {/* PAY LATER */}
              <label
                className="
                flex items-center gap-3
                p-4
                border
                dark:border-slate-700
                rounded-xl
                cursor-pointer
              "
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "later"}
                  onChange={() => setPaymentMethod("later")}
                />
                <FaMoneyBillWave />
                Pay Later
              </label>
            </div>
          </div>

          {/* TRUST INFO */}
          <div
            className="
            bg-green-50
            dark:bg-green-900/20
            p-6
            rounded-3xl
          "
          >
            <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
              <FaCheckCircle />
              Secure Booking Guarantee
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              Your payment is protected. You can cancel or modify your booking
              according to our policy.
            </p>
          </div>
        </div>

        {/* RIGHT - SUMMARY */}
        <div
          className="
          bg-white
          dark:bg-slate-900
          p-6
          rounded-3xl
          shadow-lg
          h-fit
          sticky
          top-24
        "
        >
          <img
            src={tour.image}
            alt={tour.title}
            className="
              h-48
              w-full
              object-cover
              rounded-2xl
              mb-4
            "
          />

          <h2 className="text-xl font-bold mb-3">{tour.title}</h2>

          <div className="space-y-2 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              {tour.location}
            </div>

            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              {tour.duration}
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-primary" />
              {booking.travelers} Travelers
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              {booking.date}
            </div>
          </div>

          {/* PRICE */}
          <div className="border-t dark:border-slate-800 mt-6 pt-6">
            <div className="flex justify-between mb-2">
              <span>Price</span>
              <span>₦{tour.price}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Travelers</span>
              <span>{booking.travelers}</span>
            </div>

            <div
              className="
              flex
              justify-between
              text-xl
              font-bold
              text-primary
              mt-4
            "
            >
              <span>Total</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleConfirm}
            className="
              w-full
              bg-primary
              hover:bg-orange-600
              text-white
              py-3
              rounded-xl
              font-semibold
              mt-6
              transition
            "
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
