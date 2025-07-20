import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import ContactSection from "../components/ContactFooter";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Contactpage = () => {
  return (
    <section>
      <Helmet>
        <title>Contact Us | Bal Gobind Chaudahry</title>
        <meta
          name="description"
          content="Get in touch with Us. We're here to answer your questions, discuss your project ideas, and help you get started with the right tech solutions."
        />
        <link rel="canonical" href="contact" />
      </Helmet>

      <Navbar />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 "
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

      <ContactSection />
      <div className="flex justify-center items-center w-full h-screen p-4">
        <div className="relative w-full max-w-6xl h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d28192.419508357183!2d82.95008276584628!3d27.6240934022138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM3JzMyLjciTiA4MsKwNTgnMTIuNCJF!5e1!3m2!1sen!2snp!4v1752987621717!5m2!1sen!2snp"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contactpage;
