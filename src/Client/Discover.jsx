import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { setDocumentTitle } from "@/utils/document";
import Navbar from "@/Artist/navbar";
import FilterPopup from "./Components/Filter";
import DropdownMenu from "./Components/Sort";
import Search from "./Components/Search";
import ArtistBox from "./Components/ArtistBox";
import Navbar from "./Components/navbar";
import { setDocumentTitle } from "@/utils/document";

export default function Discover() {
  setDocumentTitle("Discover | LokalArt");

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [clientData, setClientData] = useState(null); // For client data
  const navigate = useNavigate();

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

  // Fetch client data
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const loggedInEmail = localStorage.getItem("email");

        if (!loggedInEmail) {
          console.error("No logged-in email found.");
          navigate("/login");
          return;
        }

        const response = await fetch("/users.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.statusText}`);
        }

        const users = await response.json();
        const client = users.find((user) => user.email === loggedInEmail);

        if (client) {
          setClientData(client);
        } else {
          console.error("User not found in the database.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error loading client data:", error);
        navigate("/login");
      }
    };

    fetchClientData();
  }, [navigate]);

  // Redirect or show loading screen until clientData is available
  if (!clientData) {
    return null; // Render nothing while redirecting or loading
  }

  const { first_name, last_name, email } = clientData;

  return (
    <section>
      <Navbar fullName={`${first_name} ${last_name}`} />
      <Navbar />
      <div className="flex flex-col">
        <div>
          <div className="fixed top-[60px] flex justify-center items-center space-x-28 w-full placeholder-cyan-500 bg-white py-6 mt-2 shadow-sm">
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
        {/* Filter, Search, and Sort Section */}
        <div className="fixed top-[60px] flex flex-wrap justify-center items-center gap-6 px-4 w-full py-4 pt-5 z-10 bg-white">
          <FilterPopup onFilterChange={handleFilterChange} />
          <Search onSearch={handleSearch} />
          <DropdownMenu />
        </div>

          <div className="h-full mt-28 flex justify-center items-center">
            <div className="pt-16">
              <ArtistBox
                searchQuery={searchQuery}
                categoryFilter={categoryFilter}
                locationFilter={locationFilter}
              />
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
