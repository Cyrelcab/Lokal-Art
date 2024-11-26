import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const FileUpload = ({ onImageUpload }) => {
  // Use a ref to programmatically trigger the file input click
  const fileInputRef = useRef(null);

  // Add state for image preview
  const [imagePreview, setImagePreview] = useState(null);

  const handleButtonClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      // Create an Image object to get the natural dimensions
      const img = new Image();
      img.src = previewUrl;
      img.onload = () => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const container = document.querySelector(".image-container");
        if (container) {
          if (aspectRatio > 1) {
            container.style.width = "28rem";
            container.style.height = `${(28 * 16) / aspectRatio}px`;
          } else {
            container.style.height = "25rem";
            container.style.width = `${25 * 16 * aspectRatio}px`;
          }
        }
      };
      onImageUpload(file);
    }
  };

  return (
    <div className="flex justify-center">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp"
      />
      <button
        onClick={handleButtonClick}
        className={`flex justify-center items-center mb-8 ${
          !imagePreview ? "border-2 border-gray-300 rounded" : ""
        }`}
      >
        {imagePreview ? (
          <div className="image-container overflow-hidden mr-8">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-[28rem] h-[25rem]">
            <Icon icon="carbon:add-filled" className="text-4xl text-cyan-500" />
            <h1 className="text-lg">Upload an Image</h1>
            <p className="text-xs">
              Accepted files: <i>JPEG, PNG, and WebP</i>
            </p>
          </div>
        )}
      </button>
    </div>
  );
};

export default FileUpload;
