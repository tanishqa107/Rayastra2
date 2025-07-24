import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = ["About Us", "Our Offerings", "Testimonials", "Courses", "Updates"];

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center fixed top-6 z-50"
    >
      <div className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-white rounded-full shadow-lg border border-gray-200 backdrop-blur-lg">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-black font-semibold text-lg">
          Rayastra
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const to = link.toLowerCase().replace(/\s+/g, "-");
            return (
              <motion.div
                key={link}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-black font-medium hover:underline hover:cursor-pointer"
                >
                  {link}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/signupform")}
            className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Get Started <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center z-100">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-black focus:outline-none"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="absolute top-20 w-[90%] max-w-6xl bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const to = link.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={link}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-black font-medium hover:underline hover:cursor-pointer"
                  onClick={() => setIsMobileOpen(false)} // Close menu after click
                >
                  {link}
                </Link>
              );
            })}
            <button
              onClick={() => {
                navigate("/signupform");
                setIsMobileOpen(false);
              }}
              className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Get Started <ArrowUpRight size={16} className="inline ml-1" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
