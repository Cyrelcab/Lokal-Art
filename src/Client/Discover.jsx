import { Link } from "react-router-dom";
import FilterPopup from "./Components/Filter";
import DropdownMenu from "./Components/Sort";
import { Icon } from "@iconify/react";
import Search from "./Components/Search";
import ArtistBox from "./Components/ArtistBox";
import { useState, useEffect } from "react";
import { setDocumentTitle } from "@/utils/document";
import Navbar from "@/Artist/navbar";

export default function Discover() {
  setDocumentTitle("Discover | LokalArt");

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setCategoryFilter(value);
    } else if (type === "location") {
      setLocationFilter(value);
    }
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

  return (
    <section>
      {/* <nav className="h-15 font-bold flex justify-between items-center shadow-md font-sans px-8 fixed top-0 w-full z-50 bg-white">
        <div className="flex items-center">
          <img
            src="/images/logo-blue.png"
            alt="LokalArt Logo"
            className="w-48"
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <a
            className="mr-10 border-b-2 border-cyan-500 text-m"
            href="/client/discover"
          >
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
      </nav> */}
      <Navbar/>
      <div className="flex flex-col">
        <div>
          <div className="fixed top-[60px] flex justify-center items-center space-x-28 w-full placeholder-cyan-500 bg-white py-6 mt-2">
            <div>
              <FilterPopup onFilterChange={handleFilterChange} />
            </div>
            <div>
              <Search onSearch={handleSearch} />
            </div>
            <div>
              <DropdownMenu />
            </div>
          </div>

          <div className="h-full mt-28 flex justify-center items-center">
            <div className="pt-16">
              <ArtistBox 
                searchQuery={searchQuery}
                categoryFilter={categoryFilter}
                locationFilter={locationFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
