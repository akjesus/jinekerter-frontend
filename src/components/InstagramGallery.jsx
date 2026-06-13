import { useState } from "react";
import { FaHeart, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const images = [
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    location: "Santorini, Greece",
    likes: 1200,
  },
  {
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1400&q=80",
    location: "Dubai, UAE",
    likes: 980,
  },
  {
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    location: "Bali, Indonesia",
    likes: 1540,
  },
  {
    url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1400&q=80",
    location: "Maldives",
    likes: 2100,
  },
  {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    location: "New York, USA",
    likes: 860,
  },
  {
    url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1400&q=80",
    location: "Paris, France",
    likes: 1900,
  },
];

const InstagramGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Instagram Feed
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Travel Moments We Love
          </h2>

          <p className="text-slate-500 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            Real experiences from travelers exploring breathtaking destinations
            around the world.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="
                relative
                break-inside-avoid
                overflow-hidden
                rounded-2xl
                cursor-pointer
                group
              "
              onClick={() => setSelected(img)}
            >
              <img
                src={img.url}
                alt={img.location}
                className="
                  w-full
                  object-cover
                  rounded-2xl
                  group-hover:scale-110
                  transition-transform
                  duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0
                bg-black/0
                group-hover:bg-black/40
                transition
              "
              />

              {/* Info */}
              <div
                className="
                absolute bottom-0 left-0 right-0
                p-4
                text-white
                opacity-0
                group-hover:opacity-100
                transition
              "
              >
                <div className="flex items-center gap-2 text-sm">
                  <FaMapMarkerAlt className="text-primary" />
                  {img.location}
                </div>

                <div className="flex items-center gap-2 mt-1 text-sm">
                  <FaHeart className="text-red-500" />
                  {img.likes} likes
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="
      fixed inset-0
      bg-black/80
      flex items-center justify-center
      z-[9999]
      p-6
    "
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="
          absolute top-4 right-4
          bg-white/10 hover:bg-white/20
          text-white
          w-10 h-10
          rounded-full
          flex items-center justify-center
          text-xl
          transition
        "
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selected.url}
                alt={selected.location}
                className="
    w-full
    max-h-[75vh]
    object-cover
    rounded-2xl
    shadow-2xl
  "
              />

              {/* Caption */}
              <div className="text-white mt-4 text-center">
                <p className="text-lg font-semibold">{selected.location}</p>

                <p className="text-slate-300 text-sm">
                  ❤️ {selected.likes} likes
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramGallery;
