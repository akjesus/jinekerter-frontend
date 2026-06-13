import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import Tours from "../pages/Tours";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SearchResults from "../pages/SearchResults";
import Checkout from "../pages/Checkout";
import BookingSuccess from "../pages/BookingSuccess"
import Flights from "../pages/Flights";
import FlightBooking from "../pages/FlightBooking";
import FlightCheckout from "../pages/FlightCheckout";
import FlightSuccess from "../pages/FlightSuccess";











const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/flights" element={<Flights />} />;
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/booking-success" element={<BookingSuccess />} />
      <Route path="/flight-booking" element={<FlightBooking />} />
      <Route path="/flight-checkout" element={<FlightCheckout />} />
      <Route path="/flight-success" element={<FlightSuccess />} />
    </Routes>
  );
};

export default AppRoutes;
