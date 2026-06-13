import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPlane,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import logoLight from "../assets/light.png";
import logoDark from "../assets/dark.png";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src={theme === "dark" ? logoDark : logoLight}
                alt="TravelGo"
                className="h-15 w-20"
              />
            </Link>

            <p className="text-gray-300">
              Discover the world with expertly crafted tours and unforgettable
              experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

            <ul className="space-y-3">
              <li>Home</li>
              <li>Destinations</li>
              <li>Tours</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Destinations</h3>

            <ul className="space-y-3">
              <li>Dubai</li>
              <li>Bali</li>
              <li>Maldives</li>
              <li>Paris</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>

            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg text-black"
            />

            <button className="w-full mt-3 bg-primary py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p>© {new Date().getFullYear()} Jinekerter Limited. All rights reserved.</p>

          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
