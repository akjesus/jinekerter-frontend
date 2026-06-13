import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // Later you can connect API here
    console.log("Subscribed email:", email);

    setEmail("");
    alert("Thanks for subscribing! ✈️");
  };

  return (
    <section className="py-24 bg-gradient-to-r from-secondary via-slate-900 to-accent text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get Exclusive Travel Deals
        </h2>

        <p className="text-slate-200 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter and unlock early access to discounts,
          seasonal offers, and handpicked travel packages around the world.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
            bg-white/10
            backdrop-blur-md
            p-3
            rounded-2xl
            border
            border-white/20
          "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="
              flex-1
              px-4
              py-3
              rounded-xl
              outline-none
              text-black
            "
          />

          <button
            type="submit"
            className="
              bg-primary
              hover:bg-orange-600
              px-6
              py-3
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition
            "
          >
            Subscribe
            <FaPaperPlane />
          </button>
        </form>

        {/* Small note */}
        <p className="text-sm text-slate-300 mt-6">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
