import React, { useState } from "react";
import { Icon } from "@iconify/react";

const EventsPopup = () => {
  const [showEventsPopup, setShowEventsPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const toggleEventsPopup = () => {
    setShowEventsPopup(!showEventsPopup);
  };

  const openConfirmPopup = () => {
    setShowEventsPopup(false); // Close the artwork popup
    setShowConfirmPopup(true); // Open the confirmation popup
  };

  const closeConfirmPopup = () => {
    setShowConfirmPopup(false); // Close the confirmation popup
  };

  return (
    <div>
      <a
        href="#"
        onClick={toggleEventsPopup}
        className="text-2xl font-bold mb-4 px-16 py-2 text-cyan-500 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
      >
        Events
      </a>

      <div>
        {showEventsPopup && (
          <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[50rem] h-[32rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
              <button
                onClick={toggleEventsPopup}
                className="absolute top-4 right-4 text-black hover:bg-red-600 hover:text-white p-2 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>

              <div className="text-center mb-4">
                <h1 className="flex text-2xl font-bold text-cyan-500">
                  Create New <p className="text-black pl-2">Events</p>
                </h1>
              </div>

              <div className="w-[45rem] h-[32rem] flex flex-col">
                <div className="flex space-x-3">
                  <div className="w-full">
                    <label
                      for="start-datetime"
                      class="block text-md font-bold text-gray-700 mb-1 ml-4"
                    >
                      Event Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="description"
                      class="block text-md font-bold text-gray-700 mb-1 ml-4"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Address"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                  </div>
                </div>

                <div className="w-full flex space-x-3">
                  <div class=" w-full my-4">
                    <label
                      for="start-datetime"
                      class="block text-md font-bold text-gray-700 mb-1 ml-4"
                    >
                      Start Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      id="start-datetime"
                      name="start-datetime"
                      class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div class="w-full my-4">
                    <label
                      for="end-datetime"
                      class="block text-md font-bold text-gray-700 mb-1 ml-4"
                    >
                      End Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      id="end-datetime"
                      name="end-datetime"
                      class="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label
                      for="description"
                      class="block text-md font-bold text-gray-700 mb-1 ml-4"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Description"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="5" // Adjust the number of rows to your preference
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center pt-5">
                  <a
                    href="#"
                    onClick={openConfirmPopup}
                    className="text-1xl font-bold mb-4 px-16 py-2 border-2 text-cyan-500 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confirm Popup */}
        {showConfirmPopup && (
          <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[30rem] h-[20rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
              <div className="flex flex-col justify-center items-center flex-grow">
                <Icon
                  icon="lets-icons:check-fill"
                  className="size-36 text-cyan-400"
                />
                <h1 className="text-2xl font-bold">Upload Complete</h1>
                <p className="pt-5">Your event has been uploaded successfully</p>
              </div>

              <button
                onClick={closeConfirmPopup}
                className="text-cyan-500 border-2 border-cyan-500 hover:bg-cyan-600 hover:text-white mt-5 py-3 px-7 rounded-full"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPopup;
