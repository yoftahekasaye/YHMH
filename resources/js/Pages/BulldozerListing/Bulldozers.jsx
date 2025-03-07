import React, { useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import FiltersBulldozer from "./FiltersBulldozer";
import bd1 from "../../images/Construction Machinery/Earthmoving Equipment/Bulldozers/bd1.jpg";

// Dummy Product Data
const dummyProducts = [
  { id: 1, name: "Caterpillar D8T", price: 250000, rating: 4.5, image: bd1, reviews: 120, condition: "New", brand: "Caterpillar", type: "Buy" },
  { id: 2, name: "Komatsu D155AX", price: 180000, rating: 4.2, image: bd1, reviews: 90, condition: "Used", brand: "Komatsu", type: "Rent" },
  { id: 3, name: "John Deere 750K", price: 160000, rating: 4.3, image: bd1, reviews: 80, condition: "Refurbished", brand: "John Deere", type: "Sell" },
  { id: 4, name: "Liebherr PR 766", price: 200000, rating: 4.8, image: bd1, reviews: 150, condition: "New", brand: "Liebherr", type: "Buy" },
  { id: 5, name: "Case 2050M", price: 140000, rating: 4.0, image: bd1, reviews: 70, condition: "Used", brand: "Caterpillar", type: "Rent" },
  { id: 6, name: "Caterpillar D6", price: 120000, rating: 3.9, image: bd1, reviews: 60, condition: "Refurbished", brand: "Komatsu", type: "Sell" },
];

// Price Filter Options
const priceRanges = [
  { label: "Under $150,000", min: 0, max: 150000 },
  { label: "$150,000 - $200,000", min: 150000, max: 200000 },
  { label: "Above $200,000", min: 200000, max: Infinity },
];

const Bulldozers = () => {
  const { auth } = usePage().props;
  const [products] = useState(dummyProducts);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const productsPerPage = 3;

  // Reset Filters
  const resetFilters = () => {
    setSelectedPrice(null);
    setSelectedModel("");
    setSelectedCondition("");
    setSelectedBrand("");
    setSelectedType("");
  };

  // Apply Filters
  const filteredProducts = products.filter((product) => {
    return (
      (!selectedPrice || (product.price >= selectedPrice.min && product.price <= selectedPrice.max)) &&
      (!selectedModel || product.name.includes(selectedModel)) &&
      (!selectedCondition || product.condition === selectedCondition) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedType || product.type === selectedType)
    );
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Load More Functionality
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  return (
    <>
      <Head title="Bulldozers" />
      <Navbar auth={auth} />

      <div className="bg-gray-50 dark:bg-black dark:text-white text-black min-h-screen flex">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 h-full min-h-screen bg-gray-100 dark:bg-gray-900 p-6 shadow-lg fixed left-0 top-16 overflow-y-auto">
          <FiltersBulldozer
            priceRanges={priceRanges}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedCondition={selectedCondition}
            setSelectedCondition={setSelectedCondition}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            resetFilters={resetFilters}
          />
        </div>

        {/* Main Content */}
        <div className="w-full sm:w-3/4 ml-auto p-6">
          <div className="max-w-7xl mx-auto">

            {/* Fixed H1 Visibility */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center relative z-20 bg-gray-50 dark:bg-black py-10">
              Bulldozers 🏗️
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
                >
                  <a href="#" className="block relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-md transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{product.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300">${product.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Condition: {product.condition}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Brand: {product.brand}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Type: {product.type}</p>
                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleProducts < filteredProducts.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMoreProducts}
                  className="px-6 py-3 text-lg font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300"
                >
                  Load More
                </button>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-md text-lg font-semibold transition-all duration-300 ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Bulldozers;
