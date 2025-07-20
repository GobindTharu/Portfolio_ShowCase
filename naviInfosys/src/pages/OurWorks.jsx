import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { brands } from "../utils/crouselbrands";
import BackgroundIcons from "../components/BackgroundIcons";
import ReviewsCarousel from "../components/ReviewsCarousel";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

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

const OurWorks = () => {
  return (
    <section>
      <Helmet>
        <title>Our Works | Bal Gobind Chaudhary</title>
        <meta
          name="description"
          content="Discover the clients and brands that we  has successfully partnered with. Explore stories of innovation and digital success."
        />
        <link
          rel="canonical"
          href="our-works"
        />
      </Helmet>
      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark pt-20">
        <BackgroundIcons />

        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients
            </span>
          </h1>
          <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
            Discover the amazing brands and partners we've had the privilege to
            work with. Each collaboration tells a unique story of innovation and
            success.
          </p>
        </motion.header>

        {/* Brands Grid */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <FadeInSection key={brand.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-background  p-6 rounded-xl shadow-inner mb-6"
                    >
                      <img
                        src={brand.logoUrl}
                        alt={brand.name}
                        className="h-24 object-contain"
                      />
                    </motion.div>
                    <h2 className="text-xl font-semibold text-center mb-4 text-text dark:text-text-dark">
                      {brand.name}
                    </h2>
                    <a
                      href={brand.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300"
                    >
                      Visit Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          {/* Reviews Section */}
          <ReviewsCarousel />

          {/* Call to Action */}
          <FadeInSection delay={0.5}>
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Want to be our next success story?
              </h2>
              <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Join our growing list
                of satisfied clients.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all duration-300 text-lg font-semibold"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default OurWorks;
