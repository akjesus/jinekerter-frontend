const categories = [
  {
    title: "Adventure",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },

  {
    title: "Honeymoon",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Family Trips",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80",
  },

  {
    title: "City Breaks",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Nature Escape",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  },
];

const TravelCategories = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-wide">
            Travel Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Choose Your Travel Style
          </h2>

          <p className="text-slate-500 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
            From luxury escapes to wild adventures — explore trips tailored to
            your style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                shadow-lg
                cursor-pointer
                h-60
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0
                bg-black/40
                group-hover:bg-black/50
                transition
              "
              />

              {/* Text */}
              <div
                className="
                absolute inset-0
                flex items-center justify-center
              "
              >
                <h3
                  className="
                  text-white
                  text-xl
                  md:text-2xl
                  font-bold
                  tracking-wide
                  group-hover:text-primary
                  transition
                "
                >
                  {cat.title}
                </h3>
              </div>

              {/* Bottom accent line */}
              <div
                className="
                absolute bottom-0 left-0 right-0
                h-1
                bg-primary
                scale-x-0
                group-hover:scale-x-100
                transition-transform
                duration-500
                origin-left
              "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
