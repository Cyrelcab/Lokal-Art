import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { setDocumentTitle } from "@/utils/document";
import { useState, useEffect } from "react";
import ArtistsData from "@/utils/db_artists";
import Navbar from "./navbar";

const ArtistProfileFromData = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artist = ArtistsData.artists.find(
    (artist) => artist.id === parseInt(id)
  );

  setDocumentTitle(`${artist.name} | Lokal-Art`);

  const [clientData, setClientData] = useState(null);

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

  if (!artist || !clientData) {
    return <div className="text-center pt-20">Loading...</div>;
  }

  const { first_name, last_name } = clientData;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const categoryList = artist.categories ? artist.categories.join(", ") : "N/A";

  return (
    <div className="h-screen bg-gray-100">
      <Navbar fullName={`${first_name} ${last_name}`} />

      <main className="pt-10">
        {/* Banner Section */}
        <div className="relative w-full h-48 bg-gray-200 mb-16">
          <img
            src={artist.bannerPic || "/default-banner.jpg"}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          {/* Profile Photo Positioned at the Top-Left of the Banner */}
          <div className="absolute top-16 mt-12 left-8">
            <img
              src={artist.profilePic || "/default-profile.jpg"}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>
        </div>

        {/* Artist Information */}
        <div className="absolute top-26 mt-8 px-8">
          <div className="flex flex-wrap">
            {/* Left Column */}
            <div className="flex-1 max-w-md pr-12 border-r border-black">
              <h1 className="text-3xl font-bold">{artist.name}</h1>
              <p className="text-gray-600 mt-1">{categoryList}</p>
              <div className="mt-6 text-gray-600 space-y-2">
                <p className="italic mb-6">
                  {artist.bio || "No bio available"}
                </p>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:map-marker" width="20" />
                  <span>{artist.location || "Location not specified"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:calendar" width="20" />
                  <span>{artist.birthday || "Birthday not specified"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:email" width="20" />
                  <span>{artist.email || "Email not provided"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:phone" width="20" />
                  <span>{artist.contact || "Contact not provided"}</span>
                </div>
              </div>
              {/* Stats Section */}
              <div className="mt-16 flex space-x-16">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">9</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="ix:workspace" width="16" />
                    <span>Works</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">13.5k</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="mdi:account-group" width="16" />
                    <span>Followers</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">3.4</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="mdi:star" width="16" />
                    <span>Ratings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-96 pl-6 ml-6">
              <div className="space-y-4">
                <div className="flex space-x-8">
                  <button className="font-semibold text-gray-700 border-b-2 border-cyan-500 pb-1">
                    Works
                  </button>
                  <button className="font-semibold text-gray-700 hover:text-cyan-500 pb-1">
                    Events
                  </button>
                  <button className="font-semibold text-gray-700 hover:text-cyan-500 pb-1">
                    Followers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtistProfileFromData;
