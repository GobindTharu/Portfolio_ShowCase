import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Blogs", to: "/blogs" },
    { name: "Jobs", to: "/jobs" },
    { name: "Our Works", to: "/our-works" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background dark:bg-background-dark flex items-center justify-center z-50"
        >
          <PuffLoader color={isDark ? "#2563eb" : "#1d4ed8"} size={100} />
        </motion.div>
      ) : (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled
              ? "bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-shrink-0"
              >
                <Link to="/">
                  <img
                    src={`${isDark ? "./1.png" : "./2.png"}`}
                    className="w-[180px] sm:w-[250px] h-auto object-contain"
                  />
                </Link>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <div className="flex items-center space-x-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        className={`text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300 ${
                          location.pathname === item.to
                            ? "text-primary font-semibold"
                            : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button and Theme Toggle */}
              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg rounded-lg mb-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          className={`block px-3 py-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300 ${
                            location.pathname === item.to
                              ? "text-primary font-semibold"
                              : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
