import React, { useEffect } from "react";
import carPng from "../../images/car.png";
import yellowCar from "../../images/banner-car.png";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Import AOS styles

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // ✅ Initialize AOS properly
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="zoom-in" className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Car"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-lg"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">Effortless</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab.
            </p>
            <button
  data-aos="fade-up"
  data-aos-delay="1500"
  onClick={() => AOS.refreshHard()}
  className="rounded-md bg-blue-500 hover:bg-blue-600 transition duration-500 py-2 px-6 text-white"
>
  Get Started
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
