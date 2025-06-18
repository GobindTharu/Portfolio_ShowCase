import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ContactSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const isDark = useTheme();
  return (
    <div className="bg-background dark:bg-background-dark text-text dark:text-text-dark py-12 px-4 flex flex-col items-center justify-center">
      <motion.div
        className="flex justify-center space-x-8 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Email Icon */}
        <motion.div
          className="bg-gray-100 p-6 rounded-full"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="url(#gradient-email)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="url(#gradient-email)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="gradient-email"
                  x1="2"
                  y1="4"
                  x2="22"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3dc2ec" />
                  <stop offset="1" stopColor="#4b70f5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>

        {/* Phone Icon */}
        <motion.div
          className="bg-gray-100 p-6 rounded-full"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3746C21.0391 21.7497 20.5099 21.9604 19.96 21.96C16.4289 21.6854 13.0271 20.5341 10.08 18.62C7.32863 16.8718 5.01116 14.5544 3.26 11.8C1.34 8.83632 0.188685 5.41218 0.0400001 1.86C0.039372 1.31107 0.249914 0.782049 0.624307 0.407254C0.9987 0.0324586 1.52634 -0.178316 2.08 -0.18H5.08C6.12365 -0.191677 7.01626 0.609304 7.14 1.64C7.24764 2.63131 7.47085 3.60441 7.8 4.54C8.04547 5.22184 7.98581 5.9687 7.63 6.6L6.29 8.95C7.93087 11.7917 10.2083 14.0691 13.05 15.71L15.4 14.37C16.0313 14.0142 16.7782 13.9545 17.46 14.2C18.3956 14.5291 19.3687 14.7524 20.36 14.86C21.4044 14.9846 22.2101 15.8909 22.19 16.95L22 16.92Z"
                stroke="url(#gradient-phone)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="gradient-phone"
                  x1="0"
                  y1="0"
                  x2="22"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3dc2ec" />
                  <stop offset="1" stopColor="#4b70f5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>

        {/* Chat/Skype Icon */}
        <motion.div
          className="bg-gray-100 p-6 rounded-full"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                stroke="url(#gradient-chat)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="gradient-chat"
                  x1="3"
                  y1="3"
                  x2="21"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3dc2ec" />
                  <stop offset="1" stopColor="#4b70f5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        We're Here To Help
      </motion.h1>

      <motion.p
        className="text-center text-text dark:text-text-dark mb-8 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Learn as much as possible about our services before investing. As the
        heading says, we are here to help.
      </motion.p>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3dc2ec] to-[#4b70f5]">
          Navi Infosys Pvt. Ltd
        </h2>
        <p className="text-text dark:text-text-dark mt-2">
          Chobhar & Baneshwor, Kathmandu
        </p>
        <p className="text-text dark:text-text-dark mt-2">
          Tel: +977- 9861141921, 9803348457
        </p>
        <p className="text-text dark:text-text-dark mt-2">
          Email: mail@naviinfosys.com
        </p>
      </motion.div>
    </div>
  );
}
