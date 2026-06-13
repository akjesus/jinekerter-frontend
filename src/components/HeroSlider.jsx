import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import {Link} from "react-router-dom"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";

const slides = [
  {
    image: img1,
    title: "Discover Tropical Paradise",
    subtitle: "Book unforgettable beach escapes worldwide",
  },
  {
    image: img2,
    title: "Explore The Wonders Of Dubai",
    subtitle: "Luxury experiences tailored for you",
  },
  {
    image: img3,
    title: "Adventure Awaits",
    subtitle: "Create memories across the globe",
  },
];

const HeroSlider = () => {
  return (
    <section className="h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-200 mb-8">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/tours">
                        <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full">
                          Explore Tours
                        </button>
                      </Link>
                      <Link to="/destinations">
                      <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-secondary">
                        View Destinations
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
