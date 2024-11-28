import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { setDocumentTitle } from "@/utils/document";
import Navbar from "./Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const [clientData, setClientData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const navigate = useNavigate();

  // Set the document title
  useEffect(() => {
    setDocumentTitle("Client Profile | Lokal-Art");
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
        const users = await response.json();

        const client = users.find((user) => user.email === loggedInEmail);

        if (client) {
          setClientData(client);
          setProfileImage(client.profile_image); // Set initial profile image
          setBannerImage(client.banner_image); // Set initial banner image
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

  useEffect(() => {
    return () => {
      // Cleanup object URLs when component unmounts
      if (bannerImage && typeof bannerImage === "object") {
        URL.revokeObjectURL(bannerImage);
      }
      if (profileImage && typeof profileImage === "object") {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [bannerImage, profileImage]);

  // Reusable file upload handler
  const handleFileUpload = async (event, type) => {
    try {
      if (!clientData) {
        console.error("Client data not loaded.");
        return;
      }

      const file = event.target.files[0];
      if (!file) return;

      clientData[type] = file;

      const { data } = await axios.post(
        "http://localhost:5000/upload-images",
        clientData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(data);

      if (type === "profile_image") {
        if (type === "profile_image") {
          if (data.profile_image instanceof File) {
            const profileImageUrl = URL.createObjectURL(data.profile_image);
            setProfileImage(profileImageUrl);
          } else {
            // If it's a URL string, directly use it
            setProfileImage(data.profile_image || data.profile_image_url);
          }
        }
      }
      if (type === "banner_image") {
        if (data.banner_image instanceof File) {
          const bannerImageUrl = URL.createObjectURL(data.banner_image);
          setBannerImage(bannerImageUrl);
        } else {
          // If it's a URL string, directly use it
          setBannerImage(data.banner_image || data.banner_image_url);
        }
      }

      // Refresh the page
      window.location.reload(); // Force page reload after successful upload
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
    }
  };

  if (!clientData) {
    return null;
  }

  const { first_name, last_name, email } = clientData;

  return (
    <div className="h-full bg-gray-100">
      <Navbar fullName={`${first_name} ${last_name}`} />
      <main className="pt-4">
        {/* Banner Photo Section */}
        <div className="relative w-full h-48 bg-gray-200 mb-16">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="banner-upload"
            name="banner_image"
            onChange={(e) => handleFileUpload(e, "banner_image")}
          />
          <label
            htmlFor="banner-upload"
            className="absolute inset-0 cursor-pointer hover:bg-gray-300 transition-colors"
          >
            {bannerImage ? (
              <div className="w-full h-full relative">
                <img
                  src={bannerImage}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
                {/* Overlay for edit indication */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Icon
                    icon="mdi:image-edit"
                    width="48"
                    height="48"
                    className="text-white"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Icon
                  icon="mdi:image-plus"
                  width="48"
                  height="48"
                  className="text-gray-400 mb-2"
                />
                <span className="text-gray-600">
                  Click to upload banner photo
                </span>
              </div>
            )}
          </label>
        </div>

        {/* Profile Photo Upload and User Information Section */}
        <div className="relative mb-16">
          {/* Profile Photo Upload Section */}
          <div className="absolute -bottom-6 left-8">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="profile-upload"
              onChange={(e) => handleFileUpload(e, "profile_image")}
            />
            <label htmlFor="profile-upload" className="cursor-pointer">
              {profileImage ? (
                <div className="relative rounded-full border-4 border-white">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                  {/* Overlay for edit indication */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-full">
                    <Icon
                      icon="mdi:account-edit"
                      width="32"
                      height="32"
                      className="text-white"
                    />
                  </div>
                </div>
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
        <div className="mt-24 px-8">
          <div className="flex">
            {/* Left section - User Info */}
            <div className="flex-1 max-w-wd border-r border-black pr-14">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold mt-4">{`${first_name} ${last_name}`}</h1>
                <button
                  className="p-2 mt-4 text-gray-600 hover:text-cyan-500 rounded-full hover:bg-gray-100"
                  title="Edit Profile"
                  // onClick={handleOpenModal}
                >
                  <Icon icon="mdi:pencil" width="20" height="20" />
                </button>
              </div>
              <p className="text-gray-600 mt-1">
                {/* {artistType.replace(/['"]+/g, "")} */}
              </p>

              <div className="mt-6 space-y-2 text-gray-600">
                <div className="flex items-center mb-6">
                  {/* {bio && <i>"{bio}"</i>} */}
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:map-marker" width="20" height="20" />
                  {/* <span>{address}</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:calendar" width="20" height="20" />
                  {/* <span>{birthday}</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:email" width="20" height="20" />
                  {/* <span>{email}</span> */}
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:phone" width="20" height="20" />
                  {/* <span>+63 912 345 6789</span> */}
                </div>
              </div>

              {/* Stats Section */}
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

            {/* Right section - Action buttons */}
            <div className="w-full pl-6 ml-6 mt-4">
              <div className="space-y-4">
                <div className="flex space-x-8">
                  <button
                    // onClick={toggleArtBox}
                    className="font-semibold text-gray-700 pb-1 hover:text-cyan-500"
                  >
                    Favorites
                  </button>

                  <button
                    // onClick={toggleEventBox}
                    className="font-semibold text-gray-700 pb-1 hover:text-cyan-500"
                  >
                    Followings
                  </button>
                </div>

                {/* <div>
                  <EventBox isOpen={isEventBoxOpen} events={events} />
                </div> */}

                {/* <div>
                  <ArtBox isOpen={isArtBoxOpen} artwork={artwork} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Client;
