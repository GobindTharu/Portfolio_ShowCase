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
        <title>Navi Infosys</title>
        <meta
          name="description"
          content="Welcome to Navi Infosys — Your trusted partner for modern web development, branding, design, and digital innovation. Let's bring your ideas to life."
        />
        <link rel="canonical" href="https://naviinfosys.sarojpanthi.tech/" />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark overflow-hidden">
        <BackgroundIcons />
        {/* Hero Section with Consultation Form */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-12 lg:mb-18">
                <Typewriter
                  words={[
                    "We Build Funnels",
                    "We Generate Leads",
                    "We Grow Businesses",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary mb-8 max-w-2xl">
                Sales Funnels | Performance Marketing | Lead Generation |
                Automation | Paid Ads | Website Development | CRM Integration
              </p>
            </motion.div>

            {/* Right Form */}
            <ContactForm />
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Technologies Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
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
                { icon: <FaWordpress />, name: "WordPress" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiMongodb />, name: "MongoDB" },
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
          </div>
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
