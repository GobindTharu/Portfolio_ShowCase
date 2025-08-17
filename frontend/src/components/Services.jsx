import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGlobe, FaPenFancy, FaSearchengin } from "react-icons/fa";

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Web Development",
      description: "Custom websites using React, Next.js, WordPress, and more",
    },
    {
      icon: <FaPenFancy className="text-4xl" />,
      title: "Content Creation",
      description:
        "Engaging content that attracts, retains, and grows your business online.",
    },
    {
      icon: <FaSearchengin className="text-4xl" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies for growth",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 bg-background-light dark:bg-background-light-dark"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-text dark:text-text-dark">
            Our Services
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={index * 0.2}>
              <div className="bg-background dark:bg-background-dark p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-text dark:text-text-dark">
                  {service.title}
                </h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary">
                  {service.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
