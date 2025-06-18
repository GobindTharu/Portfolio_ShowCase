import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react"; // If using Lucide for icons

const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      {children}
    </motion.div>
  );
};

const ServiceItem = ({ number, title }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100 h-full"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#3dc2ec] to-[#4b70f5] text-white font-bold">
      {number}
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    </div>
  </motion.div>
);

const WhatYouGet = () => {
  return (
    <section className=" mx-8 lg:mx-20">
      <div>
        <h1 className="text-center text-2xl lg:text-4xl font-semibold mb-10 border-4 p-4 border-[#4b70f5]">
          Our{" "}
          <span className=" bg-gradient-to-r from-[#4b70f5] to-[#3dc2ec] text-transparent bg-clip-text">
            {" "}
            Digital Marketing
          </span>{" "}
          Workflow
        </h1>
        <FadeInSection delay={0.3}>
          <div className="mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceItem number="01" title="Overview of Mistakes" />
              <ServiceItem number="02" title="Marketing Audit" />
              <ServiceItem number="03" title="Marketing Strategy" />
              <ServiceItem number="04" title="And Many More" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default WhatYouGet;
