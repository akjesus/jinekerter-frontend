import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaPlane,
  FaCopy,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const FlightSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.flight) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">No booking found</h2>

        <button
          onClick={() => navigate("/flights")}
          className="mt-6 bg-primary text-white px-6 py-3 rounded-xl"
        >
          Search Flights
        </button>
      </div>
    );
  }

  const { flight, form, total, reference, paymentMethod } = state;

  const whatsappMessage = encodeURIComponent(
    `✈️ Flight Booking Confirmed!\n\n` +
      `Reference: ${reference}\n` +
      `Airline: ${flight.airline}\n` +
      `Route: ${flight.from} → ${flight.to}\n` +
      `Passenger: ${form.fullName}\n` +
      `Date: ${flight.departure}\n` +
      `Total: $${total}\n`,
  );

  const whatsappNumber = "2348012345678";

  const copyRef = () => {
    navigator.clipboard.writeText(reference);
    alert("Reference copied!");
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white">
      {/* HEADER */}
      <div className="bg-green-50 dark:bg-green-900/20 py-16 text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        <h1 className="text-4xl font-bold">Flight Confirmed!</h1>

        <p className="text-slate-500 mt-2">
          Your ticket has been successfully booked
        </p>

        {/* Reference */}
        <div
          className="
          mt-6
          inline-flex
          items-center
          gap-3
          bg-white
          dark:bg-slate-900
          px-6
          py-3
          rounded-xl
          shadow
        "
        >
          <span className="font-semibold">{reference}</span>

          <button onClick={copyRef}>
            <FaCopy />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="space-y-6">
          {/* BOARDING STYLE CARD */}
          <div
            className="
            bg-slate-50
            dark:bg-slate-900
            p-6
            rounded-3xl
          "
          >
            <div className="flex items-center gap-3 mb-4">
              <FaPlane className="text-primary text-xl" />
              <h2 className="text-xl font-bold">Flight Ticket</h2>
            </div>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Airline:</strong> {flight.airline}
              </p>

              <p>
                <strong>Route:</strong> {flight.from} → {flight.to}
              </p>

              <p>
                <strong>Departure:</strong> {flight.departure}
              </p>

              <p>
                <strong>Arrival:</strong> {flight.arrival}
              </p>

              <p>
                <strong>Passenger:</strong> {form.fullName}
              </p>

              <p>
                <strong>Passengers:</strong> {form.passengers}
              </p>

              <p>
                <strong>Seat Class:</strong> {form.seatClass}
              </p>

              <p>
                <strong>Baggage:</strong> {form.baggage}
              </p>

              <p>
                <strong>Payment:</strong> {paymentMethod}
              </p>
            </div>
          </div>

          {/* NEXT STEPS */}
          <div
            className="
            bg-slate-50
            dark:bg-slate-900
            p-6
            rounded-3xl
          "
          >
            <h3 className="text-xl font-bold mb-3">What's Next?</h3>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>✔ Ticket sent to your email</li>
              <li>✔ Arrive 2–3 hours before departure</li>
              <li>✔ Bring valid travel documents</li>
              <li>✔ Check airline updates before flight</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
          bg-white
          dark:bg-slate-900
          p-6
          rounded-3xl
          shadow-lg
          h-fit
        "
        >
          <h3 className="text-xl font-bold mb-4">Booking Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Reference</span>
              <span className="font-semibold">{reference}</span>
            </div>

            <div className="flex justify-between">
              <span>Route</span>
              <span>
                {flight.from} → {flight.to}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Passenger</span>
              <span>{form.fullName}</span>
            </div>

            <div className="flex justify-between">
              <span>Travelers</span>
              <span>{form.passengers}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-primary pt-4 border-t dark:border-slate-800">
              <span>Total Paid</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-6 space-y-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-2
                bg-green-500
                hover:bg-green-600
                text-white
                py-3
                rounded-xl
                font-semibold
              "
            >
              <FaWhatsapp />
              Share on WhatsApp
            </a>

            <button
              onClick={() => navigate("/flights")}
              className="
                w-full
                border
                border-slate-300
                dark:border-slate-700
                py-3
                rounded-xl
                font-semibold
                hover:border-primary
              "
            >
              Book Another Flight
            </button>

            <button
              className="
                w-full
                bg-primary
                hover:bg-orange-600
                text-white
                py-3
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <FaDownload />
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSuccess;
