import { useState, useEffect } from "react";
import { setDocumentTitle } from "@/utils/document";
import Navbar from "@/Artist/navbar";
import FilterPopup from "./Components/Filter";
import DropdownMenu from "./Components/Sort";
import Search from "./Components/Search";
import ArtistBox from "./Components/ArtistBox";

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
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `window.chtlConfig = { chatbotId: "4156178122" };`;

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

  return (
    <section>
      <Navbar />
      <div className="flex flex-col">
        {/* Filter, Search, and Sort Section */}
        <div className="fixed top-[60px] flex flex-wrap justify-center items-center gap-6 px-4 w-full py-4 pt-5 z-10 bg-white">
          <FilterPopup onFilterChange={handleFilterChange} />
          <Search onSearch={handleSearch} />
          <DropdownMenu />
        </div>

        {/* Artist Box Section */}
        <div className="h-full mt-[140px] px-4 flex justify-center">
          <div className="pt-6 w-full max-w-6xl">
            <ArtistBox
              searchQuery={searchQuery}
              categoryFilter={categoryFilter}
              locationFilter={locationFilter}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
