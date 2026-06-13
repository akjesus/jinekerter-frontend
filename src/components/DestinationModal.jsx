import { useEffect } from "react";
import { FaMapMarkerAlt, FaStar, FaTimes, FaCheckCircle } from "react-icons/fa";

const DestinationModal = ({ destination, onClose }) => {
  if (!destination) return null;

  // ESC support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="
        fixed inset-0
        bg-black/70
        flex items-center justify-center
        z-[9999]
        p-4
      "
      onClick={onClose}
    >
      {/* MODAL WRAPPER */}
      <div
        className="
          bg-white
          dark:bg-slate-950
          w-full
          max-w-3xl
          rounded-2xl
          shadow-2xl
          overflow-hidden
          relative
          flex flex-col
          max-h-[90vh]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON (MORE VISIBLE) */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            bg-primary
            text-white
            w-11 h-11
            rounded-full
            flex items-center justify-center
            shadow-lg
            hover:bg-orange-600
            hover:scale-105
            transition
            z-20
          "
        >
          <FaTimes />
        </button>

        {/* IMAGE (fixed height) */}
        <div className="h-56 w-full">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="p-6 overflow-y-auto flex-1">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300 mb-2">
            <FaMapMarkerAlt className="text-primary" />
            {destination.country}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-1">{destination.name}</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-400 mb-4">
            <FaStar />
            <span className="text-slate-700 dark:text-slate-200">
              {destination.rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {destination.description}
          </p>

          {/* Highlights */}
          <h3 className="text-lg font-semibold mb-3">Highlights</h3>

          <ul className="space-y-2 mb-6">
            {destination.highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Footer pricing */}
          <div
            className="
            flex items-center justify-between
            border-t
            dark:border-slate-800
            pt-5
          "
          >
            <div>
              <p className="text-sm text-slate-500">From</p>
              <p className="text-xl font-bold">
                {destination.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="
                  bg-transparent
                  border
                  border-slate-200 dark:border-slate-700
                  text-slate-700 dark:text-slate-200
                  px-4 py-2
                  rounded-xl
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  transition
                  font-semibold
                "
              >
                Close
              </button>

              <button
                className="
                bg-primary
                hover:bg-orange-600
                text-white
                px-5 py-2.5
                rounded-xl
                font-semibold
              "
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
