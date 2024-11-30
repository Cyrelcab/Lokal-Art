import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Transaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setServiceIsOpen] = useState(false);
  const [showArtworkPopup, setShowArtworkPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Payment");
  const [customerName, setCustomerName] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");

  const options = ["G-Cash", "Paypal", "Pay Maya"]; // Define dropdown options
  const services = [
    "Illustration Services",
    "Custom Tattoo",
    "Temporary Tattoo",
    "Custom Painting",
  ];

  // Set initial values from session storage when the component mounts
  useEffect(() => {
    setCustomerName(sessionStorage.getItem("customerName") || "");
    setPaymentAmount(sessionStorage.getItem("paymentAmount") || "");
    setContactNumber(sessionStorage.getItem("contactNumber") || "");
    setSelectedService(sessionStorage.getItem("selectedService") || "");
    setDate(sessionStorage.getItem("date") || "");
    setSelectedOption(sessionStorage.getItem("selectedOption") || "Payment");
  }, []);

  const toggleServiceDropdown = () => {
    setServiceIsOpen(!isServiceOpen);
    if (isOpen) setIsOpen(false);
  };

  const togglePaymentDropdown = () => {
    setIsOpen(!isOpen);
    if (isServiceOpen) setServiceIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    sessionStorage.setItem("selectedOption", option); // Store the selected payment method
    setIsOpen(false);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    sessionStorage.setItem("selectedService", service); // Store the selected service
    setServiceIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "customerName") {
      setCustomerName(value);
      sessionStorage.setItem("customerName", value);
    } else if (name === "paymentAmount") {
      setPaymentAmount(value);
      sessionStorage.setItem("paymentAmount", value);
    } else if (name === "contactNumber") {
      setContactNumber(value);
      sessionStorage.setItem("contactNumber", value);
    } else if (name === "date") {
      setDate(value);
      sessionStorage.setItem("date", value);
    }
  };

  const handleClosePopup = () => {
    setShowArtworkPopup(false);
    setShowConfirmPopup(false);
  };

  const openPopup = () => {
    setShowArtworkPopup(true);
  };

  return (
    <div>
      <button
        onClick={openPopup}
        className="p-2 bg-cyan-400 px-[53px] text-white rounded-full hover:bg-cyan-500 mt-4"
      >
        Book a Transaction
      </button>

      {showArtworkPopup && (
        <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-5 rounded-md space-y-3 w-[60%] max-h-[500px] overflow-y-auto">
            <div className="relative">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl text-cyan-400">
                  Transaction Information
                </h1>
                <p className="text-sm text-gray-400">
                  Input the necessary information for the transaction
                </p>
              </div>
              <button
                onClick={handleClosePopup}
                className="absolute top-0 right-0 text-black hover:bg-red-600 hover:text-white p-2 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>
            </div>

            <div className="inline-flex space-x-6 ">
              <div className="justify-center items-center space-y-4 ">
                <div className="pt-2">
                  <label className="text-gray-600">Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={customerName}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-600">Services</label>
                  <div className="relative inline-block text-left">
                    <button
                      onClick={toggleServiceDropdown}
                      className="hover:text-cyan-500 inline-flex justify-center w-full px-4 py-3 text-sm font-bold text-gray-700 bg-white border-b-2 border-gray-300 rounded-xl shadow hover:shadow-cyan-500"
                    >
                      {selectedService || "Select Service"}
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
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
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

                <div className="pt-2">
                  <label className="text-gray-600">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>
              </div>

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
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
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

                <div className="pt-2">
                  <label className="text-gray-600">Amount</label>
                  <input
                    type="number"
                    name="paymentAmount"
                    value={paymentAmount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>

                <div className="pt-2">
                  <label className="text-gray-600">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 rounded-xl focus:outline-none shadow hover:shadow-cyan-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="inline-flex">
                <span className="text-gray-400 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Agree to Terms and Conditions
                </span>
              </div>

              <button
                onClick={() => {
                  // Save all current state values to session storage
                  sessionStorage.setItem("customerName", customerName);
                  sessionStorage.setItem("paymentAmount", paymentAmount);
                  sessionStorage.setItem("contactNumber", contactNumber);
                  sessionStorage.setItem("selectedService", selectedService);
                  sessionStorage.setItem("date", date);
                  sessionStorage.setItem("selectedOption", selectedOption);

                  // Clear all input fields and dropdowns
                  setCustomerName("");
                  setPaymentAmount("");
                  setContactNumber("");
                  setSelectedService("Services");
                  setDate("");
                  setSelectedOption("Payment");

                  // Optionally show a confirmation popup or navigate to another page
                  setShowConfirmPopup(true);
                  setShowArtworkPopup(false);
                }}
                className="p-3 bg-cyan-400 text-white rounded-full mt-2 w-[35%] hover:bg-cyan-500"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmPopup && (
        <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white w-[30rem] h-[20rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
            <div className="flex flex-col justify-center items-center flex-grow">
              <Icon
                icon="lets-icons:check-fill"
                className="size-36 text-cyan-400"
              />
              <h1 className="text-2xl font-bold">Transaction Complete</h1>
              <p className="pt-5">
                Your transaction has been processed successfully
              </p>
            </div>

            <button
              onClick={handleClosePopup}
              className="text-cyan-500 border-2 border-cyan-500 hover:bg-cyan-600 hover:text-white mt-5 py-3 px-7 rounded-full"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
