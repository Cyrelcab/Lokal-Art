import React, { useState } from "react";
import { Icon } from "@iconify/react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const options = ["Recommended", "Most Popular", "New Artist"];

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="hover:text-cyan-500 inline-flex justify-center w-40 px-4 py-3 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm"
      >
        {selectedOption}
        <Icon icon="simple-line-icons:arrow-down" className="mt-1 ml-3"/>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
