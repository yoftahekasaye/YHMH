import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: <FaCameraRetro className="text-5xl text-primary group-hover:text-black transition-all duration-300" />,
    link: "#",
    description: "Get the most affordable rental rates with top-class service.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: <GiNotebook className="text-5xl text-primary group-hover:text-black transition-all duration-300" />,
    link: "#",
    description: "Ensuring your journey is quick, efficient, and secure.",
    aosDelay: "500",
  },
  {
    name: "Experienced Drivers",
    icon: <SlNote className="text-5xl text-primary group-hover:text-black transition-all duration-300" />,
    link: "#",
    description: "Highly skilled drivers for a smooth and stress-free ride.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1 data-aos="fade-up" className="text-3xl font-semibold text-center sm:text-4xl font-serif">
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="group flex flex-col items-center text-center space-y-5 p-6 sm:p-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:bg-primary dark:hover:bg-yellow-500 transition-all duration-300 ease-in-out"
              >
                {/* Icon */}
                <div className="flex justify-center">{skill.icon}</div>

                {/* Title */}
                <h1 className="text-2xl font-bold group-hover:text-black transition-all duration-300">
                  {skill.name}
                </h1>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-black transition-all duration-300">
                  {skill.description}
                </p>

                {/* Learn More Link */}
                <a href={skill.link} className="inline-block text-lg font-semibold py-2 text-primary group-hover:text-black transition-all duration-300">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
