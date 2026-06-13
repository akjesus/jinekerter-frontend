import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6
        right-6
        z-50
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-full
        bg-primary
        text-white
        shadow-lg
        hover:bg-orange-600
        hover:scale-110
        transition-all
        duration-300

        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
