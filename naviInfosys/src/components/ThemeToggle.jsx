import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-background-light dark:bg-background-light-dark text-primary transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="relative w-6 h-6"
      >
        {isDark ? (
          <FaMoon className="absolute inset-0 w-full h-full" />
        ) : (
          <FaSun className="absolute inset-0 w-full h-full" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
