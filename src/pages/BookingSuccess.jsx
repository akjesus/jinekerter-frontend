import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaClock,
  FaCopy,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BookingSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
   const savedBooking =
     state || JSON.parse(localStorage.getItem("lastBooking"));
   const { tour, booking, totalPrice, reference } = savedBooking;

 if (!savedBooking?.tour) {
   return (
     <div className="p-20 text-center">
       <h2 className="text-2xl font-bold">No booking data found</h2>

       <button
         onClick={() => navigate("/")}
         className="mt-6 bg-primary text-white px-6 py-3 rounded-xl"
       >
         Go Home
       </button>
     </div>
   );
 }


 

  const whatsappMessage = encodeURIComponent(
    `Hello, I just booked a trip!\n\n` +
      `Reference: ${reference}\n` +
      `Destination: ${tour.title}\n` +
      `Date: ${booking.date}\n` +
      `Travelers: ${booking.travelers}\n`,
  );

  const whatsappNumber = "2348012345678";

  const copyRef = () => {
    navigator.clipboard.writeText(reference);
    alert("Reference copied!");
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white">
      {/* HERO */}
      <Navbar />
      <div className="bg-green-50 dark:bg-green-900/20 py-16 text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

        <h1 className="text-4xl font-bold">Booking Confirmed!</h1>

        <p className="text-slate-500 mt-2">
          Your trip has been successfully booked
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
          {/* TOUR INFO */}
          <div
            className="
            bg-slate-50
            dark:bg-slate-900
            p-6
            rounded-3xl
          "
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="
                h-56
                w-full
                object-cover
                rounded-2xl
                mb-4
              "
            />

            <h2 className="text-2xl font-bold mb-3">{tour.title}</h2>

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
              <li>✔ Confirmation email sent to your inbox</li>
              <li>✔ Our team will contact you within 24 hours</li>
              <li>✔ Prepare your travel documents</li>
              <li>✔ Pack and get ready for your adventure</li>
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
              <span>Destination</span>
              <span>{tour.location}</span>
            </div>

            <div className="flex justify-between">
              <span>Travel Date</span>
              <span>{booking.date}</span>
            </div>

            <div className="flex justify-between">
              <span>Travelers</span>
              <span>{booking.travelers}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-primary pt-4 border-t dark:border-slate-800">
              <span>Total Paid</span>
              <span>₦{totalPrice.toLocaleString()}</span>
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
              Send to WhatsApp
            </a>

            <button
              onClick={() => navigate("/tours")}
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
              Book Another Trip
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSuccess;
