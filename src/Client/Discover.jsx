import { Link } from "react-router-dom";
import FilterPopup from "./Components/Filter";
import DropdownMenu from "./Components/Sort";
import { Icon } from "@iconify/react";
import Search from "./Components/Search";
import ArtistBox from "./Components/ArtistBox";
import { useState, useEffect } from "react"; // Added useEffect import
import { setDocumentTitle } from "@/utils/document";
import Navbar from "./Components/navbar";

export default function Discover() {
  setDocumentTitle("Discover | LokalArt");

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [clientData, setClientData] = useState(null); // For client data

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

  // Fetch client data
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const loggedInEmail = localStorage.getItem("email");

        if (!loggedInEmail) {
          console.error("No logged-in email found.");
          return;
        }

        const response = await fetch("/users.json");
        const users = await response.json();

        const client = users.find((user) => user.email === loggedInEmail);

        if (client) {
          setClientData(client);
        } else {
          console.error("User not found in the database.");
        }
      } catch (error) {
        console.error("Error loading client data:", error);
      }
    };

    fetchClientData();
  }, []);

  // If client data is not loaded, show a loading message
  if (!clientData) {
    return <div></div>;
  }

  // Destructure clientData only when it is available
  const { first_name, last_name, email } = clientData;

  return (
    <section>
      <Navbar fullName={`${first_name} ${last_name}`} />
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
