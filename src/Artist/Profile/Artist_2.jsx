import { useState, useEffect } from "react";
import { setDocumentTitle } from "@/utils/document";
import UploadPopup from "../Popup";
import Navbar from "../navbar";
import Transaction from "./Transaction";

export default function Artist_2() {
  setDocumentTitle("Jonathan | LokalArt");
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const firstName = localStorage.getItem("first_name") || "John";
  const lastName = localStorage.getItem("last_name") || "Doe";
  const fullName = `${firstName} ${lastName}`;
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsFollowed((prev) => (!prev));
  };

  const closeTransactionPopup = () => {
    setIsTransactionOpen(false); // Close the Transaction popup
  };

  useEffect(() => {
    // Add the Chatling Chatbot script dynamically
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

    // Clean up scripts on component unmount
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  useEffect(() => {
    // Store the name in session storage
    const name = "John Doe";
    sessionStorage.setItem("userName", name);
  }, []);

  return (
    <section>
      <Navbar fullName={fullName} />
      {/* Profile Cover Photo */}
      <div className="h-[250px] w-screen max-w-full overflow-hidden">
        <img
          className="w-screen"
          src="/images/cover-photo.jpg"
          alt="Cover Photo"
        />
      </div>
      <div className="mt-[3px]">
        <img
          className="cursor-pointer shadow-md object-cover mt-[-150px] ml-10 rounded-full outline-white h-[200px] w-[200px]"
          src="/images/Artist/prof1.jpg"
          alt="Profile Photo"
        />

        {/* contents */}
        <div className="flex flex-row gap-10">
          <div className="h-full w-[20rem] border-solid border-r-2 border-r-gray-300 ml-1 flex flex-col justify-around gap-[50px] mt-5 px-5">
            {/* name */}
            <div>
              <h1 className="text-2xl flex font-bold">John Doe</h1>
              <p className="text-gray-500">Tattoo Artist</p>
              <p className="pt-7">
                "If I could say it in words there would be no reason to do tattoo's.”
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center space-y-2 font-bold">
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

            <div className="w-[20rem]">
              {/* information */}
              <i className="fa-solid fa-globe text-cyan-500 pr-2"></i>
              <span>Libertad, Butuan City, Philippines</span>
              <br />
              <i className="fa-solid fa-cake-candles text-cyan-500 pr-2"></i>
              <span>January 19, 2003</span>
            </div>
            {/* works-followers-ratings */}
            <div className="flex justify-around text-center space-x-3 left-0">
              <div>
                {/* works */}
                <h1 className="text-3xl font-bold">6</h1>
                <i className="fa-solid fa-suitcase text-cyan-500"></i>{" "}
                <span>Works</span>
              </div>
              <div>
                {/* follower */}
                <h1 className="text-3xl font-bold">4.3k</h1>
                <i className="fa-solid fa-user-plus text-cyan-500"></i>{" "}
                <span>Followers</span>
              </div>
              <div>
                {/* ratings */}
                <h1 className="text-3xl font-bold">4.8</h1>
                <i className="fa-solid fa-star text-cyan-500"></i>{" "}
                <span>Ratings</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex pt-5 w-[70vw]">
              <span className="mr-20 font-bold hover:text-cyan-500">
                <a href="#">Works</a>
              </span>
              <span className="mr-20 font-bold hover:text-cyan-500">
                <a href="#">Followers</a>
              </span>
              <span className="mr-20 font-bold hover:text-cyan-500">
                <a href="#">Events</a>
              </span>
              <div className="z-10">
                <UploadPopup />
              </div>
            </div>

            {/* Image container */}
            <div className="h-full pt-7 grid grid-cols-3 justify-items-center mr-1">
              {/* image-card */}
              <div
                className="relative w-64 h-52"
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\tattoo1.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  TV Person
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\tattoo3.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Brain'scream
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\tattoo4.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Peacock
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\tattoo5.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Bird
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\tattoo6.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  God and Cats
                </p>
              </div>

              <div
                className="relative w-64 h-52"
                style={{
                  textShadow:
                    "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
                }}
              >
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="\images\Artist\tattoo7.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Demon
                </p>
              </div>

              {/* Additional images can be added here */}
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render Transaction popup */}
      {isTransactionOpen && <Transaction closePopup={closeTransactionPopup} />}
    </section>
  );
}
