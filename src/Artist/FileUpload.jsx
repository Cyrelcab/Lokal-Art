import React, { useRef } from "react";
import { Icon } from "@iconify/react";

const FileUpload = () => {
  // Use a ref to programmatically trigger the file input click
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Access the selected file(s)
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <button
        onClick={handleButtonClick}
        className="justify-center items-center border-2 border-gray-300 rounded w-[28rem] mr-2 h-[25rem]"
      >
        <div className="flex flex-col justify-center items-center">
          <Icon icon="carbon:add-filled" className="text-4xl text-cyan-500" />
          <h1 className="text-lg">Upload an Image</h1>
          <p className="text-xs">
            Accepted files: <i>JPEG, PNG, and WebP</i>
          </p>
        </div>
      </button>
    </div>
  );
};

export default FileUpload;
