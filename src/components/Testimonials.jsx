import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    message:
      "Absolutely amazing experience! Everything was perfectly organized from flights to hotel bookings. I didn’t worry about a thing.",
  },
  {
    name: "Michael Chen",
    role: "Digital Nomad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    message:
      "Great service and smooth booking process. The Bali trip exceeded my expectations. Highly recommended for travelers.",
  },
  {
    name: "Amina Yusuf",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    message:
      "The luxury Dubai package was worth every penny. Excellent support and attention to detail throughout the journey.",
  },
  {
    name: "James Smith",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    message:
      "Best travel booking platform I’ve used so far. The destinations and recommendations were spot on!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Our Travelers Say
          </h2>

          <p className="text-slate-500 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Real stories from real travelers who explored the world with us.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                bg-white
                dark:bg-secondary
                rounded-3xl
                p-8
                shadow-lg
                h-full
                flex
                flex-col
                justify-between
              "
              >
                {/* Rating */}
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Message */}
                <p className="text-slate-600 dark:text-slate-300 italic mb-6">
                  “{item.message}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border-2
                      border-primary
                    "
                  />

                  <div>
                    <h4 className="font-bold">{item.name}</h4>

                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
