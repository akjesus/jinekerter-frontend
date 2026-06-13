import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaCreditCard,
  FaUniversity,
  FaMoneyBillWave,
  FaShieldAlt,
  FaPlane,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import flightImg from "../assets/flight.avif";

const FlightCheckout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!state?.flight) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">No booking found</h2>

        <button
          onClick={() => navigate("/flights")}
          className="mt-6 bg-primary text-white px-6 py-3 rounded-xl"
        >
          Back to Flights
        </button>
      </div>
    );
  }

  const { flight, form, total, reference } = state;

  const handlePaystackPayment = async () => {
    const reference = "JNK-" + Math.floor(Math.random() * 1000000);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/payments/initialize`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: form.email,
            amount: total,
            reference,
          }),
        },
      );

      const data = await res.json();
      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
        email: form.email,
        amount: total * 100,
        reference,
        callback: function (response) {
          navigate("/flight-success", {
            state: {
              flight,
              form,
              total,
              reference: response.reference,
              paymentMethod: "Paystack",
            },
          });
        },
        onClose: function () {
          Swal.fire({
            icon: "info",
            title: "Payment Cancelled",
            text: "You cancelled your transaction. Please try again.",
            timer: 2000,
            showConfirmButton: false
          });
        },
      });

      handler.openIframe();
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Payment initialization failed",
        text: "Payment initialization failed. Please try again.",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white">
      {/* HEADER */}
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
              Flight Checkout
            </h1>

            <p className="text-slate-200">Review and complete your booking</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          {/* PASSENGER SUMMARY */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl">
            <h2 className="text-xl font-bold mb-4">Passenger Details</h2>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <p>
                <strong>Name:</strong> {form.fullName}
              </p>
              <p>
                <strong>Email:</strong> {form.email}
              </p>
              <p>
                <strong>Phone:</strong> {form.phone}
              </p>
              <p>
                <strong>Passengers:</strong> {form.passengers}
              </p>
              <p>
                <strong>Seat:</strong> {form.seatClass}
              </p>
              <p>
                <strong>Baggage:</strong> {form.baggage}
              </p>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3 p-4 border dark:border-slate-700 rounded-xl cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <FaCreditCard />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3 p-4 border dark:border-slate-700 rounded-xl cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                <FaUniversity />
                Bank Transfer
              </label>

              <label className="flex items-center gap-3 p-4 border dark:border-slate-700 rounded-xl cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                <FaMoneyBillWave />
                Pay on Arrival
              </label>
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-3xl flex items-start gap-3">
            <FaShieldAlt className="text-green-500 text-2xl mt-1" />

            <div>
              <h3 className="font-bold text-green-600">Secure Booking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Your payment is protected with end-to-end encryption and airline
                partner verification.
              </p>
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

            <div>
              {flight.from} → {flight.to}
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
            onClick={handlePaystackPayment}
            className="w-full mt-6 bg-primary hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            Pay & Confirm Booking
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlightCheckout;
