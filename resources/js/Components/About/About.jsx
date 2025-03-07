import React from "react";
import CarPng from "../../images/car1.png";

const About = ({ theme }) => {
  return (
    <div className="bg-slate-100 dark:bg-black text-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif dark:text-white"
              >
                About us
              </h1>
              <p
                data-aos="fade-up"
                className="leading-8 tracking-wide text-black dark:text-gray-300"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p
                data-aos="fade-up"
                className="text-black dark:text-gray-300"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </p>
              <button
  data-aos="fade-up"
  className="border-2 border-black text-black px-5 py-2 font-semibold rounded-md transition-all duration-300 hover:bg-yellow-500 hover:text-black dark:border-white dark:text-white dark:hover:bg-yellow-500 dark:hover:text-black"
>
  Get Started
</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
