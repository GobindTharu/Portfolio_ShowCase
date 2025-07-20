import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGlobe,
  FaPenFancy,
  FaSearchengin,
  FaMobileAlt,
  FaChartLine,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaPalette,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiWordpress, SiShopify } from "react-icons/si";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
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

const ServiceCard = ({ icon, title, description, features, benefits }) => (
  <div className="bg-background dark:bg-background-dark p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-5xl text-primary mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-text dark:text-text-dark">
      {title}
    </h3>
    <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
      {description}
    </p>

    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-3 text-text dark:text-text-dark">
        Key Features
      </h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-text-light-secondary dark:text-text-dark-secondary"
          >
            <span className="text-primary">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-3 text-text dark:text-text-dark">
        Benefits
      </h4>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-start space-x-2 text-text-light-secondary dark:text-text-dark-secondary"
          >
            <span className="text-primary">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Web Development",
      description:
        "Transform your digital presence with our cutting-edge web development solutions. From responsive websites to complex web applications, we deliver exceptional user experiences.",
      features: [
        "Custom website development using React, Next.js, and modern frameworks",
        "E-commerce solutions with Shopify and WooCommerce integration",
        "Content Management Systems (WordPress, Strapi, etc.)",
        "Progressive Web Apps (PWA) development",
        "API development and integration",
        "Cross-browser and cross-device compatibility",
      ],
      benefits: [
        "Enhanced online presence and brand visibility",
        "Improved user engagement and conversion rates",
        "Scalable and maintainable codebase",
        "Optimized performance and loading speeds",
        "Secure and reliable web applications",
      ],
    },
    {
      icon: <FaPenFancy />,
      title: "Content Creation",
      description:
        "Create compelling content that resonates with your audience and drives business growth through strategic digital marketing campaigns.",
      features: [
        "Content strategy development and planning",
        "Social media content creation and management",
        "SEO-optimized blog writing and content marketing",
        "Video production and editing",
        "Email marketing campaigns",
        "Social media advertising and management",
      ],
      benefits: [
        "Increased brand awareness and engagement",
        "Higher search engine rankings",
        "Improved lead generation and conversion",
        "Stronger brand identity and voice",
        "Better customer relationships and loyalty",
      ],
    },
    {
      icon: <FaSearchengin />,
      title: "Digital Marketing",
      description:
        "Boost your online visibility and reach your target audience effectively with our comprehensive digital marketing and SEO services.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing and management",
        "Email marketing automation",
        "Analytics and performance tracking",
        "Conversion rate optimization",
      ],
      benefits: [
        "Higher search engine rankings",
        "Increased website traffic and leads",
        "Better ROI on marketing spend",
        "Data-driven marketing decisions",
        "Improved brand authority",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Create powerful mobile applications that engage users and drive business growth across iOS and Android platforms.",
      features: [
        "Native and cross-platform app development",
        "UI/UX design and optimization",
        "App store optimization and deployment",
        "Push notification implementation",
        "API integration and backend development",
        "App analytics and performance monitoring",
      ],
      benefits: [
        "Expanded market reach",
        "Enhanced customer engagement",
        "Improved brand loyalty",
        "New revenue streams",
        "Competitive advantage",
      ],
    },
  ];

  return (
    <section>
      <Helmet>
        <title>Our Services | Bal Gobind Chaudhary</title>
        <meta
          name="description"
          content="Explore the wide range of services offered by Us — from web development and UI/UX design to branding and digital marketing. Let’s build something great together."
        />
        <link
          rel="canonical"
          href="services"
        />
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background-light to-background dark:from-background-light-dark dark:to-background-dark">
          <div className="max-w-6xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
                Comprehensive digital solutions to help your business thrive in
                the digital landscape. From web development to digital
                marketing, we've got you covered.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <FadeInSection key={index} delay={index * 0.2}>
                  <ServiceCard {...service} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 bg-background-light dark:bg-background-light-dark">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                Technologies We{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Work With
                </span>
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <FaCode />, name: "React & Next.js" },
                { icon: <SiWordpress />, name: "WordPress" },
                { icon: <SiShopify />, name: "Shopify" },
                { icon: <FaServer />, name: "Node.js" },
                { icon: <FaDatabase />, name: "MongoDB" },
                { icon: <FaShieldAlt />, name: "Security" },
                { icon: <FaRocket />, name: "Performance" },
                { icon: <FaUsers />, name: "User Experience" },
              ].map((tech, index) => (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-center justify-center p-6 bg-background dark:bg-background-dark rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
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

        {/* Consultation Form */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-center mb-12">
                Ready to{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </FadeInSection>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default ServicesPage;
