import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ConfirmPopup from "./Confirmed";

const ArtworkPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <a
        href="#"
        onClick={togglePopup}
        className="text-2xl font-bold mb-4 px-14 py-2 text-cyan-500 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
      >
        Artwork
      </a>

      <div>
        {showPopup && (
          <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[50rem] h-[32rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
              <button
                onClick={togglePopup}
                className="absolute top-4 right-4 text-black hover:bg-red-600 hover:text-white p-2 rounded"
              >
                <Icon icon="material-symbols:close" />
              </button>

              <div className="text-center mb-4">
              
                <h1 className="flex text-2xl font-bold text-cyan-500">
                  Create New <p className="text-black pl-2">Artwork</p>
                </h1>
              </div>

              <div className="  w-[45rem] h-[32rem] flex">
                <div className="flex flex-col justify-center items-center border-2 border-gray-300 rounded w-[28rem] mr-2">
                <Icon icon="carbon:add-filled" className="text-4xl text-cyan-500"/>
                  <h1>Upload an Image</h1>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-[18rem]">
                    <p className="pl-5 pb-2 ">Add Title</p>
                    <form>
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </form>
                    <p className="pl-5 pt-5 pb-2">Add Description</p>
                    <form>
                      <input
                        type="text"
                        name="title"
                        placeholder="Description"
                        className="w-full px-4 pb-40   border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </form>

                    {/* Button for confirmation */}
                      <div className="flex justify-center items-center pt-7"><ConfirmPopup/></div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtworkPopup;
