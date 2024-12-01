import { useState, useEffect } from "react";
import { setDocumentTitle } from "@/utils/document";
import UploadPopup from "../Popup";
import Navbar from "../navbar";
import Transaction from "./Transaction";

export default function Artist_1() {
  setDocumentTitle("Jonathan | LokalArt");
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const firstName = localStorage.getItem("first_name") || "John";
  const lastName = localStorage.getItem("last_name") || "Doe";
  const fullName = `${firstName} ${lastName}`;
  const [isFollowed, setIsFollowed] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [popupLabel, setPopupLabel] = useState("");

  const handleClick = () => {
    setIsFollowed((prev) => !prev);
  };

  const closeTransactionPopup = () => {
    setIsTransactionOpen(false);
  };

  const handleImageClick = (imageSrc, label) => {
    setPopupImage(imageSrc);
    setPopupLabel(label);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupImage("");
    setPopupLabel("");
  };

  useEffect(() => {
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      window.chtlConfig = { chatbotId: "4156178122" };
    `;

    const embedScript = document.createElement("script");
    embedScript.src = "https://chatling.ai/js/embed.js";
    embedScript.type = "text/javascript";
    embedScript.async = true;
    embedScript.dataset.id = "4156178122";
    embedScript.id = "chatling-embed-script";

    document.body.appendChild(configScript);
    document.body.appendChild(embedScript);

    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  useEffect(() => {
    const name = "Jonathan Wick";
    sessionStorage.setItem("userName", name);
  }, []);

  return (
    <section>
      <Navbar fullName={fullName} />

      {/* Profile Cover Photo */}
      <div className="h-[250px] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/images/cover-photo.jpg"
          alt="Cover Photo"
        />
      </div>

      <div className="mt-4 px-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-10">
          {/* Profile Info */}
          <div className="w-full lg:w-1/4 border-r-2 border-gray-300">
            <img
              className="cursor-pointer mt-[-150px] shadow-md object-cover mx-auto lg:ml-10 rounded-full h-[200px] w-[200px]"
              src="/images/profile-photo.jpg"
              alt="Profile Photo"
            />
            <div className="mt-4 text-center lg:text-left px-4">
              <h1 className="text-xl lg:text-2xl font-bold">Jonathan Wick</h1>
              <p className="text-gray-500">Painter, Digital Artist</p>
              <p className="mt-4">
                "If I could say it in words there would be no reason to paint.”
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center space-y-2 font-bold pt-5">
              <div className="space-x-1 flex">
                <button className="border px-8 py-2 rounded-full bg-cyan-400 text-white hover:bg-cyan-500">
                  Message
                </button>
                <button
                  className="border px-8 py-2 rounded-full bg-cyan-400 text-white hover:bg-cyan-500"
                  onClick={handleClick}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </button>
              </div>
              <Transaction />
            </div>

            <div className="flex flex-col justify-center items-center mt-4 text-sm ml-3">
              <p>
                <i className="fa-solid fa-globe text-cyan-500 pr-2"></i>
                Libertad, Butuan City, Philippines
              </p>
              <p>
                <i className="fa-solid fa-cake-candles text-cyan-500 pr-2"></i>
                January 19, 2003
              </p>
            </div>

            <div className="flex justify-around mt-7 text-center">
              <div>
                <h1 className="text-lg font-bold">6</h1>
                <i className="fa-solid fa-suitcase text-gray-500"></i>{" "}
                <span>Works</span>
              </div>
              <div>
                <h1 className="text-lg font-bold">13.5k</h1>
                <i className="fa-solid fa-users text-gray-500"></i>{" "}
                <span>Followers</span>
              </div>
              <div>
                <h1 className="text-lg font-bold">3.4</h1>
                <i className="fa-solid fa-star text-gray-500"></i>{" "}
                <span>Ratings</span>
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-0 gap-10">
              <a href="#" className="font-bold hover:text-cyan-500">
                Works
              </a>
              <a href="#" className="font-bold hover:text-cyan-500">
                Followers
              </a>
              <a href="#" className="font-bold hover:text-cyan-500">
                Events
              </a>
              <UploadPopup />
            </div>

            <div className="h-full py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mr-1 gap-y-6">
              {/* image-card */}
              <div
                className="relative w-64 h-52"
                onClick={() =>
                  handleImageClick("/images/Artist/img2.jpg", "City Night")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\img2.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  City Night
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                onClick={() =>
                  handleImageClick("/images/Artist/img14.jpg", "Beach")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\img14.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Beach
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                onClick={() =>
                  handleImageClick("/images/Artist/img16.jpg", "Sunlight")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\img16.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Sunlight
                </p>
              </div>

              <div>
                <div
                  className="relative w-64 h-52"
                  onClick={() =>
                    handleImageClick("/images/Artist/img5.jpg", "Model")
                  }
                  style={{
                    textShadow:
                      "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                  }}
                >
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="\images\Artist\img5.jpg"
                    alt="Image1"
                  />
                  <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                    Model
                  </p>
                </div>
              </div>

              {/* Image Card 1 */}
              <div
                className="relative w-64 h-52 cursor-pointer"
                onClick={() =>
                  handleImageClick("/images/Artist/img13.jpg", "Rainy Days")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/images/Artist/img13.jpg"
                  alt="Rainy Days"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Rainy Days
                </p>
              </div>

              {/* Image Card 2 */}
              <div
                className="relative w-64 h-52 cursor-pointer"
                onClick={() =>
                  handleImageClick("/images/Artist/img11.jpg", "Lake")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/images/Artist/img11.jpg"
                  alt="Lake"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Lake
                </p>
              </div>

              {/* Popup Modal */}
              {isPopupVisible && (
                <div
                  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                  onClick={closePopup}
                >
                  <div
                    className="relative bg-white rounded-lg p-4 space-y-2 font-bold"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
                  >
                    <img
                      src={popupImage}
                      alt={popupLabel}
                      className="max-w-full max-h-[90vh] rounded-lg"
                    />
                    <div className="flex justify-center items-center text-xl">
                      <label>{popupLabel}</label>
                    </div>
                    <button
                      className="absolute top-0 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={closePopup}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isTransactionOpen && <Transaction closePopup={closeTransactionPopup} />}
    </section>
  );
}
