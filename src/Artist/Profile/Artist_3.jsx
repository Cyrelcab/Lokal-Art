import { useState, useEffect } from "react";
import { setDocumentTitle } from "@/utils/document";
import { Icon } from "@iconify/react";
import UploadPopup from "../Popup";
import Navbar from "../navbar";
import Transaction from "./Transaction";
import Message from "../Message";

export default function Artist_3() {
  setDocumentTitle("Melissa Hudson | LokalArt");
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
    const name = "Melissa Hudson";
    const profilePic = "/images/Artist/prof2.jpg";
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("profilePic", profilePic);
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
          <div className="w-full lg:w-1/4  border-gray-500 ">
            <img
              className="cursor-pointer mt-[-150px] shadow-md object-cover mx-auto lg:ml-10 rounded-full h-[200px] w-[200px]"
              src="/images/Artist/prof2.jpg"
              alt="Profile Photo"
            />
            <div className="mt-4 border-r-2 border-gray-400">
              <div className="text-center lg:text-left px-4">
                <h1 className="text-xl lg:text-2xl font-bold">
                  Melissa Hudson
                </h1>
                <p className="text-gray-500">Painter</p>
                <p className="mt-4">
                  "If I could say it in words there would be no reason to do
                  paintings.”
                </p>
              </div>

              <div className="w-full flex flex-col justify-center items-center space-y-2 font-bold pt-5">
                <div className="space-x-1 flex">
                  <Message />
                  <button
                    className="border px-8 py-2 rounded-full bg-cyan-400 text-white hover:bg-cyan-500"
                    onClick={handleClick}
                  >
                    {isFollowed ? "Unfollow" : "Follow"}
                  </button>
                </div>
                <Transaction />
              </div>

              <div className="flex flex-col items-center lg:items-start mt-4 text-sm ml-3">
                <p>
                  <i className="fa-solid fa-globe text-cyan-500 pr-2"></i>
                  Libertad, Butuan City, Philippines
                </p>
                <p>
                  <i className="fa-solid fa-cake-candles text-cyan-500 pr-2"></i>
                  January 19, 2003
                </p>
                <p>
                  <i className="fa-solid fa-envelope text-cyan-500 pr-2"></i>
                  melissa@email.com
                </p>
                <p>
                  <i className="fa-solid fa-phone text-cyan-500 pr-2"></i>
                  +63 912 345 6789
                </p>
              </div>

              <div className="flex justify-around mt-7 text-center">
                <div>
                  <h1 className="text-lg font-bold">6</h1>
                  <div className="inline-flex space-x-1">
                    <Icon
                      icon="ix:workspace"
                      width="16"
                      height="16"
                      className="text-cyan-400 mt-1"
                    />
                    <span>Works</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-bold">12.5k</h1>
                  <div className="inline-flex space-x-1">
                    <Icon
                      icon="mdi:account-group"
                      width="16"
                      height="16"
                      className="text-cyan-400 mt-1"
                    />
                    <span>Followers</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-bold">4.4</h1>
                  <div className="inline-flex space-x-1">
                    <Icon
                      icon="ix:star"
                      width="16"
                      height="16"
                      className="text-cyan-400 mt-1"
                    />
                    <span>Ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Works Section */}
          <div className="w-full lg:w-3/4 mt-16">
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
                className="cursor-pointer relative w-64 h-52"
                onClick={() =>
                  handleImageClick("/images/Artist/paint1.jpg", "Binibini")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\paint1.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Binibini
                </p>
              </div>

              <div
                className="cursor-pointer relative w-64 h-52"
                onClick={() =>
                  handleImageClick(
                    "/images/Artist/paint2.jpg",
                    "Man Wearing Salakot"
                  )
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\paint2.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Man Wearing Salakot
                </p>
              </div>

              <div
                className="cursor-pointer relative w-64 h-52"
                onClick={() =>
                  handleImageClick("/images/Artist/paint3.jpg", "Harana")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\paint3.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Harana
                </p>
              </div>

              <div>
                <div
                  className="cursor-pointer relative w-64 h-52"
                  onClick={() =>
                    handleImageClick("/images/Artist/paint4.jpg", "Gitarista")
                  }
                  style={{
                    textShadow:
                      "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                  }}
                >
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="\images\Artist\paint4.jpg"
                    alt="Image1"
                  />
                  <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                    Gitarista
                  </p>
                </div>
              </div>

              {/* Image Card 1 */}
              <div
                className="relative w-64 h-52 cursor-pointer"
                onClick={() =>
                  handleImageClick("/images/Artist/paint5.jpg", "Vase")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/images/Artist/paint5.jpg"
                  alt="Rainy Days"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Vase
                </p>
              </div>

              {/* Image Card 2 */}
              <div
                className="relative w-64 h-52 cursor-pointer"
                onClick={() =>
                  handleImageClick("/images/Artist/paint6.jpg", "Sinaing")
                }
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/images/Artist/paint6.jpg"
                  alt="Lake"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                Sinaing
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
                      className="absolute top-0 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
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
