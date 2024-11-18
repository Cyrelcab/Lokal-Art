import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { setDocumentTitle } from "@/utils/document";
import { useState, useEffect } from "react";
import Modal from "./modal";

const ArtistProfile = ({ artistData: initialArtistData }) => {
  setDocumentTitle("Profile | Lokal-Art");
  const navigate = useNavigate();
  const username = "John Doe";
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [artistData, setArtistData] = useState(
    initialArtistData || {
      name: "Artist Name",
      bio: "Artist Bio",
      // Add other artist data as needed
    }
  );

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .trim()
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0] || "")
      .join("")
      .toUpperCase();
  };

  const logoutBtn = () => {
    navigate("/login");
  };

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    return () => {
      // Cleanup object URLs when component unmounts
      if (bannerImage) URL.revokeObjectURL(bannerImage);
      if (profileImage) URL.revokeObjectURL(profileImage);
    };
  }, [bannerImage, profileImage]);

  return (
    <div className="h-screen bg-gray-100">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="flex items-center">
          <img
            src="/images/logo-blue.png"
            alt="LokalArt Logo"
            className="h-10"
          />
        </div>

        <div className="flex-1 px-8">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="/dashboard" className="text-black hover:text-cyan-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/transactions"
                className="text-black hover:text-cyan-500"
              >
                My Transactions
              </Link>
            </li>
            <li>
              <Link to="/messages" className="text-black hover:text-cyan-500">
                Messages
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <div className="cursor-pointer">
            <Icon
              icon="mdi:bell"
              width="24"
              height="24"
              className="text-cyan-500"
            />
          </div>
          <div className="w-8 h-8 border border-gray-300 rounded-full bg-[#ffffff] text-black flex items-center justify-center cursor-pointer">
            {getInitials(username)}
          </div>
          <button
            onClick={logoutBtn}
            className="px-4 py-2 text-white bg-[#00D1FF] rounded-full hover:bg-[#00b8e6]"
          >
            Logout
          </button>
        </div>
      </nav>

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
                <div className="w-40 h-40 rounded-full bg-gray-300 border-2 border-white flex flex-col items-center justify-center hover:bg-gray-400 transition-colors">
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
          <div>
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">{username}</h1>
              <button
                className="p-2 text-gray-600 hover:text-cyan-500 rounded-full hover:bg-gray-100"
                title="Edit Profile"
                onClick={handleOpenModal}
              >
                <Icon icon="mdi:pencil" width="20" height="20" />
              </button>
            </div>
            <p className="text-gray-600 mt-1">Painter, Visual Artist</p>
          </div>

          <div className="mt-6  space-y-2 text-gray-600">
            <div className="flex items-center mb-6">
              <i>"I want to sleep forever."</i>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="mdi:map-marker" width="20" height="20" />
              <span>Poblacion 7, Cabadbaran City, Agusan Del Norte</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="mdi:calendar" width="20" height="20" />
              <span>January 19, 2003</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 flex space-x-16">
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
      </main>

      {/* Add Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        artistData={artistData}
      />
    </div>
  );
};

export default ArtistProfile;
