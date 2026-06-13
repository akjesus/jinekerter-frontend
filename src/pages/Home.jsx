
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import BookingSearch from "../components/BookingSearch";
import FlightSearch from "../components/FlightSearch";
import PopularDestinations from "../components/PopularDestinations";
import FeaturedTours from "../components/FeaturedTours";
import WhyChooseUs from "../components/WhyChooseUs";
import TravelCategories from "../components/TravelCategories";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import InstagramGallery from "../components/InstagramGallery";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Home = () => {

  return (
    <>
      <Navbar />
      <HeroSlider />
      <FlightSearch />
      <PopularDestinations />
      <FeaturedTours />
      <WhyChooseUs />
      <TravelCategories />
      <StatsSection />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
