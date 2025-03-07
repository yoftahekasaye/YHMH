import React from "react";

const FiltersBulldozer = ({
  priceRanges, selectedPrice, setSelectedPrice,
  selectedModel, setSelectedModel,
  selectedCondition, setSelectedCondition,
  selectedBrand, setSelectedBrand,
  selectedType, setSelectedType,
  resetFilters
}) => {
  return (
    <aside className="w-full h-full min-h-screen bg-gray-100 dark:bg-gray-900 p-6 shadow-lg overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Filter Construction Machinery</h2>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <div className="flex flex-col space-y-2 mt-2">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              onClick={() => setSelectedPrice(range)}
              className={`px-4 py-2 text-sm font-semibold border rounded-md transition-all duration-300 ${
                selectedPrice?.label === range.label
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Model Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Model</h3>
        <select
          name="model"
          className="w-full p-2 border rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">All Models</option>
          <option value="D8T">Caterpillar D8T</option>
          <option value="D155AX">Komatsu D155AX</option>
          <option value="750K">John Deere 750K</option>
          <option value="PR 766">Liebherr PR 766</option>
        </select>
      </div>

      {/* Condition Filter (Radio Buttons) */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Condition</h3>
        <div className="flex flex-col space-y-2">
          {["New", "Used", "Refurbished"].map((condition) => (
            <label key={condition} className="flex items-center space-x-2">
              <input
                type="radio"
                name="condition"
                value={condition}
                checked={selectedCondition === condition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="accent-blue-600"
              />
              <span>{condition}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Brand</h3>
        <select
          name="brand"
          className="w-full p-2 border rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="Caterpillar">Caterpillar (CAT)</option>
          <option value="Komatsu">Komatsu</option>
          <option value="Shantui">Shantui</option>
          <option value="John Deere">John Deere</option>
        </select>
      </div>

      {/* Transaction Type (Buy/Sell/Rent) */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Transaction Type</h3>
        <select
          name="type"
          className="w-full p-2 border rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Rent">Rent</option>
        </select>
      </div>

      {/* Reset Filters */}
      <button
        onClick={resetFilters}
        className="w-full px-4 py-2 text-sm font-semibold border rounded-md bg-red-500 text-white hover:bg-red-700 mt-4"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FiltersBulldozer;
