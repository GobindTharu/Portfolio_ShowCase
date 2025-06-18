import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaClipboardList,
  FaRegLightbulb,
  FaLaptopCode,
  FaCheckCircle,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WorkflowComponent() {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Requirement Gathering",
      description:
        "We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.",
      icon: <FaClipboardList className="text-4xl" />,
    },
    {
      id: 2,
      number: "02",
      title: "Plan & Resources",
      description:
        "After gathering requirements, we devise a strategic path and select resources. As a leading IT company, we offer clients a roadmap, laying the groundwork for a successful project.",
      icon: <FaRegLightbulb className="text-4xl" />,
    },
    {
      id: 3,
      number: "03",
      title: "Design & Develop",
      description:
        "In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      id: 4,
      number: "04",
      title: "Quality Assurance",
      description:
        "In this phase, we rigorously test and validate to ensure all elements work correctly and meet standards, delivering the desired user experience. Our team tests each aspect for reliability.",
      icon: <FaCheckCircle className="text-4xl" />,
    },
    {
      id: 5,
      number: "05",
      title: "Deployment",
      description:
        "Once the product meets standards, we deploy it, releasing product or updates on servers. This ensures our products are delivered seamlessly and efficiently.",
      icon: <FaRocket className="text-4xl" />,
    },
    {
      id: 6,
      number: "06",
      title: "Support & Maintenance",
      description:
        "In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Optimization keeps performance high and client satisfaction focused on operational excellence.",
      icon: <FaHeadset className="text-4xl" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: custom * 0.1,
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      className="bg-background dark:bg-background-dark text-text dark:text-text-dark py-16 px-4 lg:px-8"
      ref={containerRef}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3dc2ec] to-[#4b70f5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-center text-2xl lg:text-4xl font-semibold mb-10 border-4 p-4 border-[#4b70f5]">
          Our{" "}
          <span className=" bg-gradient-to-r from-[#4b70f5] to-[#3dc2ec] text-transparent bg-clip-text">
            {" "}
            Web Development
          </span>{" "}
          Journey
        </h1> 
          </motion.h2>
          <motion.h3
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Enjoy seamless service with our easy steps!
          </motion.h3>
          <motion.p
            className="text-text dark:text-text-dark max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            
          </motion.p>
        </motion.div>

        {/* Connected Process Flow */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            <motion.svg
              width="2"
              height="100%"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="url(#gradient-line)"
                strokeWidth="2"
                strokeDasharray="6 3"
                variants={lineVariants}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#3dc2ec" />
                  <stop offset="1" stopColor="#4b70f5" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`bg-background dark:bg-background-dark text-text dark:text-text-dark rounded-lg shadow-md overflow-hidden ${
                  index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                }`}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => toggleExpand(step.id)}
                layout
              >
                <div className="p-6 cursor-pointer">
                  <div className="flex items-start">
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white mr-4 flex-shrink-0"
                      variants={iconVariants}
                      animate={["visible", "pulse"]}
                    >
                      {step.icon}
                    </motion.div>

                    <div className="flex-grow">
                      <motion.div
                        className="text-sm font-bold text-blue-600"
                        variants={numberVariants}
                      >
                        {step.number}
                      </motion.div>

                      <motion.h4
                        className="text-xl font-semibold mb-2"
                        variants={titleVariants}
                      >
                        {step.title}
                      </motion.h4>

                      <AnimatePresence>
                        {(expandedId === step.id ||
                          window.innerWidth >= 1024) && (
                          <motion.p
                            className="text-text dark:text-text-dark"
                            variants={descriptionVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {window.innerWidth < 1024 && (
                        <motion.div
                          className="mt-2 text-blue-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {expandedId === step.id ? "Show less" : "Learn more"}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step Connector (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="flex justify-center lg:hidden">
                    <motion.div
                      className="w-1 h-8 bg-gradient-to-b from-primary to-secondary"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">Start Your Project Now</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
