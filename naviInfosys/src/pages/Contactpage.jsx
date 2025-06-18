import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import ContactSection from "../components/ContactFooter";

const Contactpage = () => {
  return (
    <section>
      <Helmet>
        <title>Contact Us | Navi Infosys</title>
        <meta
          name="description"
          content="Get in touch with Navi Infosys. We're here to answer your questions, discuss your project ideas, and help you get started with the right tech solutions."
        />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/contact"
        />
      </Helmet>

      <Navbar />
      <div className="h-screen w-full flex justify-center items-center">
        <ContactForm />
      </div>
      <ContactSection />
      <div className="flex justify-center items-center w-full h-screen p-4">
        <div className="relative w-full max-w-6xl h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.62968345290875!2d85.3444226584094!3d27.69534361774498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875357d1694ebabd%3A0x244d91da00e163c6!2sNavi%20Infosys!5e0!3m2!1sne!2snp!4v1744542516577!5m2!1sne!2snp"
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
