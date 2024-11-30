import React, { useState } from "react";
import { Icon } from "@iconify/react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

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
        className="hover:text-cyan-500 inline-flex justify-center py-[0.40rem] px-[0.50rem] md:px-12 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm lg:space-x-2"
      >
        <p className="hidden lg:block">Sort</p>
        <Icon icon="material-symbols-light:sort" width="24" height="24" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 left-[-40px] sm:left-0">
          <div className="py-1" role="menu">
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
