import { PenIcon } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What services does your software company provide?",
    answer:
      "We offer a full range of services including custom software development, web and mobile app development, UI/UX design, IT consulting, maintenance, and cloud integration.",
  },
  {
    question: "How do you ensure project confidentiality?",
    answer:
      "We sign NDA (Non-Disclosure Agreements) with our clients to ensure complete confidentiality and secure handling of all intellectual property and sensitive information.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our team is proficient in modern technologies like React, Node.js, Python, .NET, Java, Angular, Flutter, React Native, MongoDB, SQL, AWS, and more, based on project requirements.",
  },
  {
    question: "How do you manage communication during the project?",
    answer:
      "We use tools like Slack, Zoom, and Jira for regular updates, weekly demos, progress tracking, and real-time communication. A dedicated project manager ensures everything runs smoothly.",
  },

  {
    question: "Can you work with startups and small businesses?",
    answer:
      "Absolutely. We specialize in scalable, budget-friendly solutions tailored to startups and small businesses. We offer MVP development, consultation, and long-term support.",
  },

  {
    question: "How long will my project take to complete?",
    answer:
      "Project timelines vary depending on complexity and scope. After our initial discovery phase, we provide a detailed timeline with clear milestones and delivery dates.",
  },
  {
    question: "Can I get a free consultation or quote?",
    answer:
      "Yes, we offer a free initial consultation to understand your needs and provide a detailed proposal and cost estimation.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="max-w-7xl lg:mx-auto mx-8 mt-8 mb-24"
      id="accordion-collapse"
    >
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              onClick={() => toggleCollapse(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border  ${
                index === 0 ? "rounded-t-xl" : ""
              } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-3 h-3 ${
                  activeIndex === index ? "rotate-180" : ""
                } shrink-0`}
                fill="none"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`p-5 border ${
              index === faqs.length - 1 ? "rounded-b-xl" : ""
            } border-t-0 border-gray-200 dark:border-gray-700 ${
              activeIndex === index ? "" : "hidden"
            } dark:bg-gray-900`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <p className="flex gap-4 items-center justify-center  text-gray-500 dark:text-gray-400">
              <PenIcon />
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
