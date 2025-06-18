import React from "react";

const OurTeams = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {[
            // Example Team Data Array
            {
              name: "Bonnie Green",
              position: "CEO & Web Developer",
              description:
                "Bonnie drives the technical strategy of the flowbite platform and brand.",
              image:
                "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
            },
            {
              name: "Jese Leos",
              position: "CTO",
              description:
                "Jese drives the technical strategy of the flowbite platform and brand.",
              image:
                "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.image}
                  alt={`${member.name} Avatar`}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.position}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {["facebook", "twitter", "github", "dribbble"].map(
                    (platform, pidx) => (
                      <li key={pidx}>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
