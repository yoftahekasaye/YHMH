import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";

const BackhoeLoaders = () => {
  const { auth } = usePage().props;

  return (
    <>
      <Head title="Backhoe Loaders" />
      <Navbar auth={auth} />

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Backhoe Loaders 🚜
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Discover our backhoe loaders for digging, lifting, and material handling.
        </p>

        <div className="flex justify-center mt-8">
          <img
            src="/images/Construction Machinery/Earthmoving Equipment/Backhoe Loaders/bl1.jpg"
            alt="Backhoe Loader"
            className="w-2/3 sm:w-1/2 md:w-1/3 rounded-lg shadow-lg"
          />
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-6">
          <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
            🔙 Back to Home
          </a>
        </div>
      </div>
    </>
  );
}

export default BackhoeLoaders;
