import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FileUpload from "./Fileupload";
//import ConfirmPopup from "./Confirmed";

const ArtworkPopup = () => {
  const [showArtworkPopup, setShowArtworkPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const toggleArtworkPopup = () => {
    setShowArtworkPopup(!showArtworkPopup);
  };

  const openConfirmPopup = () => {
    setShowArtworkPopup(false); // Close the artwork popup
    setShowConfirmPopup(true); // Open the confirmation popup
  };

  const closeConfirmPopup = () => {
    setShowConfirmPopup(false); // Close the confirmation popup
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Here you would typically send the data to your backend
      // Include the image file from FileUpload component
      // await uploadArtwork({ ...formData, image: imageFile });
      openConfirmPopup();
    } catch (error) {
      console.error("Error uploading artwork:", error);
    }
  };

  return (
    <div>
      {/* Button to open artwork popup */}
      <a
        href="#"
        onClick={toggleArtworkPopup}
        className="text-2xl font-bold mb-4 px-14 py-2 text-cyan-500 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
      >
        Artwork
      </a>

      {/* Artwork Popup */}
      {showArtworkPopup && (
        <div className="fixed top-9 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[55rem] h-[32rem] rounded-md shadow-lg relative p-5 flex flex-col items-center">
            <button
              onClick={toggleArtworkPopup}
              className="absolute top-4 right-4 text-black hover:bg-red-600 hover:text-white p-2 rounded"
            >
              <Icon icon="material-symbols:close" />
            </button>

            <div className="text-center mb-4">
              <h1 className="flex text-2xl font-bold text-cyan-500">
                Create New <p className="text-black pl-2">Artwork</p>
              </h1>
            </div>

            <div className="w-[45rem] h-[32rem] flex">
              <FileUpload />
              <div className="flex justify-center items-center ml-8">
                <div className="w-[18rem]">
                  <p className="pl-5 pb-2 ">Add Title</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent the form from submitting and refreshing the page
                    }}
                  >
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Title"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </form>
                  <p className="pl-5 pt-5 pb-2">Add Description</p>
                  <form>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="7" // Adjust the number of rows to your preference
                    />
                  </form>

                  {/* Button to open confirmation popup */}
                  <div className="flex justify-center items-center pt-7">
                    <a
                      href="#"
                      onClick={handleSubmit}
                      className="text-1xl font-bold mb-4 px-16 py-2 border-2 text-cyan-500 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"
                    >
                      Create
                    </a>
                  </div>
                </div>
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
              <p className="pt-5">
                Your artwork has been uploaded successfully
              </p>
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
  );
};

export default ArtworkPopup;
