import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiCanva,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import BackgroundIcons from "../components/BackgroundIcons";
import BrandCarousel from "../components/BrandCarousel";
import ReviewsCarousel from "../components/ReviewsCarousel";
import { useState } from "react";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import OurTeams from "../components/OurTeams";
import ContactSection from "../components/ContactFooter";
import WorkflowComponent from "../components/WorkFlow";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import WhatYouGet from "../components/WhatYouGet";
import FAQ from "../components/Faq";
import Herosection from "../components/Herosection";

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

const Home = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section>
      <Helmet>
        <title>Bal Gobind Chaudhary</title>
        <meta
          name="description"
          content="Welcome to Our website — Your trusted partner for modern web development, branding, design, and digital innovation. Let's bring your ideas to life."
        />
        <link rel="canonical" href="" />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark overflow-hidden">
        <BackgroundIcons />
        {/* Hero Section with Consultation Form */}
        <section
          id="home"
          className="relative max-w-7xl  mx-auto min-h-screen flex items-center justify-center"
        >
          <Herosection />
        </section>

        {/* Services Section */}
        <Services />

        {/* Technologies Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="max-w-6xl mx-auto"
          >
            <FadeInSection>
              <h2 className="text-4xl font-bold text-center mb-16">
                Technologies We{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Master
                </span>
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <FaReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <FaWordpress />, name: "WordPress" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiAdobeillustrator />, name: "Illustrator" },
                { icon: <SiAdobephotoshop />, name: "Photoshop" },
                { icon: <SiAdobeaftereffects />, name: "After Effects" },
                { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
              ].map((tech, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-center justify-center p-6 bg-background-light dark:bg-background-light-dark rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3 text-primary">
                      {tech.icon}
                    </div>
                    <span className="text-text-light-secondary dark:text-text-dark-secondary">
                      {tech.name}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Brand Carousel Section */}
        <BrandCarousel />

        {/* Reviews Section */}
        <ReviewsCarousel />

        <WorkflowComponent />
        <WhatYouGet />
        <FAQ />
        {/* <OurTeams /> */}
        <ContactSection />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
