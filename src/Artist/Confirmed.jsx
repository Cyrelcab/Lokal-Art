import React, { useState } from "react";
import { Icon } from "@iconify/react";

const ConfirmPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <a
        href="#"
        onClick={togglePopup}
        className="text-1xl font-bold mb-4 px-16 py-2 border-2 text-cyan-500 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
      >
        Create
      </a>

      <div>
        {showPopup && (
          <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[30rem] h-[10rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 text-black hover:bg-red-600 hover:text-white p-2 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>

              <div
                className="flex flex-col justify-center items-center flex-grow"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
              >
                <h1 className="text-3xl">Upload Success</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConfirmPopup;
