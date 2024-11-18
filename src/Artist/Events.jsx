import React, { useState } from "react";
import { Icon } from "@iconify/react";

const EventsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <a
        href="#"
        onClick={togglePopup}
        className="text-2xl font-bold mb-4 px-16 py-2 text-cyan-500 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
      >
        Events 
      </a>

      <div>
        {showPopup && (
          <div
            className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
          >
            <div className="bg-white w-[50rem] h-[32rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 text-black hover:bg-red-600 hover:text-white p-2 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>

              <div className="text-center mb-4">
              <h1 className="flex text-2xl font-bold text-cyan-500">
                Create New <p className="text-black pl-2">Events</p>
              </h1>
            </div>


            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPopup;
