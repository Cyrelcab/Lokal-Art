import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { setDocumentTitle } from "@/utils/document";
import { useState, useEffect } from "react";
import Modal from "./modal";
import UploadPopup from "./Popup";
import EventBox from "./EventBox";
import ArtBox from "./ArtBox";
import NavbarArtist from "./navbarArtist";

const ArtistProfile = ({ artistData: initialArtistData }) => {
  setDocumentTitle("Profile | Lokal-Art");
  const firstName = localStorage.getItem("first_name") || "John";
  const lastName = localStorage.getItem("last_name") || "Doe";
  const artistType =
    localStorage.getItem("artist_type") || "Painter, Visual Artist";
  const email = localStorage.getItem("email") || "johndoe@email.com";
  const address = localStorage.getItem("address") || "Address";
  const bio = localStorage.getItem("bio") || "";
  const birthday = localStorage.getItem("birthday") || "Birthdate";
  const fullName = `${firstName} ${lastName}`;
  const [artwork, setArtworks] = useState(null);
  const [events, setEvents] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [artistData, setArtistData] = useState(
    initialArtistData || {
      bio: localStorage.getItem("bio") || "",
      // Add zzother artist data as needed
    }
  );
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
  const [isEventBoxOpen, setIsEventBoxOpen] = useState(false);
  const [isArtBoxOpen, setIsArtBoxOpen] = useState(true);

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  const toggleArtBox = () => {
    setIsArtBoxOpen(true);
    setIsEventBoxOpen(false);
    
  };  

  const toggleEventBox = () => {
    setIsEventBoxOpen(true);
    setIsArtBoxOpen(false);
  };  

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleUploadClick = () => {
    setIsUploadPopupOpen(true);
  };
  const handleProfileUpdate = (updatedData) => {
    const newData = { ...artistData, ...updatedData };
    setArtistData(newData);

    Object.entries(updatedData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
  };

  useEffect(() => {
    // Retrieve the artwork data from localStorage
    const storedArtworkData = sessionStorage.getItem("artworkData");
    if (storedArtworkData) {
      const parsedData = JSON.parse(storedArtworkData);
      setArtworks(parsedData); // Set the artworks array to state
    }
  }, []);

  useEffect(() => {
    // Retrieve the artwork data from localStorage
    const storedEventsData = sessionStorage.getItem("eventDetails");
    if (storedEventsData) {
      const parsedData = JSON.parse(storedEventsData);
      setEvents(parsedData); // Set the artworks array to state
    }
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup object URLs when component unmounts
      if (bannerImage) URL.revokeObjectURL(bannerImage);
      if (profileImage) URL.revokeObjectURL(profileImage);
    };
  }, [bannerImage, profileImage]);

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
    <div className="h-full bg-gray-100">
      <NavbarArtist fullName={fullName} />
      <main className="pt-10">
        {/* Banner Photo Upload Section */}
        <div className="relative w-full h-48 bg-gray-200 mb-16">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="banner-upload"
            onChange={handleBannerUpload}
          />
          {bannerImage ? (
            <img
              src={bannerImage}
              alt="Banner"
              className="w-full h-full object-cover"
            />
          ) : (
            <label
              htmlFor="banner-upload"
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
            >
              <Icon
                icon="mdi:image-plus"
                width="48"
                height="48"
                className="text-gray-400 mb-2"
              />
              <span className="text-gray-600">
                Click to upload banner photo
              </span>
            </label>
          )}

          {/* Profile Photo Upload Section */}
          <div className="absolute -bottom-16 left-8">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="profile-upload"
              onChange={handleProfileUpload}
            />
            <label htmlFor="profile-upload" className="cursor-pointer">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-white"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-gray-200 border-2 border-white flex flex-col items-center justify-center hover:bg-gray-300 transition-colors">
                  <Icon
                    icon="mdi:account-plus"
                    width="40"
                    height="40"
                    className="text-gray-400 mb-1"
                  />
                  <span className="text-xs text-gray-600">Add photo</span>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* User Information Section */}
        <div className="mt-20 px-8">
          {/* Create a flex container to hold both sections */}
          <div className="flex">
            {/* Left section - existing user info */}
            <div className="flex-1 max-w-md border-r border-black pr-10">
              <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-bold">{fullName}</h1>
                <button
                  className="p-2 text-gray-600 hover:text-cyan-500 rounded-full hover:bg-gray-100"
                  title="Edit Profile"
                  onClick={handleOpenModal}
                >
                  <Icon icon="mdi:pencil" width="20" height="20" />
                </button>
              </div>
              <p className="text-gray-600 mt-1">
                {artistType.replace(/['"]+/g, "")}
              </p>

              <div className="mt-6 space-y-2 text-gray-600">
                <div className="flex items-center mb-6">
                  {bio && <i>"{bio}"</i>}
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:map-marker" width="20" height="20" />
                  <span>{address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:calendar" width="20" height="20" />
                  <span>{birthday}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:email" width="20" height="20" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:phone" width="20" height="20" />
                  <span>+63 912 345 6789</span>
                </div>
              </div>
              {/* Stats Section - moved outside the flex container */}
              <div className="mt-16 flex space-x-8">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">9</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="ix:workspace" width="16" height="16" />
                    <span>Works</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">13.5k</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="mdi:account-group" width="16" height="16" />
                    <span>Followers</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">3.4</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="mdi:star" width="16" height="16" />
                    <span>Ratings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section with border - Fixed structure */}
            <div className="w-full pl-6 ml-6">
              <div className="space-y-4">
                <div className="flex space-x-8">
                  <button
                    onClick={toggleArtBox}
                    className="font-semibold text-gray-700 pb-1 hover:border-b-2 hover:border-cyan-500 hover:text-cyan-500"
                  >
                    Works
                  </button>

                  <button
                    onClick={toggleEventBox}
                    className="font-semibold text-gray-700 pb-1 hover:border-b-2 hover:border-cyan-500 hover:text-cyan-500"
                    >
                    Events
                  </button>
                  <button className="font-semibold text-gray-700 hover:text-cyan-500 hover:border-black pb-2">
                    Followers
                  </button>
                  <button
                    onClick={handleUploadClick}
                    className="font-semibold text-gray-700 hover:text-cyan-500 hover:border-black pb-2 flex items-center gap-1"
                  >
                    Upload
                    <Icon icon="material-symbols:upload" />
                  </button>
                </div>
                <div>
                  <EventBox
                    isOpen={isEventBoxOpen}
                    events={events}
                  />
                </div>

                {/* Display the Uploaded Artwork */}
                <div>
                  <ArtBox
                    isOpen={isArtBoxOpen}
                    artwork={artwork}
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        artistData={artistData}
        onUpdate={handleProfileUpdate}
      />
      <UploadPopup
        isOpen={isUploadPopupOpen}
        onClose={() => setIsUploadPopupOpen(false)}
      />
    </div>
  );
};

export default ArtistProfile;
