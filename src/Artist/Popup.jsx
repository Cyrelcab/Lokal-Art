import React, { useState } from "react";
import ArtworkPopup from "./Artwork";
import EventsPopup from "./Events";
import { Icon } from "@iconify/react";


const UploadPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {/* Link to open popup */}
      <div>
        <span className="mr-20 font-bold hover:bg-cyan-500 hover:text-cyan-500">
          <a href="#" onClick={togglePopup} className="flex items-center">
            Upload
            <Icon
              icon="material-symbols:upload"
              className="ml-1 hover:text-cyan-500"
            />
          </a>
        </span>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
          onClick={togglePopup} // Clicking outside closes popup
        >
          <div className="bg-white w-[30rem] h-[20rem] rounded-md shadow-lg relative p-5 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-black hover:bg-red-600 hover:text-white p-2 rounded"
            >
              <Icon icon="material-symbols:close" />
            </button>

            {/* Top Content (non-centered) */}
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-black">
                Create New Post
              </h1>
            </div>

            {/* Centered Content */}
            <div
              className="flex flex-col justify-center items-center flex-grow"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
            >
               
              <div className="mb-4 px-14 py-2"><ArtworkPopup /></div>
              <div className="mb-4 px-16 py-2"><EventsPopup /></div>

            </div>
            <div>
            <p className="text-gray-400 pt-5">Select between <b>Artworks</b> and <b>Events</b></p> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPopup;
