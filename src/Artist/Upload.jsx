import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import UploadPopup from "./Popup";

export default function Upload() {
  return (
    <section>
      <nav className="h-15 font-bold flex justify-between items-center shadow-md font-sans px-8 fixed top-0 w-full z-50 bg-white">
        <div className="flex items-center">
          <img
            src="/images/logo-blue.png"
            alt="LokalArt Logo"
            className="w-48"
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <a className="mr-10 hover:text-cyan-500 text-m" href="#">
            Discover
          </a>
          <a className="mr-10 hover:text-cyan-500 text-m" href="#">
            Transaction
          </a>
          <a className="hover:text-cyan-500 text-m" href="#">
            Messages
          </a>
        </div>
        <div className="flex items-center p-5">
          <i className="fa-solid fa-bell hover:text-cyan-500 cursor-pointer text-xl mr-4"></i>
          <div className="bg-cyan-900 rounded-full h-8 w-8 mr-4"></div>
          <button className="bg-cyan-500 h-8 w-20 rounded-2xl text-white hover:bg-cyan-300">
            <Link to={"/login"}>Logout</Link>
          </button>
        </div>
      </nav>
      {/* Profile Cover Photo*/}
      <div className="h-[250px] w-screen max-w-full overflow-hidden">
        <img
          className="w-screen"
          src="/images/cover-photo.jpg"
          alt="Cover Photo"
        />
      </div>
      <div className="mt-[3px]">
        <img
          className="cursor-pointer shadow-md object-cover mt-[-150px] ml-10 rounded-full h-[200px] w-[200px]"
          src="/images/profile-photo.jpg"
          alt="Profile Photo"
        />

        {/* contents */}
        <div className="flex flex-row gap-10">
          <div className="h-full w-[20rem] border-solid border-r-2 border-r-gray-300 ml-1 flex flex-col justify-around gap-[50px] mt-5 px-5">
            {/* name */}
            <div>
              <h1 className="text-2xl flex font-bold">
                John Doe{" "}
                <Icon
                  icon="akar-icons:edit"
                  className="ml-2 mt-1 hover:text-cyan-500 cursor-pointer"
                />
              </h1>
              <p className="text-gray-500 ">Painter, Visual Artist</p>
              <p className="pt-7">
                "If I could say it in words there would be no reason to paint.”
              </p>
            </div>

            <div className="w-[20rem]">
              {/* information */}
              <i className="fa-solid fa-globe text-cyan-500 pr-2"></i>
              <span>Libertad, Butuan City, Philippines</span>
              <br />
              <i class="fa-solid fa-cake-candles text-cyan-500 pr-2"></i>
              <span>January 19, 2003</span>
            </div>
            {/* works-followers-ratings */}
            <div className="flex justify-around text-center space-x-3 left-0">
              <div>
                {/* works */}
                <h1 className="text-3xl font-bold">9</h1>
                <i class="fa-solid fa-suitcase text-cyan-500"></i>{" "}
                <span>Works</span>
              </div>
              <div>
                {/* follower */}
                <h1 className="text-3xl font-bold">13.5k</h1>
                <i class="fa-solid fa-user-plus text-cyan-500"></i>{" "}
                <span>Followers</span>
              </div>
              <div>
                {/* ratings */}
                <h1 className="text-3xl font-bold">3.4</h1>
                <i class="fa-solid fa-star text-cyan-500"></i>{" "}
                <span>Ratings</span>
              </div>
            </div>
          </div>
          <div className="">
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
            {/* image container */}
            {/* this is where i left */}
            <div
              className="h-full pt-3
                            grid grid-cols-3 justify-items-center mr-1"
            >
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
                  src="\images\Artist\img1.jpg"
                  alt="Image1"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Student
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
                  src="\images\Artist\img2.jpg"
                  alt="Image6"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  City Night
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
                  src="\images\Artist\img3.jpg"
                  alt="Image6"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Bus
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
                  src="\images\Artist\img4.jpg"
                  alt="Image6"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Eyes Down
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
                  src="\images\Artist\img5.jpg"
                  alt="Image6"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Modeling
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
                  src="\images\Artist\img12.jpg"
                  alt="Image6"
                />
                <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                  Bow and Arrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
