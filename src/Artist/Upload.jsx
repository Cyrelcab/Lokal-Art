import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <main>
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
      <div class="mt-[64px]">
        <div className="h-[200px] w-screen max-w-full overflow-hidden">
          <img
            className="w-screen"
            src="/images/cover-photo.jpg"
            alt="Cover Photo"
          />
        </div>
        <div class="ml-16">
          <img
            className="cursor-pointer shadow-md object-cover mt-[-150px] rounded-full h-[200px] w-[200px]"
            src="/images/profile-photo.jpg"
            alt="Profile Photo"
          />

          <div className="h-full w-[20rem] border-solid border-r-2 border-r-gray-300 flex flex-col justify-around gap-[50px] mt-5 pr-5">
            {/* name */}
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-500 ">Painter, Visual Artist</p>
              <p className="pt-7">
                "If I could say it in words there would be no reason to paint.”
              </p>
            </div>

            {/* buttons */}
            <div className="flex flex-col w-60 items-center">
              <div className="pb-2">
                <button className="h-8 w-[6rem] bg-cyan-500 rounded-full text-white mr-1 hover:bg-cyan-400">
                  Message
                </button>
                <button className="h-8 w-[6rem] bg-cyan-500 rounded-full text-white hover:bg-cyan-400">
                  Follow
                </button>
                <br />
              </div>
              <button className="h-8 w-[12.3rem] bg-cyan-500 rounded-full text-white hover:bg-cyan-400">
                Book a Transaction
              </button>
            </div>
            <div>
              {/* information */}
              <i className="fa-solid fa-globe text-cyan-500 pr-2"></i>
              <span>Libertad, Butuan City, Philippines</span>
              <br />
              <i class="fa-solid fa-cake-candles text-cyan-500 pr-2"></i>
              <span>January 19, 2003</span>
            </div>
            {/* works-followers-ratings */}
            <div className="justify-around text-center">
              <div class="flex space-x-4">
                <div>
                  {/* works */}
                  <h1 className="text-4xl font-bold">9</h1>
                  <i class="fa-solid fa-suitcase text-cyan-500"></i>{" "}
                  <span>Works</span>
                </div>
                <div>
                  {/* follower */}
                  <h1 className="text-4xl font-bold">13.5k</h1>
                  <i class="fa-solid fa-user-plus text-cyan-500"></i>{" "}
                  <span>Followers</span>
                </div>
                <div>
                  {/* ratings */}
                  <h1 className="text-4xl font-bold">3.4</h1>
                  <i class="fa-solid fa-star text-cyan-500"></i>{" "}
                  <span>Ratings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </div>
    </main>
  );
}
