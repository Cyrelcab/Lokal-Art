import { Icon } from "@iconify/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar({ fullName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(null);

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
          setProfileImage(client.profile_image); // Set initial profile image
        } else {
          console.error("User not found in the database.");
        }
      } catch (error) {
        console.error("Error loading client data:", error);
      }
    };

    fetchClientData();
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const logoutBtn = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Helper function to check if the current path is active
  const isActive = (path) => {
    // Handle dynamic routes
    if (path.includes(":id")) {
      const basePath = path.split("/:id")[0];
      return location.pathname.startsWith(basePath);
    }
    return location.pathname === path;
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white fixed top-0 w-full z-50">
      <div className="flex items-center">
        <img src="/images/logo-blue.png" alt="LokalArt Logo" className="h-10" />
      </div>

      <div className="flex justify-center px-8">
        <ul className="flex space-x-14 font-semibold">
          <li>
            <Link
              to="/client/discover"
              className={`text-black hover:text-cyan-500 ${
                isActive("/client/discover") ||
                isActive("/client/view-artist/:id")
                  ? "border-b-2 border-cyan-500 pb-1"
                  : ""
              }`}
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              to="/client/transactions"
              className={`text-black hover:text-cyan-500 ${
                isActive("/client/transactions")
                  ? "border-b-2 border-cyan-500 pb-1"
                  : ""
              }`}
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/client/messages"
              className={`text-black hover:text-cyan-500 ${
                isActive("/client/messages")
                  ? "border-b-2 border-cyan-500 pb-1"
                  : ""
              }`}
            >
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
        <Link
          to="/client/profile"
          className="w-8 h-8 border border-gray-300 rounded-full bg-[#ffffff] text-black flex items-center justify-center cursor-pointer overflow-hidden"
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            getInitials(fullName)
          )}
        </Link>
        <button
          onClick={logoutBtn}
          className="px-4 py-2 text-white bg-[#00D1FF] rounded-full hover:bg-[#00b8e6]"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
