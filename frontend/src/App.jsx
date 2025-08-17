import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaDatabase,
  FaSearchengin,
  FaGlobe,
  FaPenFancy,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { RiSeoFill } from "react-icons/ri";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import OurWorks from "./pages/OurWorks";
import ServicesPage from "./pages/ServicesPage";
import ContactForm from "./components/ContactForm";
import Contactpage from "./pages/Contactpage";

// here are new imports
import BlogsPage from "./pages/BlogsPage";
import BlogsDetails from "./components/BlogsDetails";
import BlogsPostPage from "./admin/Components/BlogPostPage";
import JobsPage from "./pages/JobsPage";
import JobPostForm from "./admin/Components/JobsPostPage";
import JobsDetails from "./components/JobsDetails";
import { Blackhole } from "./components/Blackhole";


// ScrollToTop component to handle scroll position
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const FloatingIcon = ({ icon: Icon, delay, duration, x, y }) => (
  <motion.div
    className="absolute text-4xl text-primary/30"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.3, 0.8, 0.3],
      x: [x, x + 50, x],
      y: [y, y - 50, y],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Icon />
  </motion.div>
);

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

// Wrapper component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contactpage />} />

        {/* Add more routes as you create them */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/detail/:id" element={<BlogsDetails />} />
        <Route path="/admin/blogs-post" element={<BlogsPostPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/jobs-details/:id" element={<JobsDetails />} />
        <Route path="/admin/jobs-post" element={<JobPostForm />} />


        {/* Test Mode  */}

        <Route path="/blackhole" element={<Blackhole />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark transition-colors duration-200">
          <ScrollToTop />
          <Navbar />
          <AnimatedRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
