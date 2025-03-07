import React from "react";
import { Link } from "@inertiajs/react";
import whiteCar from "../../images/white-car.png";
import car2 from "../../images/car5.png";
import car3 from "../../images/car6.png";
import tra1 from "../../images/Agricultural Machinery/Land Preparation Machinery/Tractors/tra1.jpg";
import bd1 from "../../images/Construction Machinery/Earthmoving Equipment/Bulldozers/bd1.jpg";
import ex1 from "../../images/Construction Machinery/Earthmoving Equipment/Excavators/ex1.jpg";
import dt2 from "../../images/Construction Machinery/Earthmoving Equipment/Dump Trucks/dt2.jpg";
const carListData1 = [
    { id: 1, name: "Bulldozers", image: bd1, link: route("bulldozers") },
    { id: 2, name: "Excavators", image: ex1, link: route("excavators") },
    { id: 3, name: "Dump_Trucks", image: dt2, link: route("dump_trucks") },
  { id: 4, name: "Backhoe_loaders", image: tra1, link: route("backhoe_loaders") },
];

const carListData2 = [
  { id: 5, name: "Ferrari F8", image: car2, link: "/details/ferrari-f8" },
  { id: 6, name: "Lamborghini Huracan", image: car3, link: "/details/lamborghini-huracan" },
  { id: 7, name: "Tesla Model S", image: whiteCar, link: "/details/tesla-model-s" },
  { id: 8, name: "Kubota Tractor", image: tra1, link: "/details/kubota-tractor" },
];

const carListData3 = [
  { id: 9, name: "Porsche 911", image: car3, link: "/details/porsche-911" },
  { id: 10, name: "Audi R8", image: car2, link: "/details/audi-r8" },
  { id: 11, name: "Ford Mustang", image: whiteCar, link: "/details/ford-mustang" },
  { id: 12, name: "Mahindra Tractor", image: tra1, link: "/details/mahindra-tractor" },
];

let CarList;

CarList = () => {
  return (
    <div className="pb-16">
      <div className="container">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold font-serif mb-2 text-center">
          Our Top Rated Cars 🚗
        </h1>
        <p className="text-xs pb-6 text-center">
          Choose from our highly rated and reviewed cars for the best experience.
        </p>

        {/* Three Divs in One Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First Div - Land Preparation Machinery */}
          <div className="border border-gray-200 hover:border-blue-500 p-3 rounded-xl shadow-md relative">
            <p className="text-lg font-bold px-2 py-1 rounded-md text-black absolute top-0">
            Earthmoving Equipment
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {carListData1.map((data) => (
                <Link key={data.id} href={data.link} className="flex flex-col items-center space-y-1">
                  <div className="w-full h-[100px] flex items-center justify-center">
                    <img src={data.image} alt={data.name} className="w-full h-full object-contain border cursor-pointer" />
                  </div>
                 {/* Title */}
                 <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                  <span className="text-white text-sm font-semibold bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block">
                    View Details
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Second Div - Luxury Sports Cars */}
          <div className="border border-gray-200 hover:border-blue-500 p-3 rounded-xl shadow-md relative">
            <p className="text-lg font-bold px-2 py-1 rounded-md text-black absolute top-0">
              Luxury Sports Cars
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {carListData2.map((data) => (
                <a key={data.id} href={data.link} className="flex flex-col items-center space-y-1">
                  <div className="w-full h-[100px] flex items-center justify-center">
                    <img src={data.image} alt={data.name} className="w-full h-full object-contain border cursor-pointer" />
                  </div>
                  <span className="text-white text-sm font-semibold bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block">
                    View Details
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Third Div - High Performance Vehicles */}
          <div className="border border-gray-200 hover:border-blue-500 p-3 rounded-xl shadow-md relative">
            <p className="text-lg font-bold px-2 py-1 rounded-md text-black absolute top-0">
              High Performance Vehicles
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {carListData3.map((data) => (
                <a key={data.id} href={data.link} className="flex flex-col items-center space-y-1">
                  <div className="w-full h-[100px] flex items-center justify-center">
                    <img src={data.image} alt={data.name} className="w-full h-full object-contain border cursor-pointer" />
                  </div>
                  <span className="text-white text-sm font-semibold bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block">
                    View Details
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="grid place-items-center mt-6">
          <button className="bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
