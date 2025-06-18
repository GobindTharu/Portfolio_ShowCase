import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className=" mx-8 lg:mx-20 mt-8 mb-24"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleCollapse(1)}
          aria-expanded={activeIndex === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span>Step 1</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 1 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
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
        id="accordion-collapse-body-1"
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
          activeIndex === 1 ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Understanding Requirement
        </p>
      </div>

      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleCollapse(2)}
          aria-expanded={activeIndex === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span>Step 2</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 2 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
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
        id="accordion-collapse-body-2"
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === 2 ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Client Onboarding
        </p>
      </div>

      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleCollapse(3)}
          aria-expanded={activeIndex === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span>Step 3</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 3 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
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
        id="accordion-collapse-body-3"
        className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === 3 ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Strategy Planning
        </p>
      </div>

      <h2 id="accordion-collapse-heading-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleCollapse(4)}
          aria-expanded={activeIndex === 4}
          aria-controls="accordion-collapse-body-4"
        >
          <span>Step 4</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 4 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
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
        id="accordion-collapse-body-4"
        className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === 4 ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-4"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Project Delivery
        </p>
      </div>

      <h2 id="accordion-collapse-heading-5">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleCollapse(5)}
          aria-expanded={activeIndex === 5}
          aria-controls="accordion-collapse-body-5"
        >
          <span>Step 5</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 5 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
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
        id="accordion-collapse-body-5"
        className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === 5 ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-5"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Business Mapping
        </p>
      </div>

      <h2 id="accordion-collapse-heading-6">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleCollapse(6)}
          aria-expanded={activeIndex === 6}
          aria-controls="accordion-collapse-body-6"
        >
          <span>Step 6</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              activeIndex === 6 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
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
        id="accordion-collapse-body-6"
        className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === 6 ? "" : "hidden"
        }`}
        aria-labelledby="accordion-collapse-heading-6"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Tracking Success
        </p>
      </div>
    </div>
  );
};

export default FAQ;
