import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundIcons from "../components/BackgroundIcons";
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
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section>
      <Helmet>
        <title>About Us || Bal Gobind Chaudhary</title>
        <meta
          name="description"
          content="Learn more about Bal Gobind Chaudhary — our mission, vision, and the team behind the innovative solutions. Discover how we empower businesses with cutting-edge technology."
        />
        <link
          rel="canonical"
          href="https://naviinfosys.sarojpanthi.tech/about"
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
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              US
            </span>
          </h1>
          <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-3xl mx-auto">
            Empowering businesses with innovative digital solutions and
            strategic guidance for sustainable growth.
          </p>
        </motion.header>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Who We Are */}
          <FadeInSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Who We Are
              </h2>
              <div className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  Forward-thinking digital agency that
                  combines creativity with technical expertise to deliver
                  exceptional results. Our team of passionate professionals is
                  dedicated to helping businesses navigate the digital landscape
                  and achieve their goals.
                </p>
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
                  Founded with a vision to bridge the gap between traditional
                  business practices and modern digital solutions, we've grown
                  into a trusted partner for businesses across various
                  industries.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Our Mission */}
          <FadeInSection delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Mission
              </h2>
              <div className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary mb-4">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance visibility, and create lasting value. We
                  strive to be at the forefront of digital transformation,
                  helping our clients adapt and thrive in an ever-evolving
                  digital landscape.
                </p>
                <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary">
                  Our commitment to excellence, transparency, and continuous
                  innovation ensures that we deliver solutions that not only
                  meet but exceed our clients' expectations.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Why Choose Us */}
          <FadeInSection delay={0.4}>
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <div className="bg-background-light dark:bg-background-light-dark rounded-2xl p-8 shadow-lg">
                <ul className="space-y-6">
                  {[
                    {
                      title: "Expertise & Experience",
                      description:
                        "Our team brings years of experience and deep expertise in digital technologies and marketing strategies.",
                    },
                    {
                      title: "Custom Solutions",
                      description:
                        "We create tailored solutions that align perfectly with your business goals and requirements.",
                    },
                    {
                      title: "Innovation First",
                      description:
                        "We stay ahead of industry trends and implement cutting-edge solutions for optimal results.",
                    },
                    {
                      title: "Client-Centric Approach",
                      description:
                        "Your success is our priority. We work closely with you to ensure complete satisfaction.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex flex-col md:flex-row md:items-start gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-text dark:text-text-dark">
                          {item.title}
                        </h3>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
