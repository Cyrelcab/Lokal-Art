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
    </div>
  );
};
export default ConfirmPopup;
