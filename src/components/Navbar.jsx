import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPlane } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import logoLight from "../assets/light.png";
import logoDark from "../assets/dark.png";

const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tours", path: "/tours" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-secondary/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="TravelGo"
              className="h-15 w-20"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-primary"
                      : scrolled
                        ? "text-secondary dark:text-white hover:text-primary"
                        : "text-white hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile: show theme toggle beside menu icon */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(true)}
              className={`text-2xl ${
                scrolled ? "text-secondary dark:text-white" : "text-white"
              }`}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white dark:bg-secondary shadow-xl transition-all duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-xl text-secondary dark:text-white">
              Menu
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-secondary dark:text-white"
            >
              <FaTimes />
            </button>
          </div>

          <div className="space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive
                      ? "text-primary"
                      : "text-secondary dark:text-white hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <ThemeToggle />

            <button className="w-full bg-primary text-white py-3 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </header>
  );
};

export default Navbar;
