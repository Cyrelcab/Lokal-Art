import { Link } from "react-router-dom";
import FilterPopup from "./Components/Filter";
import DropdownMenu from "./Components/Sort";
import { Icon } from "@iconify/react";
import Search from "./Components/Search";
import ArtistBox from "./Components/ArtistBox";

export default function Discover() {
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

      <div className="mt-20 flex flex-col">
        {/* Search, Sort, and Artist Box */}
        <div>
          <div className="flex justify-center items-center space-x-28">
            {/* Filter */}
            <div>
              <FilterPopup />
            </div>
            {/* Search */}
            <div>
              <Search />
            </div>
            {/* Sort */}
            <div>
              <DropdownMenu />
            </div>
          </div>

          {/* Artist Box */}
          <div className="h-full flex justify-center items-center">
            {/* Grid */}
            <div className="py-7">
              <ArtistBox/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
