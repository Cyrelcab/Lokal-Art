import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Transaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setServiceIsOpen] = useState(false);
  const [showArtworkPopup, setShowArtworkPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Payment");

  const options = ["G-Cash", "Paypal", "Pay Maya"]; // Define dropdown options
  const services = ["Illustration Services", "Custom Tattoo", "Temporary Tattoo", "Custom Painting"];

  // Toggle Service Dropdown
  const toggleServiceDropdown = () => {
    setServiceIsOpen(!isServiceOpen);
    // Close the Payment dropdown if it's open
    if (isOpen) setIsOpen(false);
  };

  // Toggle Payment Dropdown
  const togglePaymentDropdown = () => {
    setIsOpen(!isOpen);
    // Close the Service dropdown if it's open
    if (isServiceOpen) setServiceIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleServiceClick = (service) => {
    setSelectedOption(service);
    setServiceIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleClosePopup = () => {
    setShowArtworkPopup(false); // Close the popup when close button is clicked
  };

  const openPopup = () => {
    setShowArtworkPopup(true); // Open the popup when Book a Transaction button is clicked
  };

  return (
    <div>
      {/* Book a Transaction Button */}
      <button
        onClick={openPopup}
        className="p-2 bg-cyan-400 px-[53px] text-white rounded-full hover:bg-cyan-500 mt-4"
      >
        Book a Transaction
      </button>

      {/* Popup */}
      {showArtworkPopup && (
        <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded-md space-y-3 w-[60%] max-h-[500px] overflow-y-auto">
            <div className="relative">
              {/* Transaction Information */}
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl text-cyan-400">Transaction Information</h1>
                <p className="text-sm text-gray-400">Input the necessary information for the transaction</p>
              </div>
              {/* Close Button */}
              <button
                onClick={handleClosePopup}
                className="absolute top-0 right-0 text-black hover:bg-red-600 hover:text-white p-2 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>
            </div>

            <div className="inline-flex space-x-6 ">
              <div className="justify-center items-center space-y-4 ">
                {/* Customer Name Input */}
                <div className="pt-2">
                  <label className="text-gray-600">Customer Name</label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="Name"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>

                {/* Services Dropdown */}
                <div className="flex flex-col">
                  <label className="text-gray-600">Services</label>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={toggleServiceDropdown}
                      className="hover:text-cyan-500 inline-flex justify-center w-full px-4 py-3 text-sm font-bold text-gray-700 bg-white border-b-2 border-gray-300 rounded-xl shadow hover:shadow-cyan-500"
                    >
                      {selectedOption}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isServiceOpen && (
                      <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {services.map((service, index) => (
                            <button
                              key={index}
                              onClick={() => handleServiceClick(service)}
                              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                              role="menuitem"
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Date Input */}
                <div className="pt-2">
                  <label className="text-gray-600">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>
              </div>

              {/* Payment Method Dropdown */}
              <div className="justify-center items-center space-y-4">
                <div className="flex flex-col">
                  <label className="text-gray-600">Payment Method</label>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={togglePaymentDropdown}
                      className="hover:text-cyan-500 inline-flex justify-center w-full px-4 py-3 text-sm font-bold text-gray-700 bg-white border-b-2 border-gray-300 rounded-xl shadow hover:shadow-cyan-500"
                    >
                      {selectedOption}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                </div>

                {/* Payment Amount Input */}
                <div className="pt-2">
                  <label className="text-gray-600">Payment Amount</label>
                  <input
                    type="number"
                    id="number"
                    name="payment number"
                    placeholder="₱"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>

                {/* Contact Number Input */}
                <div className="pt-2">
                  <label className="text-gray-600">Contact Number</label>
                  <input
                    type="number"
                    id="number"
                    name="payment number"
                    placeholder="#"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex flex-col items-center justify-center pt-5">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-500 text-sm">
                  Accept Terms and Conditions
                </span>
              </label>

              <button className="mt-3 p-2 bg-cyan-400 w-[50%] text-white rounded-lg hover:bg-cyan-500">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
