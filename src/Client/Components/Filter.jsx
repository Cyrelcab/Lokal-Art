import React, { useState } from "react";
import { Icon } from "@iconify/react";

const FilterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const togglePopup = () => setShowPopup(!showPopup);
  const toggleCategoryDropdown = () =>
    setShowCategoryDropdown(!showCategoryDropdown);
  const toggleLocationDropdown = () =>
    setShowLocationDropdown(!showLocationDropdown);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  const categories = ["Painting", "Digital Artist", "Tattoo Artist"];
  const locations = ["Butuan City", "Bayugan City"];

  return (
    <div>
      {/* Filter button */}
      <button
        onClick={togglePopup}
        className=" hover:text-cyan-500 p-2 px-5 border border-gray-300 rounded-full"
      >
        <div className="flex">
          <Icon icon="mage:filter" className="mt-1 text-lg" />
          <p className="font-bold ml-2">Filter</p>
        </div>
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="bg-gray-100 pl-10 p-5 fixed top-20 h-full left-0 w-80 rounded-tr-2xl border-2 border-gray-300">
          {/* Popup header */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <Icon icon="mage:filter" className="mt-1 text-lg" />
              <label className="font-bold ml-2 text-lg">Filter</label>
            </div>
            <Icon
              icon="tabler:arrow-left"
              className="mt-1 text-2xl cursor-pointer hover:text-cyan-500"
              onClick={togglePopup} // Close the popup on click
            />
          </div>

          {/* Popup content */}
          <div className="pt-8 space-y-4">
            {/* Category filter */}
            <div className="border-b-2 rounded-bl-xl rounded-br-xl px-2 border-gray-300 hover:border-cyan-500">
              <div
                className="flex justify-between items-center cursor-pointer py-2 hover:text-cyan-500"
                onClick={toggleCategoryDropdown}
              >
                <div className="flex items-center">
                  <Icon icon="tabler:category" className="mt-1 text-lg" />
                  <label className="ml-2">Category</label>
                </div>
                <Icon
                  icon={showCategoryDropdown ? "ep:arrow-up" : "ep:arrow-right"}
                  className="mt-1 text-lg"
                />
              </div>
              {showCategoryDropdown && (
                <div className="my-2 ml-6 space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center hover:text-cyan-500">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${index}`}>{category}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Location filter */}
            <div className="border-b-2 rounded-bl-xl rounded-br-xl px-2 border-gray-300 hover:border-cyan-500">
              <div
                className="flex justify-between items-center cursor-pointer py-2 hover:text-cyan-500"
                onClick={toggleLocationDropdown}
              >
                <div className="flex items-center">
                  <Icon icon="stash:globe-light" className="mt-1 text-lg" />
                  <label className="ml-2">Location</label>
                </div>
                <Icon
                  icon={showLocationDropdown ? "ep:arrow-up" : "ep:arrow-right"}
                  className="mt-1 text-lg"
                />
              </div>
              {showLocationDropdown && (
                <div className="my-2 ml-6 space-y-2">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center hover:text-cyan-500">
                      <input
                        type="checkbox"
                        id={`location-${index}`}
                        checked={selectedLocation.includes(location)}
                        onChange={() => handleLocationChange(location)}
                        className="mr-2"
                      />
                      <label htmlFor={`location-${index}`}>{location}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPopup;
