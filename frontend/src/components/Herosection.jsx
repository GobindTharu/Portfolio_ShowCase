import { SparklesIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import { Button1, Button2 } from "./Button/buttons";
import Profile from "./Profile";
import { letterText } from "../Constants /constant";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const Herosection = () => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    if (isWriting && charIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + letterText[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [charIndex, isWriting]);

  const startWriting = () => {
    setDisplayText("");
    setCharIndex(0);
    setIsWriting(true);
  };

  return (
    <>
      <div className="absolute  w-full top-36 min-h-screen">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, translateX: -100 }}
          transition={{ duration: 2 }}
          className="flex flex-col  md:flex-row items-center justify-start  w-full z-[20] gap-6 sm:gap-3 md:gap-5 lg:gap-10"
        >
          {/* Left Section */}
          <div className="flex flex-col  sm:ml-0 md:ml-0  justify-center gap-2 sm:gap-5 md:gap-4 text-start md:text-left sm:text-left w-full z-50">
            <motion.div
              variants={slideInFromTop(0.25)}
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 2 }}
              className="w-[200px] sm:w-[260px] md:w-[300px] py-[6px] sm:py-[8px] px-[4px] border rounded-xl border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
            >
              <span className="flex items-center justify-start">
                <SparklesIcon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mr-2 sm:mr-3  text-[#8e63f1]" />
                <h1 className="text-[12px] sm:text-[14px] md:text-[16px] xs:text-[333px] text-center  dark:text-gray-200 sm:text-center text-violet-800">
                  Fullstack Developer Portfolio
                </h1>
              </span>
            </motion.div>

            <motion.div
              variants={slideInFromTop(0.25)}
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 2 }}
              className="my-3 sm:my-4 md:my-5 z-[10]"
            >
              <h2 className="Welcome-text uppercase tracking-wide text-base sm:text-lg md:text-md lg:text-xl text-purple-500 text-center md:text-left">
                Dynamic Web Design With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                  React.js and Next.js
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={slideInFromTop(0.25)}
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[7000px] sm:max-w-[600px] w-auto h-auto"
            >
              <span className="text-violet-800 ">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Providing the best{" "}
                </h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  <Typewriter
                    words={[
                      "Project Experience",
                      "Responsive Layouts",
                      "Interactive Web Interfaces",
                      "Authentication & Authorization",
                      "SEO Optimization",
                      "Data Privacy Protection",
                      "Performance Optimization",
                      "Web Security Best Practices",
                      "Secure APIs with JWT",
                      "Fast Load Times",
                      "Code Scalability",
                      "Cross-Browser Compatibility",
                      "Mobile Optimization",
                      "Mobile-First Design",
                      "HTTPS & SSL Integration",
                      "Image & Asset Optimization",
                      "Database Security",
                      "DDoS Protection Techniques",
                      "Clean Code & Best Practices",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </span>
              </span>
            </motion.div>

            <motion.div
              variants={slideInFromTop(0.25)}
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 2 }}
              className="flex flex-col mt-3 mb-0 text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span className="text-violet-500">
                I&apos;m
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Bal Gobind Chaudhary{" "}
                </span>
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromTop(0.25)}
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 2 }}
              className="text-lg dark:text-gray-300 my-5 max-w-[600px]"
            >
              Full Stack Software Developer with experience in MERN Stack
              Developer.
              {displayText}
            </motion.p>

            <motion.div
              variants={slideInFromTop(0.5)}
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 2 }}
              className="flex mx-auto md:mx-0 gap-5"
            >
              <Button1 startWriting={startWriting} />
              <Button2 />
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            variants={slideInFromRight(1.5)}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative flex top-0 flex-col sm:flex-row items-center justify-center w-full p-4 sm:p-6 lg:p-8"
          >
            <Profile />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Herosection;
