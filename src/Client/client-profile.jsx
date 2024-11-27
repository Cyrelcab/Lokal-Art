import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { setDocumentTitle } from "@/utils/document";
import Navbar from "./Components/Navbar";
import axios from "axios";

const Client = () => {
  const [clientData, setClientData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

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
        }
      } catch (error) {
        console.error("Error loading client data:", error);
      }
    };

    fetchClientData();
  }, []);

  // Reusable file upload handler
  const handleFileUpload = async (event, type) => {
    if (!clientData) {
      console.error("Client data not loaded yet.");
      return;
    }
  
    const file = event.target.files[0];
    if (!file) return;
  
    // Convert the file to a Base64 string
    const fileBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // Remove the metadata portion of the Base64 string
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  
    // Construct the payload
    const payload = {
      type,
      first_name: clientData.first_name || "",
      last_name: clientData.last_name || "",
      email: clientData.email || "",
      file_name: file.name,
      file_type: file.type,
      file_data: fileBase64, // Base64-encoded file data
    };
  
    try {
      const response = await axios.post("http://localhost:5000/upload-images", payload, {
        headers: {
          "Content-Type": "application/json", // Send JSON instead of multipart/form-data
        },
      });
  
      if (type === "profile_image" && response.data.profile_image) {
        setProfileImage(response.data.profile_image);
      } else if (type === "banner_image" && response.data.banner_image) {
        setBannerImage(response.data.banner_image);
      }
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
    }
  };
  

  if (!clientData) {
    return <div>Loading...</div>;
  }

  const { first_name, last_name, email } = clientData;

  return (
    <div className="h-full bg-gray-100">
      <Navbar fullName={`${first_name} ${last_name}`} />
      <main className="pt-10">
        {/* Banner Photo Section */}
        <div className="relative w-full h-48 bg-gray-200 mb-16">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="banner-upload"
            onChange={(e) => handleFileUpload(e, "banner_image")}
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
        </div>

        {/* Profile Photo Upload Section */}
        <div className="relative mb-16">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="profile-upload"
            onChange={(e) => handleFileUpload(e, "profile_image")}
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

        {/* User Information */}
        <div className="mt-20 px-8">
          <h1 className="text-3xl font-bold">{`${first_name} ${last_name}`}</h1>
          <div className="mt-6 space-y-2 text-gray-600">
            <div className="flex space-x-2">
              <Icon icon="mdi:email" width="20" height="20" />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Client;
