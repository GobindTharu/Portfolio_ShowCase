import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const isDark = useTheme();

  return (
    <footer className="bg-background-light dark:bg-background-light-dark">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/">
              <img
                src={`${isDark ? "./1.png" : "./2.png"}`}
                className="w-[180px] sm:w-[250px] h-auto object-contain"
              />
            </Link>
            <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 max-w-md">
              Empowering businesses with innovative digital solutions and
              strategic guidance for sustainable growth in the digital age.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text dark:text-text-dark">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-text dark:text-text-dark">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Digital Marketing",
                "Content Creation",
                "SEO Optimization",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-text-light-secondary/10 dark:border-text-dark-secondary/10 mt-12 pt-8 text-center text-text-light-secondary dark:text-text-dark-secondary">
          <p>
            © {new Date().getFullYear()} Navi Infosys. All Rights Reserved.
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
