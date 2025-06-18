import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "digital-marketing",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS keys
    const serviceID = "service_q2qeiol";
    const templateID = "template_a1kb4b4";
    const userID = "Y_TkueeGCgUGPHdgq";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          topic: formData.topic,
        },
        userID
      )
      .then(() => {
        toast.success("Appointment booked successfully!");
        setTimeout(() => {
          window.location.href = "https://contact.naviinfosys.com/thank-you/";
        }, 1500);
      })
      .catch(() => {
        toast.error("Oops! Something went wrong.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-[450px] bg-background-light/50 dark:bg-background-light-dark/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Book Your Free Consultation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
            ></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-background dark:bg-background-dark border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-text dark:text-text-dark placeholder:text-text-light-secondary/50 dark:placeholder:text-text-dark-secondary/50"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-background dark:bg-background-dark border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-text dark:text-text-dark placeholder:text-text-light-secondary/50 dark:placeholder:text-text-dark-secondary/50"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
            ></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-background dark:bg-background-dark border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-text dark:text-text-dark placeholder:text-text-light-secondary/50 dark:placeholder:text-text-dark-secondary/50"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary mb-1"
            ></label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-background dark:bg-background-dark border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-text dark:text-text-dark"
            >
              <option value="digital-marketing">Digital Marketing</option>
              <option value="web-development">Web Development</option>
              <option value="social-media-management">
                Social Media Management
              </option>
              <option value="content-creation">Content Creation</option>
              <option value="video-editing">Video Editing</option>
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity duration-300"
          >
            <span>Submit Now</span>
            <FaArrowRight className="text-sm" />
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;
